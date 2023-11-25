import Joi, { LanguageMessages } from 'joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string().max(20).required().messages({
    'any.required': 'First name is required.',
    'string.max': 'First name must be less than or equal to 20 characters.',
  }),
  middleName: Joi.string(),
  lastName: Joi.string()
    .required()
    .custom((value, helpers) => {
      if (!/^[a-zA-Z]+$/.test(value)) {
        return helpers.message({
          custom: 'Last name must contain only alphabetic characters.',
        } as LanguageMessages);
      }
      return value;
    }),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string(),
  motherContactNo: Joi.string().required(),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required(),
  occupation: Joi.string(),
  contactNo: Joi.string().required(),
  address: Joi.string(),
});

const studentValidationJoiSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameValidationSchema.required(),
  gender: Joi.string().valid('male', 'female', 'other').required(),
  dateOfBirth: Joi.string(),
  email: Joi.string().email().required(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string().required(),
  bloodGroup: Joi.string().valid(
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  profileImg: Joi.string(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
});

export default studentValidationJoiSchema;
