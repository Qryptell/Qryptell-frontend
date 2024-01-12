"use client";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import AuthSubmitButton from "../AuthSubmitButton";
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { useRouter } from "next/navigation";

const formSchema = z.object({
    otp: z.string().min(6, {
        message: "Enter Valid OTP",
    })
});

export default function VerifyEmailForm() {

    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            otp: ""
        },
    });
    const axiosConfig: AxiosRequestConfig = {
        withCredentials: true,
      };
    

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values);
            axios.post('http://localhost:4000/verify-email', values,axiosConfig).then(({ data }: AxiosResponse) => {
                console.log(data);
                if (data.success) {
                    router.push('/chat')
                }
            })
            form.reset();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="flex flex-col w-full space-y-2.5">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="otp"
                        render={({ field }) => (
                            <FormItem className="flex flex-col justify-center">
                                <FormMessage className="text-center" />
                                <FormControl>
                                    <div className="w-full border-b-2 border-[#483375] ">
                                        <Input
                                            type="text"
                                            placeholder=""
                                            {...field}
                                            className=" border-dotted font-extrabold text-2xl text-center focus-visible:ring-0 peer border-0 fon"
                                        />
                                    </div>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <AuthSubmitButton>SUBMIT</AuthSubmitButton>
                </form>
            </Form>
        </div>
    );
}
