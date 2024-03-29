"use client";
import dynamic from "next/dynamic";
import { FormEvent, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaRegFaceSmile } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useChatStore } from "@/store/chatStore";

const Picker = dynamic(
    () => {
        return import("emoji-picker-react");
    },
    { ssr: false }
);

export default function ChatInput({ chatId }: { chatId: string }) {
    const [message, setMessage] = useState<string>("");
    const [showEmojis, setShowEmojis] = useState<boolean>(false);
    const webSocket = useChatStore((state) => state.webSocket);
    const addMessage = useChatStore((state) => state.addMessage);

    const handleEmojiClick = ({ emoji }: { emoji: string }) => {
        setMessage(message + emoji);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!message) return;
        let time = new Date().toLocaleTimeString()
        let id = Math.random().toString(36)
        if (webSocket) {
            var msg: Msg = {
                type: 'USER_MSG',
                content: 'TEXT_MESSAGE',
                message,
                to: chatId,
                id: id,
                time: time
            }

            addMessage(msg)
            webSocket.send(JSON.stringify(msg))
        }
        setMessage("")
    };
    return (
        <footer className="px-2 mb-2 w-full">
            <form
                className="border bg-black border-[#525252] rounded-md w-full p-1 flex items-center "
                onSubmit={handleSubmit}
            >
                <div className="flex items-center pl-2 space-x-5 flex-1">
                    <FaPlusCircle size="25" />
                    <Input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message"
                        className="bg-transparent ring-0 border-0 outline-none w-full focus-visible:ring-0 
            focus-visible:outline-none"
                    />
                    <Button
                        onClick={() => setShowEmojis(!showEmojis)}
                        type="button"
                        variant="ghost"
                        className="bg-transparent hover:bg-transparent hover:text-white"
                    >
                        <FaRegFaceSmile size="25" />
                    </Button>
                </div>

                {showEmojis && (
                    <div className="absolute bottom-20 right-80">
                        <Picker onEmojiClick={handleEmojiClick} lazyLoadEmojis={true} />
                    </div>
                )}
            </form>
        </footer>
    );
}
