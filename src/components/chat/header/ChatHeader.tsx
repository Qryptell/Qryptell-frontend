"use client";

import SearchBar from "./SearchBar";
import UserButton from "./UserButton";
import  Link  from  "next/link"

export default function ChatHeader() {
  return (
    <header className=" bg-black w-full p-3 flex items-center justify-between">
      <Link href="/chat" className="bg-black">
        <h1 className="text-center ml-10 font-medium text-2xl text-white bg-black">Qriptell</h1>
      </Link>
      <div className="flex items-center space-x-8">
        <SearchBar />
        <button className="shadow-[0_-10px_40px_rgba(250,_250,_255,0.3)] bg-[linear-gradient(-60deg,_#0B0B0B_10%,_#262626)] rounded-2xl text-white font-semibold py-2 px-4 text-sm">
          Add new Friend
        </button>
      </div>
      <h3 className="ml-4"></h3>
      {/* <Link href={'/alerts'} ><FaBell className="text-xl text-purple-700"  /></Link> */}
      <div className="rounded-full "><UserButton /></div>
    </header>
  );
}
