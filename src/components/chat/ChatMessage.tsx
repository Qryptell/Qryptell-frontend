"use client";

import { cn } from "@/lib/utils";


export default function ChatMessage({ isUser, image, msg }: { isUser?: boolean, image?: string, msg?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col w-full",
        isUser ? " items-end justify-end" : "items-start justify-start"
      )}
    >
      <div
        className={cn(
          "py-2 px-4 rounded-t-2xl max-w-fit",
          isUser ? "border border-purple-800 rounded-bl-2xl" : "border border-pink-700  rounded-br-2xl",
          image && "py-1 px-1"
        )}
      >
        {msg}
        {image && <img src={image} alt="image" className={cn(
          "w-300 h-auto max-w-full max-h-64 rounded-t-2xl",
          isUser ? "bg-purple-800 rounded-bl-2xl" : "bg-black  rounded-br-2xl")}
        />}
      </div>
    </div>
  );
}
