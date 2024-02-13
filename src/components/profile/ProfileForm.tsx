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
import { z } from "zod";
import formSchema from "./schema";

export default function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bio: "",
      phoneNo: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <section className="w-full md:w-1/2 relative">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="border border-[#505050] px-4 py-6 rounded-xl space-y-6">
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormMessage className="text-left" />
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Type your bio.."
                      className="py-5 rounded-lg focus-within:border-white/50 focus-within:border-[2px]
                     border-[#505050]"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNo"
              render={({ field }) => (
                <FormItem>
                  <FormMessage className="text-left" />
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="+91 74 0# ## ## #"
                      className="py-5 rounded-lg focus-within:border-white/50 focus-within:border-[2px]
                     border-[#505050]"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormMessage className="text-left" />
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="E-mail"
                      className="py-5 rounded-lg focus-within:border-white/50 focus-within:border-[2px]
                     border-[#505050]"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="brandName"
              render={({ field }) => (
                <FormItem>
                  <FormMessage className="text-left" />
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Brand name"
                      className="py-5 rounded-lg focus-within:border-white/50 focus-within:border-[2px]
                     border-[#505050]"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="link1"
              render={({ field }) => (
                <FormItem>
                  <FormMessage className="text-left" />
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Link 1"
                      className="py-5 rounded-lg focus-within:border-white/50 focus-within:border-[2px]
                     border-[#505050]"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="link2"
              render={({ field }) => (
                <FormItem>
                  <FormMessage className="text-left" />
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Link 2"
                      className="py-5 rounded-lg focus-within:border-white/50 focus-within:border-[2px]
                     border-[#505050]"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="p-4 rounded-2xl w-full font-light border border-[#505050] flex items-center justify-between">
            <p className="text-sm text-left">
              {" < ! >"}You can&apos;t recover account when you delete ones
            </p>
            <button
              className="py-2 px-10 bg-gradient-to-r text-sm font-normal
             from-[#a50e3b] to-[#451148] rounded-full"
            >
              Delete Account
            </button>
          </div>
        </form>
      </Form>
      <div
        className="absolute top-0 right-0 bg-gradient-to-b from-white/10 via-white/70
       to-white/20 h-full w-10 filter blur-3xl"
      />
    </section>
  );
}
