import express, { NextFunction, Request, Response } from "express";
const app = express();
const cors = require("cors");

// middle ware
app.use(cors());

// parsers
app.use(express.json());

// router

const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);

  res.json({
    success: true,
    message: "user created is susccessfully",
    data: user,
  });
});

courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);

  res.json({
    success: true,
    message: "course created is susccessfully",
    data: course,
  });
});

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("something");
  } catch (error) {
    console.log(error);
    next(error);
    // res.status(400).json({
    //   success: false,
    //   message: "failed to get the data",
    // });
  }
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("got the data");
});

// custom error handling

app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route is not found",
  });
});

// global error handling

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
});

export default app;
