import React from "react";
import Title from "./Title";
import Link from "next/link";
import WhyItsImportantCard from "./WhyItsImportantCard";
import find from "@/assets/find.svg";
import said from "@/assets/said.svg";
import felt from "@/assets/felt.svg";
import only from "@/assets/only.svg";
import believe from "@/assets/believe.svg";

const survery = [
  {
    img: believe,
    title: "64% believe",
    description: "that meetings jeapordize deep thought processes",
  },
  //   {
  //     img: felt,
  //     title: "62% felt",
  //     description:
  //       "that meetings take time away from team bonding opportunities ",
  //   },
  //   {
  //     img: said,
  //     title: "65% said",
  //     description: "meeting keep them from completing their own work",
  //   },
  //   {
  //     img: find,
  //     title: "71% find",
  //     description: "meetings to be unproductive and inefficient",
  //   },
  //   {
  //     img: only,
  //     title: "Only 17%",
  //     description:
  //       "of senior executives reported that their meetings were a productive use of time",
  //   },
];

const WhyItsImportant = () => {
  const CARDS = survery.map((card, index) => (
    <WhyItsImportantCard
      key={index}
      img={card.img}
      title={card.title}
      description={card.description}
    />
  ));
  return (
    <div
      id="why it's important"
      className="text-dark text-[18px] flex flex-col items-center gap-[30px]"
    >
      <Title title="Why it's important" />
      <div className="text-center">
        <p className=" opacity-35">
          How many hours are you and your team wasting in meetings that aren’t
          adding to your productivity?
        </p>
        <span className="opacity-35">
          In a 2017 survey of office workers by the{" "}
        </span>
        <span className="opacity-100 italic">Harvard Business Review</span>
        <span className="opacity-35">
          , key findings brought to light how useless meetings can actually be.
        </span>
      </div>

      <div className="relative h-[40vh] w-full">{CARDS}</div>
      <div className="text-center">
        <p className=" opacity-35">
          Feeling like there aren’t enough hours in the day is a common problem
          faced by many leaders in this world.
        </p>

        <p className="opacity-100 font-bold">
          Try post meeting surveys now and avoid wasting time.
        </p>
      </div>
      <Link
        href={"/"}
        className="text-white border-2 border-main bg-main rounded-[10px] w-[200px] h-[52px] flex justify-center items-center body4-bold"
      >
        Sign up today
      </Link>
    </div>
  );
};

export default WhyItsImportant;
