// type alias

type userDetails = {
  name: string;
  gender: string;
  age: number;
  contactNo?: string;
  address: string;
};

const student1: userDetails = {
  name: "sumon",
  gender: "male",
  age: 24,
  contactNo: "01785000",
  address: "natore",
};

const student2: userDetails = {
  name: "shihan",
  gender: "male",
  age: 24,
  contactNo: "01785000",
  address: "natore",
};

// add function type

type Add = (num1: number, num2: number) => number;

const addSum: Add = (num1, num2) => num1 + num2;
