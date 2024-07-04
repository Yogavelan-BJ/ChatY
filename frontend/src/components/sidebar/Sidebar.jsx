import useConversation from "../../context/useConversation";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  const { selectedConversation } = useConversation();

  return (
    <div
      className={` border-slate-500 p-4 ${
        selectedConversation ? "hidden" : "flex flex-col"
      } md:flex md:flex-col md:border-r`}
    >
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
