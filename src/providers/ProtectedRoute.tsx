"use client";

import { useUserStore } from "@/store/userStore";
import { redirect } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const accessToken = useUserStore((state) => state.accessToken);

  useEffect(() => {
    if (!accessToken) return redirect("/login");
  }, []);
  return <>{children}</>;
}
