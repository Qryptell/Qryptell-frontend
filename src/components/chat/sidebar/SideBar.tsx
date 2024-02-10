"use client"
import UserList from "./UserList";
import Link from "next/link";
import { useUserStore } from "@/store/userStore";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { AxiosProtected } from "@/providers/Axios";
import {cn} from '@/lib/utils'

export default function SideBar({ themeColor }: { themeColor: string }) {
  const username = useUserStore((state) => state.username);
  const [friends, setFriends] = useState([])
  useEffect(() => {
    AxiosProtected.get('/friend/' + username).then(({ data }) => {
      if (data.success) {
        setFriends(data.friends)
      } else {
        toast.error(data?.message || "Something went wrong!");
      }
    })
  }, [])
  return (
    <section
      className={cn(`md:w-72 h-screen text-white `,themeColor)}
    >
      <div
        className="py-4 bg-black  flex px-2 flex-col space-y-5 font-semibold text-white/70 overflow-y-scroll
       scrollbar-hide h-full pb-20"
      >
        {
          friends.map((friendname) => (
            <UserList key={friendname} username={friendname} />
          ))
        }
      </div>
    </section>
  );
}
