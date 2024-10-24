import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../Hooks/useGetMessages";
import MessageSkeleton from "../skeletons/messageSkeleton";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef();

  //? useEffect to scroll to last message:(side effect )
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }, [messages]);
  return (
    <div className=" flex-1 px-4 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-400 font-semibold">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
