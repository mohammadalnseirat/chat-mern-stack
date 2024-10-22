import User from "../models/user.model.js";
import { handleErrors } from "../utils/error.js";

//! Function To Get All Users:
export const getAllUsersForSideBar_Get = async (req, res, next) => {
  try {
    const loggedInUserId = req.user._id;
    // ?Get All Users not equal to logged in user:
    const filteredUsers = await User.find({
      _id: {
        $ne: loggedInUserId,
      },
    }).select("-password");
    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error while getting all users For sidebar", error.message);
    next(error);
  }
};
