import express from "express";
import { sendMessage_Post } from "../controllers/message.controller.js";
import protectRoute from "../lib/protectRoute.js";

const router = express.Router();

router.post("/send-message", protectRoute, sendMessage_Post);

export default router;
