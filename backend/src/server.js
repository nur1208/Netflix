import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js";
import morgan from "morgan";
import movieRouter from "./routes/movieRoutes.js";
import listRouter from "./routes/listRoutes.js";

dotenv.config();
const app = express();
const port = 5000;

const main = async () => {
  try {
    // eslint-disable-next-line no-undef
    await mongoose.connect(process.env.mongodb_url);
    // eslint-disable-next-line no-console
    console.log("connect to the database");

    // middleware for adding body data to the request
    app.use(express.json());

    app.use(morgan("dev"));
    // console.log(process.env.mongodb_url);

    app.get("/", (req, res) => {
      res.send("Hello World!");
    });

    app.use("/api/v1/users", userRouter);
    app.use("/api/v1/movies", movieRouter);
    app.use("/api/v1/lists", listRouter);

    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`app listening at http://localhost:${port}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

main();
