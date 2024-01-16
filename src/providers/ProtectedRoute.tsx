"use client";

import { useUserStore } from "@/store/userStore";
import { redirect } from "next/navigation";
import { ReactNode, useLayoutEffect } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const accessToken = useUserStore((state) => state.accessToken);

  useLayoutEffect(() => {
    if (!accessToken) return redirect("/login");
  }, [accessToken]);
  return <>{children}</>;
}
