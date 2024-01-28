"use client";

import { cn } from "@/lib/utils";


export default function ChatMessage({isUser,image,msg}:{isUser?:boolean,image?:string,msg?:string} ) {
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
          isUser ? "bg-pink-700 rounded-bl-2xl" : "bg-black  rounded-br-2xl",
          image && "clsess here"
        )} 
      >
         {msg}
      </div>
        <img src = "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" className="w-300 h-auto max-w-full max-h-64 rounded-lg m-5"/>
    </div>
  );
}
