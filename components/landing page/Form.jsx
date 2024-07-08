"use client";
import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div id="contact" className="flex">
      <div className="px-[150px] py-[100px] bg-main headding-bold text-white flex-[1] flex justify-center items-center">
        We all know that time is money... <br /> so stop wasting time, and save
        money with Rate It!
      </div>
      <form
        className="flex-[2]  px-[150px] py-[100px]  flex flex-col gap-[62px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-[90px]">
          <label
            htmlFor="Firstname"
            className="flex flex-col text-dark flex-1 body4-bold"
          >
            <span className=" opacity-35">First Name</span>
            <input
              type="text"
              className="border-b border-main focus:outline-none h-[40px] font-normal"
              {...register("FirstName")}
            />
          </label>
          <label
            htmlFor="Lastname"
            className="flex flex-col text-dark flex-1 body4-bold"
          >
            <span className=" opacity-35">Last Name</span>
            <input
              type="text"
              className="border-b border-main focus:outline-none h-[40px] font-normal"
              {...register("LastName")}
            />
          </label>
        </div>
        <div className="flex gap-[90px]">
          <label
            htmlFor="Mail"
            className="flex flex-col text-dark flex-1 body4-bold"
          >
            <span className=" opacity-35">Mail</span>
            <input
              type="mail"
              className="border-b border-main focus:outline-none h-[40px] font-normal"
              {...register("Mail")}
            />
          </label>
          <label
            htmlFor="Phone"
            className="flex flex-col text-dark flex-1 body4-bold"
          >
            <span className=" opacity-35">Phone</span>
            <input
              type="tel"
              className="border-b border-main focus:outline-none h-[40px] font-normal"
              {...register("Phone")}
            />
          </label>
        </div>
        <div>
          <label
            htmlFor="Message"
            className="flex flex-col text-dark flex-1 body4-bold"
          >
            <span className=" opacity-35">Message</span>
            <span className="text-[#A6A6B2] font-normal">
              Write your message
            </span>
            <input
              type="Message"
              className="border-b border-main focus:outline-none h-[40px] font-normal"
              {...register("Message")}
            />
          </label>
        </div>
        <input
          type="submit"
          value={"Send Message"}
          className="rounded-[10px] bg-main text-white flex justify-center items-center w-[200px] h-[50px] body4-bold self-end mt-[40px] "
        />
      </form>
    </div>
  );
};

export default Form;
