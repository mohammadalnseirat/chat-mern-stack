import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import useSendMessage from "../../Hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  //? handle submit message:
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-tr-full rounded-br-full block w-full p-2.5 bg-gray-300 border-green-500 text-gray-900 focus:outline-none"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          disabled={loading}
          className="absolute inset-y-0 end-0  bg-green-600 flex items-center justify-center gap-3 px-3 rounded-tl-md rounded-tr-full rounded-br-full rounded-bl-md"
        >
          {loading ? (
            <div className="loading loading-ring"></div>
          ) : (
            <MdSend className="w-6 h-6 text-gray-100" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
