import React from "react";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelectedConversation = selectedConversation?._id === conversation._id;
  return (
    <>
      <div
        className={`flex items-center gap-2  hover:bg-green-800 p-4 py-1 rounded-lg cursor-pointer ${
          isSelectedConversation ? "bg-green-800" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          {/* image start here */}
          <div className="w-12 rounded-full">
            <img src={conversation.profilePicture} alt="user-avatar" />
          </div>
        </div>
        {/* Username start here */}
        <div className="flex flex-col flex-1">
          <div className="flex gap-2 justify-between">
            <p className="font-bold text-gray-200 font-mono text-xl">
              {conversation.fullName}
            </p>
            <span className="text-lg">{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && (
        <div className="divider my-0 h-[4px] py-0 divider-neutral" />
      )}
    </>
  );
};

export default Conversation;
