// learing function
// normal function
// arrow function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(12, 45);

// arrow function

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object --> function --> method

const poorUser = {
  firstName: "sumon",
  balance: 0,
  addBalance(balance: number): number {
    return this.balance + balance;
  },
};

const arr: number[] = [1, 4, 56];

const newArray: number[] = arr.map(
  (element: number): number => element * element
);
