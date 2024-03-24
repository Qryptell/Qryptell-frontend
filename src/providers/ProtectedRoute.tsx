"use client";
import collection from "@/configurations/collection";
import { useUserStore } from "@/store/userStore";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { Axios } from "./Axios";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const router = useRouter()
    const accessToken = useUserStore((state) => state.accessToken);
    const setAccessToken = useUserStore((state) => state.setAccessToken);
    const setUsername = useUserStore((state) => state.setUsername);
    const setUserId = useUserStore((state) => state.setUsername);

    useEffect(() => {
        if (!accessToken && collection.PROTECT) {
            Axios.post("/auth/refresh-token", {}, { withCredentials: true }).then((res) => {
                setAccessToken(res?.data?.accessToken);
                let username: string = jwtDecode<{ username: string }>(res?.data?.accessToken)?.username;
                setUsername(username)
                let userId: string = jwtDecode<{ userId: string }>(res?.data?.accessToken)?.userId;
                setUserId(userId)
            }).catch((err) => {
                router.push("/login")
            })
        }
    }, [accessToken]);

    return <>{children}</>;
}
