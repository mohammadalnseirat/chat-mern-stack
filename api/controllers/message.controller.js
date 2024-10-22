import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";
import { handleErrors } from "../utils/error.js";

// !Function to send message:
export const sendMessage_Post = async (req, res, next) => {
  try {
  } catch (error) {
    console.log("Error while sending message", error.message);
    next(error);
  }
};
