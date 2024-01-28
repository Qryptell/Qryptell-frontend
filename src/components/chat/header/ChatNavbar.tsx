"use client";
import PhoneButton from "../PhoneButton";
import VideoCallButton from "../VideoCallButton";
import UserAvatar from "./UserAvatar";

export default function ChatNavbar({name}:{name:string}) {
  return (
    <nav className="px-8 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <UserAvatar height={45} width={45} className="cursor-pointer" />
        <h2 className="text-white/90 font-semibold">{name}</h2>
      </div>

      <div className="flex items-center space-x-2 mr-4">
        <PhoneButton />
        <VideoCallButton />
      </div>
    </nav>
  );
}
