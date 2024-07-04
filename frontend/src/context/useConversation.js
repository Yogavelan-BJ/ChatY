import { create } from "zustand";
const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  // setMessages: (messages) => set({ messages }),
  setMessages: (value) =>
    set((state) => ({
      messages: typeof value === "function" ? value(state.messages) : value,
    })),
}));
export default useConversation;
