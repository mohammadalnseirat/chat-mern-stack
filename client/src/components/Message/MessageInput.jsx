import React from "react";
import { MdSend } from "react-icons/md";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-tr-full rounded-br-full block w-full p-2.5 bg-gray-300 border-green-500 text-gray-900 focus:outline-none"
          placeholder="Type a message..."
        />
        <button className="absolute inset-y-0 end-0  bg-green-600 flex items-center justify-center gap-3 px-3 rounded-tl-md rounded-tr-full rounded-br-full rounded-bl-md">
          <MdSend className="w-6 h-6 " />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
