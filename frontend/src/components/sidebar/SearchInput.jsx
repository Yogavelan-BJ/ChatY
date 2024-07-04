import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../context/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
import { useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};
export default SearchInput;
