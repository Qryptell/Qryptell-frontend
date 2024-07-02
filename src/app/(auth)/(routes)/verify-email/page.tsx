//  /login(Login Page)

import GithubButton from "@/components/auth/GithubButton";
import VerifyEmailForm from "@/components/auth/verify-email/VerifyEmailForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qryptell Verify Email",
  description: "Verify email with otp",
};

export default function LoginPage() {
  return (
    <section
      className="md:max-w-lg mx-auto bg-white px-5 py-8 rounded-md text-black flex flex-col text-center
     items-center justify-center space-y-4 shadow-md "
    >
      <div className="gap-2 flex flex-col">
        <h1 className="text-2xl font-bold">Qryptell</h1>
        <p className="text-[#3E3E3E] text-sm md:w-80">
          Enter the OTP to verify your email
        </p>
      </div>
      <VerifyEmailForm />
    </section>
  );
}
