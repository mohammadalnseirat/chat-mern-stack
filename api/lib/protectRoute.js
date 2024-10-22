import jwt from "jsonwebtoken";
import { handleErrors } from "../utils/error.js";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    // ?get token from cookies:
    const token = req.cookies.access_token;
    if (!token) {
      return next(handleErrors(401, "Not Authorized- no token provided"));
    }
    // ?verify token:
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      return next(handleErrors(401, "Not Authorized- invalid token"));
    }
    // *Find User:
    const currentUser = await User.findById(decoded.userId).select("-password");
    if (!currentUser) {
      return next(handleErrors(404, "Not Authorized- user not found"));
    }
    // ?attach user to request:
    req.user = currentUser;
    next();
  } catch (error) {
    console.log("Error while protecting route", error.message);
    next(error);
  }
};

export default protectRoute;
