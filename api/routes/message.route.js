import express from "express";
import {
  getMessages_Get,
  sendMessage_Post,
} from "../controllers/message.controller.js";
import protectRoute from "../lib/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages_Get);
router.post("/send-message/:id", protectRoute, sendMessage_Post);

export default router;
