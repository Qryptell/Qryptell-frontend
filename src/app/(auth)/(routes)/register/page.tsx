//  /register(Register Page)

import GithubButton from "@/components/auth/GithubButton";
import RegisterForm from "@/components/auth/register/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LunarLoom-Register",
  description: "Register to use LunarLoom",
};

export default function RegisterPage() {
  return (
    <section
      className="md:max-w-lg mx-auto bg-white px-5 py-8 rounded-md text-black flex flex-col text-center
     items-center justify-center space-y-4 shadow-md"
    >
      <div className="gap-2 flex flex-col">
        <h1 className="text-2xl font-bold">LunarLoom</h1>
        <p className="text-[#3E3E3E] text-sm md:w-80">
          Sign up to see messages and open source projects from your LunarLoom.
        </p>

        {/* Github Login Button */}
        <GithubButton />

        {/* Divider */}
        <div className="inline-flex items-center justify-center w-full px-2">
          <hr className="w-full h-[.5px] bg-black border-0 dark:bg-gray-700 my-4" />
          <span
            className="absolute px-3 font-medium -translate-x-1/2
         bg-white left-1/2 dark:text-white dark:bg-gray-900/60 text-sm text-black"
          >
            OR
          </span>
        </div>
      </div>

      <RegisterForm />
    </section>
  );
}
