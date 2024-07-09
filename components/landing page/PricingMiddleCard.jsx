import React from "react";
import check from "@/assets/check.svg";
import dots_light from "@/assets/dots_light.svg";
import Link from "next/link";

const PricingMiddleCard = () => {
  const offers = [
    "1 user up to 2 connected calendars",
    "Google Workspace, Exchange?",
    "Up to 50 responses",
    "Up to 10 survey results archived",
    "30 Days of insight report storage for past meetings",
    "Unlimited customization of questions",
    "Up to 5 survey templates",
    "Standard email & chat",
  ];
  const OFFERS = offers.map((offer, index) => (
    <div key={index} className="flex items-start gap-[10px] relative">
      <img src={check.src} className="mt-2" />
      {offer}
    </div>
  ));
  return (
    <div className="bg-main rounded-[10px] text-white flex flex-col items-center gap-[23px] p-[23px] w-[340px] shadow-md z-10">
      <div className="flex flex-col gap-[7px]">
        <div className="headding4-black text-center">Personal</div>
        <div className="text-[18px] text-center">
          <span className="opacity-40 align-top relative top-3">$</span>
          <span className="headding-bold text-[64px]">5</span>
          <span className="opacity-40">/m</span>
        </div>
        <div className="flex items-center gap-1 w-[200px] h-[40px] bg-[#6293FF] rounded-[5px] p-[4px]">
          <div className="rounded-[5px] flex-1 flex items-center justify-center h-[30px] bg-white text-main text-[14px] cursor-pointer">
            Monthly
          </div>
          <div className="rounded-[5px] flex-1 flex items-center justify-center h-[30px] text-white text-[14px] cursor-pointer">
            Annualy
          </div>
        </div>
      </div>
      <div className="text-[16px] flex flex-col gap-[9px]  overflow-hidden">
        {OFFERS}
      </div>
      <Link
        href={"/signup"}
        className="rounded-[10px] bg-white text-main flex justify-center items-center w-[220px] h-[60px] body-bold"
      >
        Get Personal
      </Link>
    </div>
  );
};

export default PricingMiddleCard;
