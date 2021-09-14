import { Router } from "express";
// import { AES, enc } from "crypto-js";
// import { sign } from "jsonwebtoken";
import {
  login,
  protect,
  register,
} from "../controllers/authController.js";
import {
  deleteUser,
  getAllUsers,
  getUser,
  getUserStats,
  me,
  updateUser,
} from "../controllers/userController.js";
// import User from "../models/UserModel.js";

const userRouter = Router();

//REGISTER
userRouter.post("/register", register);

//LOGIN
userRouter.post("/login", login);

// all the route after this will be protect.
// the user need to be logged in to access the following
// routes
userRouter.use(protect);

//GET USER STATS
userRouter.get("/stats", getUserStats);

userRouter.get("/me", me);

userRouter.route("/").get(getAllUsers);

userRouter
  .route("/:id")
  .delete(deleteUser)
  .put(updateUser)
  .get(getUser);

export default userRouter;
