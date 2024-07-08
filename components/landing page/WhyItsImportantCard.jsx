import React from "react";
import topQuotation from "@/assets/topQuotation.svg";
import bottomQuotation from "@/assets/bottomQuotation.svg";

const WhyItsImportantCard = ({ title, description, img }) => {
  return (
    <div
      className="absolute top-1/2 left-1/2 rounded-[10px] shadow-md drop-shadow-xl w-[600px] h-[300px] px-[50px] flex items-center justify-between bg-white"
      style={{ marginLeft: "-300px", marginTop: "-150px" }}
    >
      <img src={topQuotation.src} className="absolute top-6 left-6" />
      <div>
        <div className="text-main headding3-bold">{title}</div>
        <div className="text-littledark headding5-bold">{description}</div>
      </div>
      <div>
        <img src={img.src} alt="img" className="w-full" />
      </div>
      <div className="absolute bottom-[50px] left-[50px] source text-moregray">
        SOURCE: Harvard Business Review
      </div>
      <img src={bottomQuotation.src} className="absolute bottom-6 right-6" />
    </div>
  );
};

export default WhyItsImportantCard;
