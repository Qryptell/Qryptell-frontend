"use client"
import FriendRequest from "@/components/alerts/FriendRequest";
import ChatHeader from "@/components/chat/header/ChatHeader";
import collection from "@/configurations/collection";
import ProtectedRoute from "@/providers/ProtectedRoute";
import { useUserStore } from "@/store/userStore";
import {useEffect, useState} from 'react'
import axios from "axios";

export default function AlertPage() {
  const [reqs,setReqs] = useState<string[]>([])
  const username = useUserStore((state)=>state.username)
  axios.get(collection.SERVER_USER_URL+'/friend/reqs/'+username).then(({data})=>{
    if(data.success){
      setReqs(data.reqs)
    }
  })
      return (
        <ProtectedRoute>
            <main className="w-full h-screen">
                <ChatHeader />
                <div className="w-full flex justify-center px-11 py-4  gap-11">
                    <section className="p-1 w-1/2 border-purple-700 border bg-black rounded-md flex flex-col gap-1">
                       <div className="border-b border-purple-700 text-center text-white font-medium text-xl" > Invitations </div>
                       {
                        reqs.map((friendname:string)=>(<FriendRequest friendReqs={reqs} setReqs={setReqs} friendname={friendname} key={friendname}/>))
                       } 
                    </section>
                </div>
            </main>
        </ProtectedRoute>
    )
}
