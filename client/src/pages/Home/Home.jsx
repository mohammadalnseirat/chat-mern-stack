import React from "react";
import MessageContainer from "../../components/Message/MessageContainer";
import SideBar from "../../components/Sidebar/SideBar";

const Home = () => {
  return (
    <div className="flex border border-slate-500 sm:h-[450px] md:h-[550px] overflow-hidden rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5">
      <SideBar />
      <MessageContainer />
    </div>
  );
};

export default Home;
