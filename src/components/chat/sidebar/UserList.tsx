import Link from "next/link";
import UserAvatar from "../header/UserAvatar";

export default function UserList() {
  return (
    <Link href="/chat/123">
      <div
        className="flex items-center space-x-4 px-4 py-2 rounded-md
         hover:bg-[#333A41] cursor-pointer"
      >
        <UserAvatar height={40} width={40} />
        <p className="text-sm">Mohamed Alan</p>
      </div>
    </Link>
  );
}
