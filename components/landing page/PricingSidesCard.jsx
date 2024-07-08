import React from "react";
import check_light from "@/assets/check_light.svg";
import dots from "@/assets/dots.svg";

const PricingSidesCard = ({ offers, button_text, title, price }) => {
  const OFFERS = offers.map((offer, index) => (
    <div key={index} className="flex items-start gap-[10px] relative">
      <img src={check_light.src} className="mt-2" />
      {offer}
    </div>
  ));
  return (
    <div className="border border-main rounded-[10px]  gap-[19px] flex flex-col items-center p-[23px] w-[300px] h-[530px]">
      <div>
        <div className="headding5-bold text-center">{title}</div>
        <div className="text-[18px] text-center">
          <span className="opacity-40 align-top relative top-3">$</span>
          <span className="headding-bold text-[64px]">{price}</span>
          <span className="opacity-40">/m</span>
        </div>
      </div>
      <div className="text-[14px] flex flex-col gap-[8px] flex-1">{OFFERS}</div>

      <button className="rounded-[10px] bg-main text-white flex justify-center items-center w-[200px] h-[50px] body4-bold">
        {button_text}
      </button>
    </div>
  );
};

export default PricingSidesCard;
