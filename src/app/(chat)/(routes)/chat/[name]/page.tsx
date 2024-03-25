"use client"
import ChatInput from "@/components/chat/ChatInput";
import ChatMessage from "@/components/chat/ChatMessage";
import EncryptionMessage from "@/components/chat/EncryptionMessage";
import ChatNavbar from "@/components/chat/header/ChatNavbar";
import { useChatStore } from "@/store/chatStore";

type UserChatPageProps = {
  params: {
    name: string;
  };
};

export default function UserChatPage({ params: { name: id } }: UserChatPageProps) {

    const messages = useChatStore((state) => state.messages);
    const setChatId = useChatStore((state) => state.setChatId);

    setChatId(id)

  return (
    <main className="bg-black h-[34rem] mb-4 w-full border border-[#525252] rounded-2xl ">
      <div className="h-[30.5rem] flex flex-col">
        <ChatNavbar name={id} />
        <div className="flex-1 overflow-y-scroll pb-52 pt-4 space-y-6 px-4 scrollbar-hide">
          <EncryptionMessage />
          <div className="space-y-2">
          {
              messages.map((message,index) => {
                  return (
                      <ChatMessage key={index} msg={message.message} isUser={message.from != id} />
                  )   
              })
          }
          </div>
        </div>
      </div>
      <ChatInput chatId={id}/>
    </main>
  );
}
