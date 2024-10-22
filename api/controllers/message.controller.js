import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";
import { handleErrors } from "../utils/error.js";

// !Function to send message:
export const sendMessage_Post = async (req, res, next) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
    // ?Find The Conversation:
    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });
    if (!conversation) {
      // ?Create New Conversation:
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    // ?Create New Message:
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    // *Push the new message in the conversation:
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // ?save the conversation and message:
    // !This way to save will take time to save in data base instaed of we will use promises:
    // await conversation.save();
    // await newMessage.save();
    //! this will run in parallel:
    await Promise.all([conversation.save(), newMessage.save()]);
    // ?Send the response back:
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error while sending message", error.message);
    next(error);
  }
};

// !Function to get messages:
export const getMessages_Get = async (req, res, next) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, userToChatId],
      },
    }).populate("messages"); //! NOT REFERENCE BUT ACTUAL MESSAGES
    if (!conversation) {
      return res.status(200).json([]);
    }
    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error while getting messages", error.message);
    next(error);
  }
};
