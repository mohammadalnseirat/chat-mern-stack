import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";
// ! Implement Socket  set up for client side:
// * 1-Create Context
export const SocketContext = createContext();

// * 2-Create Provider
export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    // ? check if there is user and create socket connection:
    if (authUser) {
      // * URL For Backend:
      const socket = io("http://localhost:3000");
      setSocket(socket);
      // ? clear the connection when the component unmounts:
      return () => {
        socket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
