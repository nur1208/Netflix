import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { promisify } from "util";
import User from "../models/UserModel.js";

export const register = async (req, res) => {
  try {
    const { username, email, password, isAdmin } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      isAdmin,
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
  // console.log({ email });

  try {
    const user = await User.findOne({ email }).select("+password");
    !user && res.status(401).json("Wrong password or username!");

    // console.log({ password: user.password });

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
    // eslint-disable-next-line no-unused-vars
    const { password, __v, ...info } = user._doc;

    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    res.status(500).send({ err });
  }
};

export const protect = async (req, res, next) => {
  try {
    let token;
    // console.log(`here`);

    // 1 getting token and check if it's there
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      res.status(401).send({
        message:
          "you are not logged in! Please log in to get access",
      });

      // return next(
      //   new AppError(
      //     "you are not logged in! Please log in to get access",
      //     401
      //   )
      // );
    }
    console.log({ token });

    // 2 verification token
    const decode = await promisify(jwt.verify)(
      token,

      // eslint-disable-next-line no-undef
      process.env.SECRET_KEY
    );

    // 3 check if user still exists
    const currentUser = await User.findById(decode.id).select(
      "+password"
    );
    // if the user delete after we send him a token
    // and before the token expired
    if (!currentUser) {
      res.status(401).send({
        message:
          "The user belonging to this token does no longer exist",
      });

      // return next(
      //   new AppError(
      //     "The user belonging to this token does no longer exist",
      //     401,
      //     "TokenExpiredError"
      //   )
      // );
    }

    console.log({ currentUser });

    // grant access to protected route
    req.user = currentUser;
    next();
  } catch (error) {
    res.status(401).send({ error });
  }
};
