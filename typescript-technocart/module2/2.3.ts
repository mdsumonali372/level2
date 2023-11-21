{
  // Introduction to generics

  // generic types

  type GenericArray<T> = Array<T>;

  const rollNumbers: GenericArray<number> = [3, 4, 5];

  const friends: GenericArray<string> = ["sumon", "shipon"];

  const booleanArray: GenericArray<boolean> = [true, false];

  // object

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "sumon",
      age: 23,
    },
    {
      name: "jahnkar",
      age: 30,
    },
  ];

  // generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["sumon", "shipon"];
}
