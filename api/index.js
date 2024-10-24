import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectionToDatabase } from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.json()); //! to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());
// ?Routes here:
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/messages", messageRoutes);
app.use("/api/v1/users", userRoutes);

server.listen(PORT, () => {
  connectionToDatabase();
  console.log(`server is running on port ${PORT}`);
});

// *Middleware to Handle Errors:
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
