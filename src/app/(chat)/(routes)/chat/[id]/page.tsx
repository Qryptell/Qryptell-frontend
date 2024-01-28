import ChatInput from "@/components/chat/ChatInput";
import ChatMessage from "@/components/chat/ChatMessage";
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
      <div className="flex-1 overflow-y-scroll pb-52 pt-4 space-y-6 px-8 scrollbar-hide">
        <EncryptionMessage />
        <div className="space-y-2">
          <ChatMessage msg="hi" />
          <ChatMessage msg="how are" isUser />
          <ChatMessage msg="Iam Fine"  />
          <ChatMessage msg="Iam Fine" isUser />
          <ChatMessage msg="Iam Fine" isUser={true} />
          <ChatMessage msg="Iam Fine" />
          <ChatMessage msg="Iam Fine" isUser={true} />
          <ChatMessage msg="Iam Fine" isUser={true} />
          <ChatMessage msg="Iam Fine" isUser={true} />
          <ChatMessage isUser={true}  msg="Iam Fine" />
          <ChatMessage msg="Iam Fine" />
          <ChatMessage msg="Iam Fine" />
          <ChatMessage msg="Iam Fine" isUser={true} />
        </div>
      </div>
      <ChatInput />
    </main>
  );
}
