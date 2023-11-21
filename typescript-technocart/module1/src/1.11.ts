{
  // Ternary, optional chaining & nullish coalescing operator
  const age: number = 18;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("is not adult");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";

  console.log(isAdult);

  // nullish coalescing operator

  const isAuthenicated = null;

  const result1 = isAuthenicated ?? "Guest";
  const result2 = isAuthenicated ? isAuthenicated : "Guest";
  console.log({ result1, result2 });

  // optional chaining

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      thana?: string;
    };
  };

  const user: User = {
    name: "sumon",
    address: {
      city: "natore",
      road: "singra",
    },
  };

  const fullAdress = user?.address?.thana ?? "no thana";

  console.log({ fullAdress });
}
