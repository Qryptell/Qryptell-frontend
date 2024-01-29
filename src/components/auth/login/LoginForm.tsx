"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/store/userStore";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosResponse } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { toast } from "sonner";
import * as z from "zod";
import AuthSubmitButton from "../AuthSubmitButton";
import {jwtDecode,JwtPayload} from 'jwt-decode'

const formSchema = z.object({
  email: z.string().min(5, {
    message: "Enter a valid Email",
  }),
  password: z.string().min(6, {
    message: "Password should have 6 characters",
  }),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const setAccessToken = useUserStore((state) => state.setAccessToken);
  const setUsername = useUserStore((state) => state.setUsername);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      axios
        .post("http://localhost:4000/auth/login", values)
        .then((res: AxiosResponse) => {
          console.log(res);

          if (!res?.data?.success)
            return toast.error(res?.data?.message || "Something went wrong!");
          setAccessToken(res?.data?.accessToken);
          let username: string = ''
          username = jwtDecode<{ username: string }>(res?.data?.accessToken)?.username;
          setUsername(username)
          toast.success("Logged in successfully!");
          router.push("/chat");
        });
    } catch (error) {
      console.log(error);
      toast.error((error as Error).message || "Something went wrong");
    }
  }
  return (
    <div className="flex flex-col w-full space-y-2.5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormMessage className="text-start" />
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    {...field}
                    className="w-full focus-visible:ring-0 peer rounded-sm py-6 bg-zinc-200/40
                     border-[.5px] border-black/50"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormMessage className="text-start" />
                <FormControl>
                  <div className="flex w-full rounded-sm bg-zinc-200/40 border-[.5px] border-black/50">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      {...field}
                      className="py-6 focus-visible:ring-0 peer border-0"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="mr-4"
                    >
                      {showPassword ? (
                        <IoEyeOffOutline size="24px" />
                      ) : (
                        <IoEyeOutline size="24px" />
                      )}
                    </button>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <AuthSubmitButton>Login</AuthSubmitButton>
        </form>
      </Form>
      <span className="flex space-x-1 text-center items-center justify-center text-sm">
        <p>Dont have an account?</p>
        <Link href="/register">
          <p className="text-[#00A3FF]">Register</p>
        </Link>
      </span>
    </div>
  );
}
