import { create } from "zustand";

const useChatStore = create<Chat>((set) => ({
    messages: [],
    setMessage: (messages) => set({messages}),
    webSocket: null,
    setWebSocket: (webSocket) => set({webSocket}),
}));

export { useChatStore };
