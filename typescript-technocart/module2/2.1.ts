{
  // Type assertion / type narrowing

  // Type assertion

  let anything: any;

  anything: "next web development";
  anything: 2555;

  (anything as number).toFixed;

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return convertedValue;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm("1000") as string;
  const result2 = kgToGm(1000) as number;

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
