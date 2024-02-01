"use client"
import UserList from "./UserList";
import Link from "next/link";
import { useUserStore } from "@/store/userStore";
import { useEffect, useState } from "react";
import axios from "axios";
import collection from "@/configurations/collection";
import { toast } from "sonner";

export default function SideBar({ themeColor }: { themeColor: string }) {
  const username = useUserStore((state) => state.username);
  const [friends, setFriends] = useState([])
  useEffect(() => {
    axios.get(collection.SERVER_USER_URL + '/friend/' + username).then(({ data }) => {
      if (data.success) {
        setFriends(data.friends)
      } else {
        toast.error(data?.message || "Something went wrong!");
      }
    })
  }, [])
  return (
    <section
      className={`md:w-72 pl-1 mt-1 rounded-lg ${themeColor} h-screen text-white space-y-1`}
    >
      <Link href="/chat" className="bg-black">
        <h1 className="text-center font-bold text-2xl rounded-lg py-6 bg-black">Qriptell</h1>
      </Link>

      <div
        className="py-4 bg-black rounded-lg flex px-2 flex-col space-y-5 font-semibold text-white/70 overflow-y-scroll
       scrollbar-hide h-full pb-20"
      >
        {
          friends.map((friendname)=>(
            <UserList key={friendname} username={friendname} />
          ))
        }
      </div>
    </section>
  );
}
