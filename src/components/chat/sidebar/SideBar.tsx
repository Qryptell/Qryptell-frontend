import Image from "next/image";
import UserList from "./UserList";
import Link from "next/link";

export default function SideBar() {
  return (
    <section
      className="md:w-72 py-8 px-2 bg-black h-screen text-white 
    space-y-4"
    >
      <Link href="/chat">
        <h1 className="text-center font-bold text-2xl py-2">LunarLoom</h1>
      </Link>

      <div
        className="py-4 flex flex-col space-y-5 text-white/70 overflow-y-scroll
       scrollbar-hide h-full pb-20"
      >
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
        <UserList />
      </div>
    </section>
  );
}
