import { Router } from "express";
// import { AES, enc } from "crypto-js";
// import { sign } from "jsonwebtoken";
import { register } from "../controllers/authController.js";
// import User from "../models/UserModel.js";

const userRouter = Router();

//REGISTER
// console.log("here");

userRouter.post("/register", register);

//LOGIN
// userRouter.post("/login", async (req, res) => {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     !user && res.status(401).json("Wrong password or username!");

//     const bytes = AES.decrypt(
//       user.password,
//       process.env.SECRET_KEY
//     );
//     const originalPassword = bytes.toString(enc.Utf8);

//     originalPassword !== req.body.password &&
//       res.status(401).json("Wrong password or username!");

//     const accessToken = sign(
//       { id: user._id, isAdmin: user.isAdmin },
//       process.env.SECRET_KEY,
//       { expiresIn: "5d" }
//     );

//     const { password, ...info } = user._doc;

//     res.status(200).json({ ...info, accessToken });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

export default userRouter;
