import Image from "next/image";
import { FaRegEdit } from "react-icons/fa";

export default function ProfileCard() {
  return (
    <section className="w-full md:w-1/2 flex flex-col border border-[#505050] rounded-xl relative">
      <div>
        <Image
          src="/profile.jpeg"
          alt="header-image"
          height={20}
          width={200}
          className="w-full h-32 object-cover rounded-t-xl"
          quality={100}
        />
      </div>
      <div className="justify-end items-end flex px-6 py-4">
        <FaRegEdit
          size="21"
          className="cursor-pointer"
          // onClick={}
        />
      </div>
      <div
        className="absolute border border-black rounded-full top-32 left-1/2 z-50
       -translate-x-1/2 -translate-y-1/2"
      >
        <Image
          src="/avatar.png"
          alt="user-avatar"
          height={24}
          width={20}
          className="w-20 h-20 rounded-full"
        />
      </div>

      <div className="px-4 md:px-8 space-y-6 py-4">
        <p className="font-medium text-xl">Fathima Abdul Ahad</p>

        <div className="w-full flex flex-col space-y-6">
          <div className="flex w-full justify-between items-center">
            <p className="font-light md:text-lg">Phone number</p>
            <p className="text-[#00F0FF] md:text-lg">nobody</p>
          </div>

          <div className="flex w-full justify-between items-center">
            <p className="font-light md:text-lg">Profile photos</p>
            <p className="text-[#00F0FF] md:text-lg">nobody</p>
          </div>
          <div className="flex w-full justify-between items-center">
            <p className="font-light md:text-lg">Last seen & online</p>
            <p className="text-[#00F0FF] md:text-lg">Friends</p>
          </div>
          <div className="flex w-full justify-between items-center">
            <p className="font-light md:text-lg">Bio</p>
            <p className="text-[#00F0FF] md:text-lg">Everybody</p>
          </div>
          <div className="flex w-full justify-between items-center">
            <p className="font-light md:text-lg">Voice messages</p>
            <p className="text-[#00F0FF] md:text-lg">Friends</p>
          </div>
        </div>

        <button
          className="py-2.5 px-12 bg-gradient-to-r from-[#0d9ca5] to-[#222f5d] 
        rounded-full hover:brightness-90 hover:opacity-90"
        >
          Save changes
        </button>
      </div>
    </section>
  );
}
