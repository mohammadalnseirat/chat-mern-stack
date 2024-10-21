import { handleErrors } from "../utils/error.js";
import User from "../models/user.model.js";

//! Function To Sign Up:
export const signUp_Post = async (req, res, next) => {
  try {
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
