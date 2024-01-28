"use client";

import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";

export default function SearchBar() {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    setSearch("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black border-2 border-purple-700 py-2 h-14 px-4 text-white flex items-center md:gap-8 rounded-md"
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
