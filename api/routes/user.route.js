import express from "express";
import { getAllUsersForSideBar_Get } from "../controllers/user.controller.js";
import protectRoute from "../lib/protectRoute.js";

const router = express.Router();

router.get("/", protectRoute, getAllUsersForSideBar_Get);
export default router;
