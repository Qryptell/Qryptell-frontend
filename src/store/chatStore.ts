import { create } from "zustand";

const useChatStore = create<Chat>((set) => ({
    messages: [],
    setMessage: (messages) => set({messages}),
    webSocket: null,
    setWebSocket: (socket) => ({socket}),
}));

export { useChatStore };
