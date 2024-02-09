"use client";
import { useUserStore } from "@/store/userStore";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

var Axios = axios.create({
    baseURL: "http://lunarloom.com",
    withCredentials: true,
});

var AxiosProtected = axios.create({
    baseURL: "http://lunarloom.com",
    withCredentials: true,
});

export default function AxiosProvider({ children }: { children: ReactNode }) {
    const setAccessToken = useUserStore((state) => state.setAccessToken);
    const setUsername = useUserStore((state) => state.setUsername);

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
                        setUsername(username)
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
