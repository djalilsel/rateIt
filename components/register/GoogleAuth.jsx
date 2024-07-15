"use client";
import google from "@/assets/google.svg";
import { signIn } from "next-auth/react";

const Google = () => {
  const handleSignIn = async () => {
    await signIn("google", { callbackUrl: "/dashboard" });
  };
  return (
    <div
      className="border border-dark border-opacity-35 rounded-[6px] flex items-center justify-center gap-[8px] w-full py-[10px] cursor-pointer"
      onClick={handleSignIn}
    >
      <img src={google.src} alt="google" /> Log in with google
    </div>
  );
};

export default Google;
