import React from "react";
import logo_big from "@/assets/logo_big.svg";
import aboutus_decoration from "@/assets/aboutus_decoration.svg";

const AboutUs = () => {
  return (
    <div id="aboutus" className="px-[200px] flex flex-col gap-[100px]">
      <div className="flex flex-col gap-[30px] headding-bold">
        <div>About us</div>
        <div className="w-[50px] h-1 bg-main rounded-3xl"></div>
      </div>
      <div className="flex justify-between">
        <div className="text-[18px] font-[500] flex flex-col gap-[30px]">
          <div>
            Picture this….you’re in your weekly meeting and you ask a question.{" "}
            <br />
            No one responds. Whether they’re zoned out or are responding to
            emails or chatting <br /> on slack, it can feel defeating.
          </div>
          <div>
            In order to have an epic meeting, you need five parts:
            <ul className="pl-5 mt-2">
              <li className="flex gap-3">
                <img src={aboutus_decoration.src} alt="decoration" /> Set a
                cadence for your team meetings
              </li>
              <li className="flex gap-3">
                <img src={aboutus_decoration.src} alt="decoration" /> Have a
                clear meeting objective and agenda
              </li>
              <li className="flex gap-3">
                <img src={aboutus_decoration.src} alt="decoration" /> Start on
                time and end on time
              </li>
              <li className="flex gap-3">
                <img src={aboutus_decoration.src} alt="decoration" /> Have the
                right attendees in the room
              </li>
              <li className="flex gap-3">
                <img src={aboutus_decoration.src} alt="decoration" /> Have the
                Have clear action items [who, what, when] at the end of the
                meeting
              </li>
            </ul>
          </div>
          <div>
            Rate It was created to help leaders and managers have epic meetings
            that aren’t wasting anyone’s time. <br /> With timely feedback on
            how meetings can be productive, you will soon be holding world-class
            and super effective meetings.
          </div>
        </div>
        <img src={logo_big.src} alt="logo_big" />
      </div>
    </div>
  );
};

export default AboutUs;
