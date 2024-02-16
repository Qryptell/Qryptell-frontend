"use client"
import ChatHeader from "@/components/chat/header/ChatHeader";
import SideBar from "@/components/chat/sidebar/SideBar";
import ProtectedRoute from "@/providers/ProtectedRoute";
import { useUserStore } from "@/store/userStore";
import { cn } from '@/lib/utils'
import { useEffect} from "react";
import { useChatStore } from "@/store/chatStore";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const authToken = useUserStore((state) => state.accessToken);
  const webSocket = useChatStore((state) => state.webSocket);
  const setWebSocket = useChatStore((state) => state.setWebSocket);

  useEffect(() => {
    setWebSocket(
      new WebSocket("ws://lunarloom.com/ws?Authentication=" + authToken),
    );
    return () => {
      if (webSocket) {
        webSocket.close();
      }
    };
  }, [authToken]);

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
