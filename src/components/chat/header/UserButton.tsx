"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";

export default function UserButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar height={50} width={50} />
      </DropdownMenuTrigger>
      {/* <DropdownMenuContent className="bg-black text-white outline-none border-0">
        <DropdownMenuLabel className="hover:bg-[#333A41]">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="hover:bg-[#333A41]">Mohamed Alan</DropdownMenuLabel>
        <DropdownMenuLabel className="hover:bg-[#333A41]">Alan@gamil.com</DropdownMenuLabel>
        <DropdownMenuLabel className="hover:bg-[#333A41]">Logout</DropdownMenuLabel>
      </DropdownMenuContent> */}
    </DropdownMenu>
  );
}
