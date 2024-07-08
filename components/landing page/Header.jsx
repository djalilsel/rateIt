"use client";
import React from "react";
import LOGO from "@/public/LOGO.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex px-[200px]  justify-between items-center text-dark">
      <Link href={"/"} className="select-none flex justify-center items-center">
        <img src={LOGO.src} alt="RateIt Logo" className="cursor-pointer" />
      </Link>
      <ul className="flex justify-between items-center gap-[36px] body-semi">
        <li
          className="cursor-pointer hover:text-gray-500 hover:scale-105 transition-all duration-200"
          onClick={() => {
            document.getElementById("how it works").scrollIntoView();
          }}
        >
          How it works
        </li>
        <li
          className="cursor-pointer hover:text-gray-500 hover:scale-105 transition-all duration-200"
          onClick={() => {
            document.getElementById("pricing").scrollIntoView();
          }}
        >
          Pricing
        </li>
        <li
          className="cursor-pointer hover:text-gray-500 hover:scale-105 transition-all duration-200"
          onClick={() => {
            document.getElementById("whyit'simportant").scrollIntoView();
          }}
        >
          Why it's important
        </li>
        <li
          className="cursor-pointer hover:text-gray-500 hover:scale-105 transition-all duration-200"
          onClick={() => {
            document.getElementById("aboutus").scrollIntoView();
          }}
        >
          About us
        </li>
        <li
          className="cursor-pointer hover:text-gray-500 hover:scale-105 transition-all duration-200"
          onClick={() => {
            document.getElementById("contact").scrollIntoView();
          }}
        >
          Contact
        </li>
      </ul>
      <div className="grid grid-cols-2 gap-[10px] body-bold">
        <Link
          href={"/login"}
          className="text-main border-2 border-main rounded-[10px] w-[100px] h-[45px] flex justify-center items-center"
        >
          Login
        </Link>
        <Link
          href={"/signup"}
          className="text-white border-2 border-main bg-main rounded-[10px] w-[100px] h-[45px] flex justify-center items-center"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Header;
