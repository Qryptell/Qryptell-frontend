"use client";
import { useUserStore } from "@/store/userStore";
import axios, { AxiosInstance } from "axios";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

var Axios = axios.create({
    baseURL: "http://qryptell.com",
    withCredentials: true,
});

var AxiosProtected: AxiosInstance

export default function AxiosProvider({ children }: { children: ReactNode }) {
    const setAccessToken = useUserStore((state) => state.setAccessToken);
    const accessToken = useUserStore((state) => state.accessToken);
    const setUsername = useUserStore((state) => state.setUsername);
    const setUserId = useUserStore((state) => state.setUsername);

    AxiosProtected = axios.create({
        baseURL: "http://qryptell.com",
        withCredentials: true,
        headers: { "Authorization": "Bearer " + accessToken }
    });

    function createAxiosResponseInterceptor() {
        AxiosProtected.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error?.response?.status !== 401) {
                    return Promise.reject(error);
                }
                return Axios
                    .post("/auth/refresh_token")
                    .then((res) => {
                        setAccessToken(res?.data?.accessToken);
                        let username: string = jwtDecode<{ username: string }>(res?.data?.accessToken)?.username;
                        let userId: string = jwtDecode<{ userId: string }>(res?.data?.accessToken)?.userId;
                        setUsername(username)
                        setUserId(userId)
                        return Axios(error.response.config);
                    })
                    .catch((error2) => {
                        redirect("/login");
                    })
            }
        );
    }
    createAxiosResponseInterceptor();
    return <>{children}</>;
}

export { Axios, AxiosProtected };
