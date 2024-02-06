"use client";
import ChatInput from "@/components/chat/ChatInput";
import ChatMessage from "@/components/chat/ChatMessage";
import EncryptionMessage from "@/components/chat/EncryptionMessage";
import ChatNavbar from "@/components/chat/header/ChatNavbar";
import {useState} from "react"

type UserChatPageProps = {
  params: {
    name: string;
  };
};

export default function UserChatPage({ params: { name } }: UserChatPageProps) {
  const [chat,setChat] = useState<{isUser?:boolean,msg?:string,image?:string}[]>([{isUser:true,msg:"hi"},{msg:"hellow"},{isUser:true,msg:"how are you"},{msg:"iam fine"}])
  return (
    <main className="bg-black h-full w-full rounded-md flex flex-col">
      <ChatNavbar name={name} />
      <div className="flex-1 overflow-y-scroll ml-1 pb-52 pt-4 space-y-6 px-8 scrollbar-hide">
        <EncryptionMessage />
        <div className="space-y-2">
          {
            chat?.map((chatmsg)=>(
              <ChatMessage msg={chatmsg.msg} key={Date.now().toString()+chatmsg.msg+Math.random()*100} image={chatmsg.image} isUser={chatmsg.isUser} />
            ))
          }
        </div>
      </div>
      <ChatInput />
    </main>
  );
}
