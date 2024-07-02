"use client"
import ChatHeader from "@/components/chat/header/ChatHeader";
import SideBar from "@/components/chat/sidebar/SideBar";
import ProtectedRoute from "@/providers/ProtectedRoute";
import { useUserStore } from "@/store/userStore";
import { cn } from '@/lib/utils'
import { useEffect} from "react";
import { useChatStore } from "@/store/chatStore";

export default function ChatLayout({
  children
}: {
  children: React.ReactNode;
}) {

  const authToken = useUserStore((state) => state.accessToken);
  const webSocket = useChatStore((state) => state.webSocket);
  const setWebSocket = useChatStore((state) => state.setWebSocket);
  const chatId = useChatStore((state) => state.chatId);
  const addMessage = useChatStore((state) => state.addMessage);

  useEffect(() => {
    setWebSocket(
        new WebSocket("ws://qryptell.com/ws?Authentication=" + authToken),
    );
    return () => {
      if (webSocket) {
        webSocket.close();
      }
    };
  }, [authToken]);

    useEffect(() => {
        if (webSocket) {
            webSocket.addEventListener("message", (event) => {
                let data = JSON.parse(event.data)
                if (data.from == chatId || data.to == chatId) {
                    switch (data.type) {
                        case "USER_MSG":
                            addMessage(data)
                    }
                }
            })
        } 
    },[webSocket])

  let color = 'bg-black'
  useUserStore((state) => color = state.themeColor)
  return (
    <ProtectedRoute>
      <main className={cn(`bg-black overflow-y-hidden h-screen`)} >
        <ChatHeader />
        <section className="h-full w-full flex-1 flex pr-4 text-white">
          <SideBar themeColor={color} />
          {children}
        </section>
      </main>
    </ProtectedRoute>
  );
}
