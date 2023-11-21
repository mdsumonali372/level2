// dectructuring

const userInfo = {
  id: 1245,
  userName: {
    firstName: "sumon",
    lastName: "ali",
  },
  contactNo: "01725458",
};

const {
  contactNo,
  userName: { firstName: userFirstName },
} = userInfo;

// array

const myFriends = ["sumon", "sakib", "sadhin", "shihab", "hasib"];

const [, , bestFriend, ...restFriend] = myFriends;
