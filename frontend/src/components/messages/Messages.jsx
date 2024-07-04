import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";
import useConversation from "../../context/useConversation";

const Messages = () => {
  useListenMessages();
  const { loading } = useGetMessages();
  const { messages } = useConversation();

  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && [...Array(5)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {!loading && messages.length === 0 && (
        <h6 className="text-center">
          Send a message to start the conversation
        </h6>
      )}
    </div>
  );
};
export default Messages;
