import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { BiSolidMessageAdd } from "react-icons/bi";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../Context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  //! useEffect for commponent will unMount:
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="sm:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoSelectedConversation />
      ) : (
        <>
          {/* Header Start Here */}
          <div className="bg-slate-900 border-b border-b-slate-500 px-4 py-2 mb-2 flex items-center flex-nowrap gap-1">
            <span className="text-green-500 font-semibold text-lg italic">
              To:
            </span>
            <span className="text-gray-300 font-bold font-mono text-2xl">
              {selectedConversation?.fullName}
            </span>
          </div>
          {/* Header End Here */}
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoSelectedConversation = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-2xl text-gray-300 font-semibold flex flex-col items-center gap-2">
        <p className="capitalize text-gray-200">
          Welcom👋🏻 {authUser.fullName}
        </p>
        <p className="text-green-500">Selcet a Chat to Start messaging</p>
        <BiSolidMessageAdd className="text-3xl md:text-6xl text-center text-red-500 hover:scale-110 transition-all duration-300 " />
      </div>
    </div>
  );
};
