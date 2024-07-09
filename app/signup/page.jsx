"use client";
import React from "react";
import LOGO from "@/public/LOGO.svg";
import work_email from "@/assets/work_email.svg";
import google from "@/assets/google.svg";
import show from "@/assets/show.svg";
import hide from "@/assets/hide.svg";
import Link from "next/link";
import { useForm } from "react-hook-form";

const page = () => {
  const { register, handleSubmit } = useForm();
  const [showPass, setShowPass] = React.useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="w-screen h-screen flex flex-col gap-[23px] bg-[#F5F6FA] justify-center items-center text-dark">
      <img src={LOGO.src} alt="LOGO" className="select-none" />
      <div className="p-[41px] bg-white rounded-[6px] flex flex-col gap-[24px] items-center">
        <div className="flex flex-col gap-[15px] items-center">
          <img src={work_email.src} alt="work email" />
          <div className="headding5-bold">Sign up with your work email</div>
          <div className="text-[14px] opacity-65">
            Use your work email to Sign up to your team workspace.
          </div>
        </div>
        <div className="border border-dark border-opacity-35 rounded-[6px] flex items-center justify-center gap-[8px] w-full py-[10px] cursor-pointer">
          <img src={google.src} alt="google" /> Sign up with google
        </div>
        <div className="flex items-center justify-center text-dark w-full opacity-45">
          <div className="flex-1 w-full border-t border-dark"></div>
          <span className="px-3">OR</span>
          <div className="flex-1 w-full border-t border-dark"></div>
        </div>
        <form
          className="flex flex-col gap-[23px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="email" className="flex flex-col gap-[8px]">
            Email
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-[6px] px-[13px] py-[12px] border border-opacity-35 border-dark"
              {...register("email")}
            />
          </label>
          <label htmlFor="pasword" className="flex flex-col gap-[8px] relative">
            <div className="flex justify-between">Password</div>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              id="password"
              className="rounded-[6px] px-[13px] py-[12px] border border-opacity-35 border-dark"
              {...register("password")}
            />
            <img
              src={showPass ? hide.src : show.src}
              alt="show"
              className="absolute right-4 bottom-[14px] cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            />
          </label>
          <button
            type="submit"
            className="bg-main text-white text-[14px] px-[175px] py-[10px] rounded-[6px]  body4-bold"
          >
            Sign up
          </button>
        </form>
      </div>
      <div>
        Already have an account yet?{" "}
        <Link href={"/login"} className="text-main inline-block">
          Login
        </Link>
      </div>
    </div>
  );
};

export default page;
