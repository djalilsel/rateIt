import React from "react";

const Title = ({ title }) => {
  return (
    <div className="flex flex-col items-center gap-[30px] headding-bold">
      <div>{title}</div>
      <div className="w-[50px] h-1 bg-main rounded-3xl"></div>
    </div>
  );
};

export default Title;
