//  /chat/ab123

import ChatInput from "@/components/chat/ChatInput";
import EncryptionMessage from "@/components/chat/EncryptionMessage";
import ChatNavbar from "@/components/chat/header/ChatNavbar";

type UserChatPageProps = {
  params: {
    id: string;
  };
};

export default function UserChatPage({ params: { id } }: UserChatPageProps) {
  return (
    <main className="bg-zinc-900 h-full w-full rounded-md flex flex-col">
      <ChatNavbar />
      <div className="flex-1">
        <EncryptionMessage />
      </div>
      <ChatInput />
    </main>
  );
}
