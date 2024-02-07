"use client";
import collection from "@/configurations/collection";
import { useUserStore } from "@/store/userStore";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";
import { ReactNode, useLayoutEffect } from "react";

var Axios = axios.create({
    baseURL: "http://lunarloom.com",
    withCredentials: true,
});
export function AxiosProvider({ children }: { children: ReactNode }) {
    const setAccessToken = useUserStore((state) => state.setAccessToken);
    const setUsername = useUserStore((state) => state.setUsername);

    function createAxiosResponseInterceptor() {
        const interceptor = Axios.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response.status !== 401) {
                    return Promise.reject(error);
                }
                Axios.interceptors.response.eject(interceptor);
                return Axios
                    .post("/refresh_token")
                    .then((res) => {
                        setAccessToken(res?.data?.accessToken);
                        let username: string = jwtDecode<{ username: string }>(res?.data?.accessToken)?.username;
                        setUsername(username)
                        return Axios(error.response.config);
                    })
                    .catch((error2) => {
                        redirect("/login");
                        return Promise.reject(error2);
                    })
                    .finally(createAxiosResponseInterceptor);
            }
        );
    }
    createAxiosResponseInterceptor();
    return <>{children}</>;
}

export default Axios;
