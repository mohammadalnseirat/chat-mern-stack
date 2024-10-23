import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search...."
        className="input input-bordered rounded-full "
      />
      <button
        type="submit"
        className="btn btn-circle text-gray-100 btn-success group"
      >
        <IoSearchSharp className="w-6 h-6 outline-none group-hover:rotate-90 transition-all duration-300" />
      </button>
    </form>
  );
};

export default SearchInput;
