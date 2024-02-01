import * as React from 'react'
import UserAvatar from '../chat/header/UserAvatar'
import { Button } from './button'
import { FaX } from "react-icons/fa6";
import axios from 'axios';
import collection from '@/configurations/collection';
import { useUserStore } from '@/store/userStore';
import { toast } from 'sonner';

export default function Popup({ searchedname, handleClose }: { searchedname: string, handleClose: () => void }) {

  const [friend,setFriend] = React.useState<Friend>({ username: '', name: '', createdDate: '' })
  const username:string | null = useUserStore((state)=>state.username)
  type Friend = {
    username: string,
    name: string,
    createdDate: string
  }

  axios.get(collection.SERVER_USER_URL + '/user/' + searchedname).then(({ data }) => {
    if (data.success) {
      setFriend(data.user)
      console.log(data.user)
    }
  })
  const addFriend = ()=>{
    axios.patch(collection.SERVER_USER_URL+'/friend/requiest',{username,friendname:friend.username}).then(({data})=>{
      if(data.success){
        toast.success(data.message)
      }else{
        toast.error(data.message || 'Something Went Wrong!')
      }
    })
  }
  const blockUser = ()=>{
    axios.patch(collection.SERVER_USER_URL+'/friend/block',{username,friendname:friend.username}).then(({data})=>{
      if(data.success){
        toast.success(data.message)
      }else{
        toast.success(data.message || 'Something Went Wrong!')
      }
    })
  }
  return (
    <div className='backdrop-blur-sm  fixed left-0 top-0 w-full z-50 h-screen flex justify-center items-center'>
      <div className='fixed h-2/4 p-5 pt-0 w-1/4 md:w-full  flex border border-teal-500 rounded-lg justify-center shadow-lg top bg-black'>
        <div className='text-white/90 pt-3 w-11/12 h-full flex flex-col items-center text-center' >
          <div className='flex justify-end w-full'><div onClick={handleClose} className='rounded-full hover:bg-red-400/30 cursor-pointer p-1'><FaX /></div></div>
          <UserAvatar width={100} height={100} />
          <h2 className='mt-3 text-xl font-semibold'>{friend.name}</h2>
          <h4 className='text-base font-light'>{friend.username}</h4>
          <h4 className='text-base mt-2 font-extralight'>{friend.createdDate}</h4>
          <div className='flex gap-9 mt-3'>
            <Button onClick={blockUser} variant={'destructive'}>Block User</Button>
            <Button onClick={addFriend} variant={'success'}>Add Friend</Button>
          </div>
        </div>
        {/* <div className='border-x' ></div>
      <div className='w-11/12 h-full'></div> */}
      </div>
    </div>
  )
}
