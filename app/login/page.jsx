"use client";
import React from "react";
import LOGO from "@/public/LOGO.svg";
import work_email from "@/assets/work_email.svg";
import google from "@/assets/google.svg";
import show from "@/assets/show.svg";
import hide from "@/assets/hide.svg";
import Link from "next/link";
import { set, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  const { register, handleSubmit } = useForm();
  const [showPass, setShowPass] = React.useState(false);
  const router = useRouter();
  const [wrongCreds, setWrongCreds] = React.useState(false);

  const onSubmit = async (data) => {
    const signInResponse = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (!signInResponse.ok) {
      if (signInResponse.status === 401) {
        setWrongCreds(true);
        return;
      }
      alert(signInResponse.error);
      return;
    }
    if (signInResponse.error) {
      alert(signInResponse.error);
      return;
    }
    router.push("/dashboard");
  };
  return (
    <div className="w-screen h-screen flex flex-col gap-[23px] bg-[#F5F6FA] justify-center items-center text-dark">
      <img src={LOGO.src} alt="LOGO" className="select-none" />
      <div className="p-[41px] bg-white rounded-[6px] flex flex-col gap-[24px] items-center">
        <div className="flex flex-col gap-[15px] items-center">
          <img src={work_email.src} alt="work email" />
          <div className="headding5-bold">Log in with your work email</div>
          <div className="text-[14px] opacity-65">
            Use your work email to log in to your team workspace.
          </div>
        </div>
        <div className="border border-dark border-opacity-35 rounded-[6px] flex items-center justify-center gap-[8px] w-full py-[10px] cursor-pointer">
          <img src={google.src} alt="google" /> Log in with google
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
          <label htmlFor="email" className="flex flex-col gap-[8px] ">
            <span style={wrongCreds ? { color: "#dc2626" } : {}}>Email</span>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-[#F5F6FA] rounded-[6px] px-[13px] py-[12px] border border-opacity-35 border-dark"
              {...register("email")}
              // style={wrongCreds ? { backgroundColor: "#fecaca" } : {}}
            />
          </label>
          <label htmlFor="pasword" className="flex flex-col gap-[8px] relative">
            <div className="flex justify-between">
              <span style={wrongCreds ? { color: "#dc2626" } : {}}>
                Password
              </span>
              <Link
                href={"/forgot-password"}
                className="text-main inline-block text-[14px] font-medium"
              >
                Forgot password?
              </Link>
            </div>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              id="password"
              className="bg-[#F5F6FA] rounded-[6px] px-[13px] py-[12px] border border-opacity-35 border-dark"
              {...register("password")}
              // style={wrongCreds ? { backgroundColor: "#fecaca" } : {}}
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
            Log in
          </button>
        </form>
      </div>
      <div>
        Don't have an account yet?{" "}
        <Link href={"/signup"} className="text-main inline-block">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default page;
