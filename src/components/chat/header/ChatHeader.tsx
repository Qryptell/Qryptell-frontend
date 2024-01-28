"use client";
import SearchBar from "./SearchBar";
import UserButton from "./UserButton";
import { jwtDecode,JwtPayload } from "jwt-decode"
import { useUserStore } from "@/store/userStore";

export default function ChatHeader() {
  let username: string = ''
  useUserStore((state) => {
    if (state.accessToken) {
      username = jwtDecode<{username:string}>(state.accessToken)?.username;
    }
  });

  return (
    <header className="bg-black w-full p-3 rounded-md flex justify-between">
      <div className="flex items-center space-x-8">
        <SearchBar />

        {/*Add Friend */}
        <button className="bg-[#4D6069] py-3 px-4 text-sm rounded-md">
          Add new Friend
        </button>
      </div>
      <h3 className="ml-4">{username}</h3>
      <UserButton />
    </header>
  );
}
