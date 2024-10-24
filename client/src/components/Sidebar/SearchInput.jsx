import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../Hooks/useGetConversations";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const [loading, setLoading] = useState(false);
  //? Function to handle Submit:
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      return toast.error("Please enter something");
    }
    setLoading(true);
    if (search.length < 3) {
      return toast.error("Please enter at least 3 characters");
      setLoading(false);
    }
    //! Find The Conversation:
    const conversation = conversations.find((conv) =>
      conv.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
      setLoading(false);
    } else {
      toast.error("No Such Conversation found");
      setLoading(false);
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search...."
        className="input input-bordered rounded-full "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        disabled={loading}
        type="submit"
        className="btn btn-circle text-gray-100 btn-success group"
      >
        {loading ? (
          <div className="loading loading-spinner loading-md"></div>
        ) : (
          <IoSearchSharp className="w-6 h-6 group-hover:scale-110 group-hover:rotate-90 transition-all duration-300" />
        )}
      </button>
    </form>
  );
};

export default SearchInput;
