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
      className={cn("rounded-full", className)}
      width={width || 50}
      height={height || 50}
      quality={100}
      priority
    />
  );
}
