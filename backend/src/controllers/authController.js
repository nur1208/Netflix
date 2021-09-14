import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";

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

export const login = async (req, res) => {
  const { email } = req.body;
  // console.log({ email, password });

  try {
    const user = await User.findOne({ email });
    !user && res.status(401).json("Wrong password or username!");

    const isCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    !isCorrectPassword &&
      res.status(401).json("Wrong password or username!");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      // eslint-disable-next-line no-undef
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    console.log({ doc: user._doc });

    // give us all the info of the user and live out the password and __v only
    const { password, __v, ...info } = user._doc;

    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
};
