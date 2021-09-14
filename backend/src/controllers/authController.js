import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    // console.log({ username, email, password, hashedPassword });

    const user = await newUser.save();
    res.status(201).json(user);
    // res.send("working");
  } catch (err) {
    res.status(500).json(err);
  }
};
