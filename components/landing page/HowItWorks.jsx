import React from "react";
import Title from "./Title";
import HowItWorksCard from "./HowItWorksCard";
import google from "@/assets/googleIntegration.svg";
import customization from "@/assets/customization.svg";
import automation from "@/assets/automation.svg";

const HowItWorks = () => {
  return (
    <div
      id="how it works"
      className="flex flex-col items-center gap-[90px] px-[300px] text-dark"
    >
      <Title title="How It Works?" />
      <div className="w-full flex justify-between">
        <HowItWorksCard
          img={google}
          title="Click Google integration"
          description={[
            "Simply log into your google account,",
            "then seamlessly integrate and",
            "mirror your planned meetings.",
          ]}
        />
        <HowItWorksCard
          img={customization}
          title="Customization"
          description={[
            "Whatever the goals of your team or organization,",
            "create a survey to better help you",
            "understand the minds of those involved.",
          ]}
        />
        <HowItWorksCard
          img={automation}
          title="Automation"
          description={[
            "Automatically triggered emails",
            "obtain survey feedback. Wait for meeting data",
            "to be cleanly organized in your dashboard.",
          ]}
        />
      </div>
    </div>
  );
};

export default HowItWorks;
