import React from "react";
import SearchInput from "./SearchInput";
import LogOutButton from "./LogOutButton";
import Conversations from "./Conversations";

const SideBar = () => {
  return (
    <div className="flex flex-col border-r border-r-slate-500 p-4">
      <SearchInput />
      <div className="divider divider-warning px-3"></div>
      <Conversations />
      <LogOutButton />
    </div>
  );
};

export default SideBar;
