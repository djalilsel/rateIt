import React from "react";
import notFound from "@/assets/notFound.svg";

const Custom404 = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h5 className="text-gray body-semi flex flex-col justify-center items-center ">
        <img src={notFound.src} alt="404" className="scale-75" />
        It looks like we couldn't find the page you were looking for...
      </h5>
    </div>
  );
};

export default Custom404;
