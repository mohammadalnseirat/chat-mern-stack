import { Server } from "socket.io";
import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
  },
});

export const getReciverSocketId = (reciverId) => {
  return userSocketMap[reciverId];
}

const userSocketMap = {}; //? Map of user to socket id {userId: socketId}
// ?Socket Connection:
// !Listen To Connection:
io.on("connection", (socket) => {
  console.log("User Connected", socket.id);
  // *get the userId from the socket.handshake.query:
  const userId = socket.handshake.query.userId;
  // !Add the userId to the userSocketMap:
  if (userId != "undefined") {
    userSocketMap[userId] = socket.id;
  }
  //* io.emit() is used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));
  //! socket.on() is used to listen to the events. can be used both on client and server side
  // ? Listwn to disconnect:
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
    // !Remove the userId from the userSocketMap:
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };
