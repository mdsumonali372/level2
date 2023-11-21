{
  // Union and Intersection types

  // union types

  //   type FrontEndDeveloper = "fakibazzdeveloper" | "juniordeveloper";
  //   type FullStackDeveloper = "frontenddeveloper" | "expertdeveloper";

  //   type Developer = FrontEndDeveloper | FullStackDeveloper;

  //   const newDeveloper: FrontEndDeveloper = "juniordeveloper";

  // type User = {
  //     name: string;
  //     gender: 'male' | 'female'
  //     bloodGroup: 'O+' | 'B+' | 'A+'
  // }

  // const user1: User = {
  //     name: 'sumon',
  //     gender: 'male',
  //     bloodGroup: 'B+'
  // }

  type FrontEndDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontEndDeveloper & BackendDeveloper;

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["html", "css", "express js"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  // ntersection types
}
