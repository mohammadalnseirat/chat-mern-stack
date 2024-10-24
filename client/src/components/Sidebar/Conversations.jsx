import React from "react";
import Conversation from "./Conversation";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../Hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emoji";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
          emoji = {getRandomEmoji()}
        />
      ))}

      {loading ? (
        <span className="loading loading-dots loading-md mx-auto text-success"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
