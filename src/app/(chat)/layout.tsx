import ChatHeader from "@/components/chat/header/ChatHeader";
import SideBar from "@/components/chat/sidebar/SideBar";
import ProtectedRoute from "@/providers/ProtectedRoute";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <main className="flex bg-purple-700 overflow-y-hidden h-screen">
        <SideBar />
        <section className="  h-full w-full flex-1 p-1 flex space-y-1 flex-col text-white">
          <ChatHeader />
          {children}
        </section>
      </main>
    </ProtectedRoute>
  );
}
