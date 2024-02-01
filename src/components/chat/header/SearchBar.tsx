"use client";

import { Input } from "@/components/ui/input";
import Popup from "@/components/ui/profile-popup";
import { useUserStore } from "@/store/userStore";
import { FormEvent, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";

export default function SearchBar() {
  const [search, setSearch] = useState<string>("");
  const [showUserPopup, setShowUserPopup] = useState<boolean>(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    console.log(search)
    setShowUserPopup(true)
  };
  let color = 'bg-purple-700'.replace('bg', '')
  useUserStore((state) => color = "border" + state.themeColor.replace('bg', ''))

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-black border-2 ${color} py-1 h-14 px-4 text-white flex items-center md:gap-8 rounded-md`}
    >
      <span className="flex items-center">
        <LiaSearchSolid size="22px" />
        <Input
          placeholder="Search Friends account here"
          className="ring-0 border-0 py-0 h-auto"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </span>
      {showUserPopup && <Popup searchedname={search} handleClose={() => { setShowUserPopup(false) }} />}
      <button
        disabled={!search}
        type="submit"
        className="bg-[#4D6069] py-2 px-4 text-xs rounded-md disabled:brightness-75"
      >
        Ctrl+K
      </button>
    </form>
  );
}
