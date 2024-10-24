import React from "react";
import { useAuthContext } from "../../Context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message?.senderId === authUser?._id;
  const formattedTime = extractTime(message?.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePicture = fromMe
    ? authUser.profilePicture
    : selectedConversation?.profilePicture;
  const bubbleBgColor = fromMe ? "bg-green-800" : "bg-gray-800";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePicture} />
        </div>
      </div>
      <div className={`chat-bubble text-gray-50 ${bubbleBgColor} pb-2`}>
        {message?.message}
      </div>
      <div className="chat-footer opacity-50 text-xs text-gray-100 flex gap1 items-center ">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
