import React, { useEffect, useState } from "react";
import useConversation from "../context/useConversation";

import toast from "react-hot-toast";

function useGetMessages() {
  const { selectedConversation, messages, setMessages } = useConversation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getMsgs = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation?._id}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMsgs();
  }, [selectedConversation?._id]);

  return { loading, messages };
}

export default useGetMessages;
