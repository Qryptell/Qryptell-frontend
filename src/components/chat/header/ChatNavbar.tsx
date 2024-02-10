"use client";
import PhoneButton from "../PhoneButton";
import VideoCallButton from "../VideoCallButton";
import UserAvatar from "./UserAvatar";

export default function ChatNavbar({ name }: { name: string }) {
  return (
    <nav className="px-3 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <UserAvatar height={30} width={30} className="cursor-pointer" />
        <h2 className="text-white/90 font-semibold">{name}</h2>
      </div>
        <div className="flex cursor-pointer  items-center rounded-xl bg-[linear-gradient(60deg,_#0B0B0B_10%,_#262626)]   px-1 mr-4">
          <PhoneButton />
          <div className="border-r w-[1px] h-[34px] border-r-[#525252] "></div>
          <VideoCallButton />
        </div>
    </nav>
  );
}
