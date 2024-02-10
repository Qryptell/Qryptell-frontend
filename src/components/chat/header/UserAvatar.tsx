import { cn } from "@/lib/utils";
import Image from "next/image";

type UserAvatarProps = {
  height?: number;
  width?: number;
  className?: string;
};

export default function UserAvatar({
  height,
  width,
  className,
}: UserAvatarProps) {
  return (
    <Image
      src="/avatar.png"
      alt="avatar"
      className={cn("rounded-full object-cover", className)}
      width={width || 50}
      height={height || 50}
      quality={100}
      style={{width:width || "50px",height:height || "50px"}}
      priority
    />
  );
}
