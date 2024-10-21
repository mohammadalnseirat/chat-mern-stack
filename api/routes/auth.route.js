import express from "express";
import {
  logOut_Post,
  signIn_Post,
  signUp_Post,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/sign-up", signUp_Post);
router.post("/sign-in", signIn_Post);
router.post("/log-out", logOut_Post);

export default router;
