import {Server} from "socket.io";
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

// ?Socket Connection:
// !Listen To Connection:
io.on("connection", (socket) => {
  console.log("User Connected", socket.id);

  //! socket.on() is used to listen to the events. can be used both on client and server side
  // ? Listwn to disconnect:
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

export { app, io, server };
