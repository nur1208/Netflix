// this file for everything relate to server.
import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { promisify } from "util";
import Movie from "./src/models/MovieModel.js";
// import Tour from "../../src/models/tourModel.js";
// import User from "../../src/models/userModel.js";
// import Review from "../../src/models/ReviewModel.js";

dotenv.config({
  path: "./.env",
});

// const DB = process.env.DATABASE.replace(
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD
// );

// console.log({ DB });

// eslint-disable-next-line no-undef
const DB = process.env.mongodb_url;

const main = async () => {
  try {
    await mongoose.connect(DB);

    // eslint-disable-next-line no-console
    console.log("connected to DB successfully");
    const moviesString = await promisify(fs.readFile)(
      "dummyData.json"
    );

    const movies = JSON.parse(moviesString);
    await Movie.create(movies);
    // await Movie.deleteMany();
    // eslint-disable-next-line no-console
    console.log("movies added successfully to DB");

    // console.log({ movies });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log({ error });
  }
};

// main();

// const tours = JSON.parse(fs.readFileSync("tours.json", "utf-8"));
// const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));
// const reviews = JSON.parse(
//   fs.readFileSync("reviews.json", "utf-8")
// );

// // console.log({ tours, Tour });

const importData = async () => {
  console.log("working");

  // try {
  //   await Movie.create(movies);
  //   // console.log("data successfully loaded");

  //   // eslint-disable-next-line no-undef
  //   process.exit();
  // } catch (error) {
  //   // eslint-disable-next-line no-console
  //   console.log({ error });
  // }
};

// // DELETE ALL DATA FROM DB
// const deleteData = async () => {
//   try {
//     await Tour.deleteMany();
//     await User.deleteMany();
//     await Review.deleteMany();
//     // console.log("Data successfully deleted!");
//   } catch (err) {
//     // console.log(err);
//   }
//   process.exit();
// };

// eslint-disable-next-line no-undef
if (process.argv[2] === "--import") {
  main();
}
// eslint-disable-next-line no-undef
//  else if (process.argv[2] === "--delete") {
//   deleteData();
// }

// console.log({ argv: process.argv });
