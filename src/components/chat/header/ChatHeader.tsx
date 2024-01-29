"use client";
import SearchBar from "./SearchBar";
import UserButton from "./UserButton";

export default function ChatHeader() {

  return (
    <header className="bg-black w-full p-3 rounded-lg flex justify-between">
      <div className="flex items-center space-x-8">
        <SearchBar />

        {/* Add Friend */}
        {/* <button className="bg-[#4D6069] py-3 px-4 text-sm rounded-md">
          Add new Friend
        </button> */}
      </div>
      <h3 className="ml-4"></h3>
      <UserButton />
    </header>
  );
}
