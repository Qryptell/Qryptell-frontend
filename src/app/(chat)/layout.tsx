"use client"
import ChatHeader from "@/components/chat/header/ChatHeader";
import SideBar from "@/components/chat/sidebar/SideBar";
import ProtectedRoute from "@/providers/ProtectedRoute";
import { useUserStore } from "@/store/userStore";
import { cn } from '@/lib/utils'

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
