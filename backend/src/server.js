import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js";

dotenv.config();
const app = express();
const port = 5000;

// mongodb+srv://nur:<password>@cluster0.0rwgs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const main = async () => {
  try {
    await mongoose.connect(process.env.mongodb_url);
    console.log("connect to the database");

    // middleware for adding body data to the request
    app.use(express.json());
    // console.log(process.env.mongodb_url);

    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    app.use("/api/v1/users", userRouter);
    app.listen(port, () => {
      console.log(`app listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
