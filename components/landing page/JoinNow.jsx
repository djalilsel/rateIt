import React from "react";
import joinnow_pattern from "@/assets/joinnow_pattern.svg";

const JoinNow = () => {
  return (
    <div className="flex justify-between bg-[#F5F6FA] items-center">
      <div className="px-[200px] flex flex-col gap-[63px]">
        <div className="text-dark headding-bold">
          Send out your first <br /> Rate It today!
        </div>
        <button className="rounded-[10px] bg-main text-white flex justify-center items-center w-[200px] h-[50px] body4-bold">
          Try for free
        </button>
      </div>
      <img src={joinnow_pattern.src} alt="joinnow_pattern" />
    </div>
  );
};

export default JoinNow;
