// spread operator
// rest operator
// dectructuring

//learn spread operator

const bros1: string[] = ["sumon", "shipon", "sohan"];

const bros2: string[] = ["ripon", "shimul", "sabbir"];

bros1.push(...bros2);

const mentors1 = {
  web: "sumon",
  graphcis: "sahaurl",
  digital: "sazzad",
};

const mentors2 = {
  front: "shipon",
  back: "soahan",
  full: "jhankar",
};

const mentorList = {
  ...mentors1,
  ...mentors2,
};

// learn rest operator

const greetFriends = (...friends: string[]) => {
  // console.log(`hi ${friend1} ${friend2} ${friend3}`)
  friends.forEach((friend: string) => console.log(`hi ${friend}`));
};

greetFriends("abul", "kabul", "babul", "joshim");
