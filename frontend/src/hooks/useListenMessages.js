import { useEffect } from "react";

import { useSocketContext } from "../context/socketContext";
import useConversation from "../context/useConversation";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { setMessages } = useConversation();
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      const sound = new Audio(notificationSound);
      sound.play();
      setMessages((prev) => [...prev, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket]);
};
export default useListenMessages;
