import React from "react";
import Title from "./Title";
import PricingMiddleCard from "./PricingMiddleCard";
import PricingSidesCard from "./PricingSidesCard";

const Pricing = () => {
  const free_offers = [
    "1 user 1 connected calendar",
    "Google Workspace, Exchange?",
    "Up to 12 responses",
    "Up to 3 survey results archived",
    "7 Days of insight report storage for past meetings ",
    "Knowledge base",
  ];
  const team_offers = [
    "Per user in company domain with single calender integrations",
    "Google Workspace, Exchange?",
    "Unlimited responses",
    "Unlimited survey results archived",
    "Unlimited days of insight report storage for past meetings",
    "Unlimited customization of questions",
    "Unlimited survey templates",
    "Resend your survey",
    "Priority email & chat ",
  ];

  return (
    <div id="pricing" className="flex px-[200px]  flex-col gap-[30px]">
      <Title title="Why it's important" />
      <div className="text-center">
        <p className=" opacity-35">
          With our scalable packages, you can pay for what you need and leave
          out what you don’t. We will grow with you.
        </p>
        <p className="opacity-100 font-bold">
          Figure out what package is best for you
        </p>
      </div>
      <div className="py-[70px] flex justify-center items-center">
        <div className="relative right-[-15px]">
          <PricingSidesCard
            title={"Free"}
            price="0"
            button_text="Get Free"
            offers={free_offers}
          />
        </div>
        <div className="z-10">
          <PricingMiddleCard />
        </div>
        <div className="relative right-[15px]">
          <PricingSidesCard
            title={"Team"}
            price="10"
            button_text="Get Team"
            offers={team_offers}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
