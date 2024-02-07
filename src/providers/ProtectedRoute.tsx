"use client";
import collection from "@/configurations/collection";
import { useUserStore } from "@/store/userStore";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";
import { ReactNode, useLayoutEffect } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const accessToken = useUserStore((state) => state.accessToken);
    const setAccessToken = useUserStore((state) => state.setAccessToken);
    const setUsername = useUserStore((state) => state.setUsername);
    useLayoutEffect(() => {
        if (!accessToken && collection.PROTECT) {
            let success: Boolean = true
            axios.post("http://lunarloom.com/auth/refresh-token",{},{ withCredentials: true }).then((res) => {
                setAccessToken(res?.data?.accessToken);
                let username: string = jwtDecode<{ username: string }>(res?.data?.accessToken)?.username;
                setUsername(username)
            }).catch((err) => {
                success = false
            })
            if (!success) return redirect("/login");
        }
    }, [accessToken]);
    return <>{children}</>;
}
