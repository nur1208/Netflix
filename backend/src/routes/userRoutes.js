import { Router } from "express";
// import { AES, enc } from "crypto-js";
// import { sign } from "jsonwebtoken";
import { login, register } from "../controllers/authController.js";
// import User from "../models/UserModel.js";

const userRouter = Router();

//REGISTER
userRouter.post("/register", register);

//LOGIN
userRouter.post("/login", login);

export default userRouter;
