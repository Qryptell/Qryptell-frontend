import ChatInput from "@/components/chat/ChatInput";
import ChatMessage from "@/components/chat/ChatMessage";
import EncryptionMessage from "@/components/chat/EncryptionMessage";
import ChatNavbar from "@/components/chat/header/ChatNavbar";

type UserChatPageProps = {
  params: {
    name: string;
  };
};

export default function UserChatPage({ params: { name } }: UserChatPageProps) {
  return (
    <main className="bg-black h-full w-full rounded-md flex flex-col">
      <ChatNavbar name={name} />
      <div className="flex-1 overflow-y-scroll ml-1 pb-52 pt-4 space-y-6 px-8 scrollbar-hide">
        <EncryptionMessage />
        <div className="space-y-2">
          <ChatMessage msg="hi" />
          <ChatMessage msg="how are" isUser />
          <ChatMessage msg="Iam Fine"  />
          <ChatMessage image={"https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"}  isUser />
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
