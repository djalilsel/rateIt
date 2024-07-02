import React from "react";

const HowItWorksCard = ({ img, title, description }) => {
  return (
    <div className="flex flex-col items-center gap-[32px]">
      <img src={img.src} />
      <div className="headding5-bold text-center">
        {title}
        <div className="text-[18px] font-normal mt-2">
          {description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
