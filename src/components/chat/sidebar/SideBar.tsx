import Image from "next/image";
import UserList from "./UserList";
import Link from "next/link";

export default function SideBar() {
  return (
    <section
      className="md:w-72   pl-1 mt-1 rounded-lg bg-purple-700 h-screen text-white 
    space-y-1"
    >
      <Link href="/chat" className="bg-black">
        <h1 className="text-center font-bold text-2xl rounded-lg py-6 bg-black">LunarLoom</h1>
      </Link>

      <div
        className="py-4 bg-black rounded-lg flex px-2 flex-col space-y-5 font-semibold text-white/70 overflow-y-scroll
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