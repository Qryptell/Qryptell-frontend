"use client";

import { cn } from "@/lib/utils";

export default function ChatMessage({isUser}:{isUser?:boolean}) {
//   const isUser = true;
  return (
    <div
      className={cn(
        "flex flex-col w-full",
        isUser ? " items-end justify-end" : "items-start justify-start"
      )}
    >
      <div
        className={cn(
          "py-4 px-6 rounded-t-2xl max-w-fit",
          isUser ? "bg-pink-700 rounded-bl-2xl" : "bg-black  rounded-br-2xl"
        )}
      >
        How does it sound for you?
      </div>
    </div>
  );
}
