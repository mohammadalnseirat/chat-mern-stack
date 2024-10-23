import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex items-center gap-2  hover:bg-green-800 p-4 py-1 rounded-lg cursor-pointer">
        <div className="avatar online">
          {/* image start here */}
          <div className="w-12 rounded-full">
            <img
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              alt="user-avatar"
            />
          </div>
        </div>
        {/* Username start here */}
        <div className="flex flex-col flex-1">
          <div className="flex gap-2 justify-between">
            <p className="font-bold text-gray-200 font-mono text-xl">
              Razan Masalmh
            </p>
            <span className="text-lg">🦋</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 h-[4px] py-0 divider-neutral" />
    </>
  );
};

export default Conversation;
