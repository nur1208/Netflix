import bcrypt from "bcryptjs";
import User from "../models/UserModel.js";

export const getAllUsers = async (req, res) => {
  const query = req.query.new;
  console.log({ isAdmin: req.user.isAdmin });

  if (req.user.isAdmin) {
    try {
      const users = query
        ? await User.find().sort({ createdAt: -1 }).limit(5)
        : await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are not allowed to see all users!");
  }
};

export const deleteUser = async (req, res) => {
  // the logged in user can delete himself or admin can delete anyone
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can delete only your account!");
  }
};

export const updateUser = async (req, res) => {
  // the logged in user can update himself or admin can update anyone

  if (req.user.id === req.params.id || req.user.isAdmin) {
    // if the user want to update himself not for the admin
    if (req.body.password) {
      const isCorrectPassword = await bcrypt.compare(
        req.body.password,
        req.user.password
      );

      if (!isCorrectPassword) {
        res.status(401).json("Wrong password!");
        return;
      }
    } else if (!req.user.isAdmin) {
      res.status(401).json("password is required!");
      return;
    }

    try {
      const { username, email } = req.body;
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: { username, email },
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can update only your account!");
  }
};

// me middleware controller of getting the current user info
export const me = async (req, res) => {
  console.log({ _id: req.user._id });

  try {
    const currentUser = await User.findById(req.user._id);
    res.status(200).send({ currentUser });
  } catch (error) {
    res.status(500).send({ error });
  }
};

export const getUser = async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const user = await User.findById(req.params.id);

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can see only your account info!");
  }
};

export const getUserStats = async (req, res) => {
  const today = new Date();
  const latYear = today.setFullYear(today.setFullYear() - 1);

  try {
    // get my all the user of each month
    // but if there is no user has been create in that month
    // ignore the month
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};
