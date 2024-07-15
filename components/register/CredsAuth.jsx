"use client";
import React from "react";
import { useRouter } from "next/navigation";
import show from "@/assets/show.svg";
import hide from "@/assets/hide.svg";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { signIn } from "next-auth/react";

const SignInCreds = ({ type }) => {
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
    <form
      className="flex flex-col gap-[23px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      {type === "sign up" ? (
        <label htmlFor="name" className="flex flex-col gap-[8px]">
          Name
          <input
            type="name"
            name="name"
            id="name"
            className="rounded-[6px] px-[13px] py-[12px] border border-opacity-35 border-dark"
            {...register("name")}
          />
        </label>
      ) : null}
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
          <span style={wrongCreds ? { color: "#dc2626" } : {}}>Password</span>
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
  );
};

export default SignInCreds;
