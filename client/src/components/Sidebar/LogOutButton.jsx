import React from "react";
import { BiLogOut } from "react-icons/bi";

const LogOutButton = () => {
  return (
    <div className="mt-auto">
      <BiLogOut className="w-8 h-8 text-gray-300 cursor-pointer hover:text-red-600 hover:scale-110 hover:rotate-180 transition-all duration-300 " />
    </div>
  );
};

export default LogOutButton;
