import { handleErrors } from "../utils/error.js";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import genderateTokenAndSetCookie from "../lib/genderateTokenAndSetCookie.js";

//! Function To Sign Up:
export const signUp_Post = async (req, res, next) => {
  const { fullName, username, password, confirmPassword, gender } = req.body;
  try {
    // ? Validation:
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return next(handleErrors(400, "All fields are required"));
    }

    // ?validation for password:
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (!passwordRegex.test(password)) {
      return next(
        handleErrors(
          400,
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        )
      );
    }
    if (password !== confirmPassword) {
      return next(handleErrors(400, "Passwords do not match"));
    }
    // ?validation for User already exist:
    const user = await User.findOne({ username });
    if (user) {
      return next(handleErrors(400, "User already exist"));
    }
    // !Hash Password:
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    // !Image For User:
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    // !Create User:
    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePicture: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    // ? before save the new User create cookie and send it to the client:
    if (newUser) {
      genderateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePicture: newUser.profilePicture,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error while signing up", error.message);
    next(error);
  }
};

//! Function To Sign In:
export const signIn_Post = async (req, res, next) => {
  try {
  } catch (error) {
    console.log("Error while signing in", error.message);
    next(error);
  }
};

//! Function To Log Out:
export const logOut_Post = async (req, res, next) => {
  try {
  } catch (error) {
    console.log("Error while logging out", error.message);
    next(error);
  }
};
