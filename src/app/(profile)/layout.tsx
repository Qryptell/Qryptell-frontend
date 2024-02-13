import ProfileHeader from "@/components/profile/ProfileHeader";
import { ReactNode } from "react";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ProfileHeader />
      {children}
    </>
  );
}
