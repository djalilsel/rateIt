"use client";
import React from "react";
import logo from "@/public/LOGO_dark.svg";
import twitter from "@/assets/twitter.svg";
import linkedin from "@/assets/linkedin.svg";

const Footer = () => {
  return (
    <div className="bg-[#090949] pt-[100px] pb-[65px] pl-[70px] pr-[270px] text-white flex justify-between">
      <div className="flex flex-col gap-[175px]">
        <div className="flex flex-col gap-[34px]">
          <div className="headding3-bold">
            Need help with <br /> anything?
          </div>
          <div className="flex gap-[10px]">
            <img
              src={twitter.src}
              alt="twitter"
              className="cursor-pointer"
              onClick={() => window.open("https://x.com", "_blank")}
            />
            <img
              src={linkedin.src}
              alt="linkedin"
              className="cursor-pointer"
              onClick={() => window.open("https://linkedin.com", "_blank")}
            />
          </div>
        </div>
        <div>
          <img src={logo.src} alt="logo" />
        </div>
      </div>
      <div className="flex gap-[60px]">
        <div className="flex flex-col gap-[30px] body-bold">
          <div>Home</div>
          <div className="opacity-60 text-[16px] font-medium cursor-pointer">
            What is it
          </div>
          <div className="opacity-60 text-[16px] font-medium cursor-pointer">
            How it works
          </div>
          <div className="opacity-60 text-[16px] font-medium cursor-pointer">
            Why it's important
          </div>
          <div className="opacity-60 text-[16px] font-medium cursor-pointer">
            Pricing
          </div>
        </div>
        <div className="flex flex-col gap-[30px] body-bold">
          <div>Company</div>
          <div className="opacity-60 text-[16px] font-medium cursor-pointer">
            About
          </div>
          <div className="opacity-60 text-[16px] font-medium cursor-pointer">
            Blog{" "}
          </div>
          <div className="opacity-60 text-[16px] font-medium cursor-pointer">
            Careers
          </div>
        </div>
        <div className="flex flex-col gap-[30px] body-bold">
          <div>Legal</div>
          <div className="opacity-60 text-[16px] font-medium cursor-pointer">
            Terms & Conditions
          </div>
          <div className="opacity-60 text-[16px] font-medium cursor-pointer">
            Privacy & Policy
          </div>
          <div className="opacity-60 text-[16px] font-medium cursor-pointer">
            Contact
          </div>
        </div>
        <div className="flex flex-col gap-[30px] body-bold">
          <div>Help</div>
          <div className="opacity-60 text-[16px] font-medium cursor-pointer">
            FAQs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
