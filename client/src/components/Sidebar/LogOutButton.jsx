import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../Hooks/useLogout";

const LogOutButton = () => {
  const { loading, logOutUser } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          onClick={logOutUser}
          className="w-8 h-8 text-gray-300 cursor-pointer hover:text-red-600 hover:scale-110 hover:rotate-180 transition-all duration-300 "
        />
      ) : (
        <span className="loading loading-infinity loading-md text-error"></span>
      )}
    </div>
  );
};

export default LogOutButton;
