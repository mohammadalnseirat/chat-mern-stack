import React, { useEffect } from "react";
import { useSocketContext } from "../Context/SocketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  // UseEffect to listen for new messages and send it to the other user:
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages([...messages, newMessage]);
    });

    // ?Clear the listener when the component unmounts:
    return () => {
      socket?.off("newMessage");
    };
  }, [socket, messages, setMessages]);
};

export default useListenMessages;
