//  /register(Register Page)

import LoginForm from "@/components/auth/register/RegisterForm";
import { Metadata } from "next";
import { FaGithub } from "react-icons/fa";

export const metadata: Metadata = {
  title: "LunarLoom-Login",
  description: "Login in to LunarLoom",
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
        <button
          className="bg-[#483375] w-full flex items-center justify-center text-white
       space-x-2 py-2.5 rounded-sm hover:bg-opacity-90 mt-2.5"
        >
          <FaGithub size="24px" />
          <span className="text-sm">Login with Github</span>
        </button>

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

      <LoginForm />
    </section>
  );
}
