import { create } from "zustand";

const useChatStore = create<Chat>((set) => ({
    chatId: null,
    setChatId: (chatId) => set({ chatId }),
    messages: [],
    addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
    webSocket: null,
    setWebSocket: (webSocket) => set({ webSocket }),
}));

export { useChatStore };
