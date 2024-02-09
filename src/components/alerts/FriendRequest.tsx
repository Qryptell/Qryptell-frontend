import { useState } from "react"
import { FaCheck,FaX } from "react-icons/fa6"
import Popup from "../ui/profile-popup"
import { useUserStore } from "@/store/userStore"
import { toast } from "sonner"
import { AxiosProtected } from "@/providers/Axios"

export default function FriendRequest({friendname,friendReqs,setReqs}:{friendname:string,friendReqs:string[],setReqs:(friends:string[])=>void}){
  const [show,setShow] = useState<boolean>(false)
  const username = useUserStore((state)=>state.username)
  const denyReq = ()=>{
    AxiosProtected.patch("/friend/deny",{username,friendname}).then(({data})=>{
      if(data.success){
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
      setReqs(friendReqs.splice(friendReqs.indexOf(friendname),1))
    })
  }
 const acceptReq = ()=>{
   AxiosProtected.patch("/friend/accept",{username,friendname}).then(({data})=>{
      if(data.success){
        toast.success(data.message)
      }else{
        toast.error(data.message)
      } 
      setReqs(friendReqs.splice(friendReqs.indexOf(friendname),1))
    })
  }

  return(
    <div className="w-full bg-purple-950/30 border border-purple-700 flex justify-between items-center rounded-md h-14 px-3">
            <h2 className="font-extralight text-white">friend request : <span className="text-white cursor-pointer hover:text-blue-700 font-normal hover:underline " onClick={()=>{setShow(true)}} > {friendname} </span> </h2>
              {show && <Popup searchedname={friendname} handleClose={()=>{setShow(false)}} />}
           <div className="flex gap-3">
         <div onClick={denyReq} className="text-red-700 border-2 border-red-700 cursor-pointer rounded-full bg-black p-2"><FaX/></div>
         <div onClick={acceptReq} className="text-green-700 border-2 cursor-pointer border-green-700 p-2 bg-black rounded-full"><FaCheck/></div>
      </div>
    </div>
  )
}
