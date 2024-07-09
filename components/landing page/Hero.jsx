import Link from "next/link";
import React from "react";
import cartoon from "@/assets/CARTOON.png";

const Hero = () => {
  return (
    <div className="h-[60vh] px-[200px]  flex justify-between items-center text-dark">
      <div className="flex flex-col gap-[32px]">
        <div>
          <h1 className="text-5xl headding-light text-gray">
            Stop wasting time
          </h1>
          <h1 className="text-5xl headding-bold text-dark">in meetings</h1>
        </div>
        <p className="text-[18px] leading-6">
          Boost efficiency, save time & money <br /> with post meeting surveys.
        </p>
        <div className="grid grid-cols-2 gap-[10px] body-semi">
          <Link
            href={"/signup"}
            className="text-white border-2 border-main bg-main rounded-[10px] w-[200px] h-[52px] flex justify-center items-center body4-bold"
          >
            Get started
          </Link>
          <Link
            href={"/signup"}
            className="text-main border-2 border-main rounded-[10px] w-[200px] h-[52px] flex justify-center items-center body4-bold"
          >
            Sign up with Google
          </Link>
        </div>
      </div>
      <img src={cartoon.src} alt="hero" className="select-none" />
    </div>
  );
};

export default Hero;
