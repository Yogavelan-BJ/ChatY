import { useEffect } from "react";
import useConversation from "../../context/useConversation";
import { useSocketContext } from "../../context/socketContext";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  useEffect(() => {
    return setSelectedConversation(null);
  }, []);
  return (
    <>
      <div
        className={`${
          selectedConversation?._id === conversation?._id ? "bg-sky-500" : ""
        } flex gap-2 items-center hover:bg-slate-700 rounded p-2 py-1 cursor-pointer`}
        onClick={() => {
          setSelectedConversation(conversation);
        }}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
          </div>
        </div>
      </div>

      {lastIdx ? <></> : <div className="divider my-0 py-0 h-1" />}
    </>
  );
};
export default Conversation;
