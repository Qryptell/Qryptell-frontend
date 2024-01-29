"use client"
import ChatHeader from "@/components/chat/header/ChatHeader";
import SideBar from "@/components/chat/sidebar/SideBar";
import ProtectedRoute from "@/providers/ProtectedRoute";
import { useUserStore } from "@/store/userStore";
import { useState } from "react";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let color = 'bg-purple-700'
  useUserStore((state) => color = state.themeColor)
  return (
    <ProtectedRoute>
      <main className={`flex ${color} pb-1 overflow-y-hidden h-screen`} >
        <SideBar themeColor={color} />
        <section className="h-full w-full flex-1 p-1 flex space-y-1 flex-col text-white">
          <ChatHeader />
          {children}
        </section>
      </main>
    </ProtectedRoute>
  );
}
