import React from "react";
import commingSoon from "@/assets/commingSoon.svg";

const CommingSoon = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h5 className="text-gray body-semi flex flex-col justify-center items-center ">
        <img src={commingSoon.src} alt="comming soon" className="scale-75" />
        Comming soon
      </h5>
    </div>
  );
};

export default CommingSoon;
