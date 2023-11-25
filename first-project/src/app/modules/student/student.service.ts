import { TStudent } from './student.interface';
import { Student } from './student.models';

const createStudentIntoDB = async (studentData: TStudent) => {
  // jodi indexing kora thakey DB tey tahole agey aivabe check kortey hobe
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('User Already Exists');
  }

  const result = await Student.create(studentData); // build in static method

  // const student = new Student(studentData); // create an instance
  // if (await student.isUserExists(studentData.id)) {
  //   throw new Error('User Already Exists');
  // }
  // const result = await student.save(); // build in instacance method
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};
const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
