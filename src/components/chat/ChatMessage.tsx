"use client";

import { cn } from "@/lib/utils";


export default function ChatMessage({ isUser, image, msg }: { isUser?: boolean, image?: string, msg?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col w-full ",
        isUser ? " items-end justify-end" : "items-start justify-start"
      )}
    >
      <div
        className={cn(
          "rounded-lg max-w-fit text-sm ",
          isUser ? "shadow-[-20px_0px_100px_rgba(140,4,138,0.3)] bg-[linear-gradient(-60deg,_rgba(196,0,248,1)_50%,_rgba(121,15,148,1))] " :
            "shadow-[-20px_0px_100px_rgba(15,88,216,0.3)] bg-[linear-gradient(-60deg,_#150d24_10%,_#3d07a7)] ",
            image || "py-2 px-3"
        )}
      >
        {msg}
        {image && <img src={image} className={cn(
          "w-300 py-0 px-0 h-auto rounded-lg max-w-full max-h-64",
          isUser ? "bg-purple-800 " : "bg-black ")}
        />}
      </div>
    </div>
  );
}
