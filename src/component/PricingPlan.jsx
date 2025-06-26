import React from "react";
import PricingCard from "./PricingCard";

const PricingPlan = () => {
  const pricingPlans = [
    {
      icon: "/images/pricemm.png",
      audience: "For individuals",
      title: "Team Member",
      subtitle:
        "Join with ease, log daily care, and inspire your fellow caregivers.",
      price: "Free",
      features: [
        "Join caregiving teams via invite",
        "Log care events and activities",
        "Receive inspirational Uplift messages",
        "View your personal care summary",
      ],
      textColor: "text-[#2B2B2B]",
      btColor: "bg-[#2B2B2B]",
      bgColor: "bg-[#FFFFFF]",
      tick: "/images/lighttick.png",
      bttext: "text-[#FFFFFF]",
    },
    {
      icon: "/images/pricepp.png",
      audience: "For teams",
      title: "Project Leader",
      subtitle:
        "Lead with clarity, manage care projects, and view full team summaries.",
      price: "$12.99",
      priceSub: "/ monthly",
      features: [
        "Create and manage projects",
        "Invite and organize team members",
        "View summaries of all members",
        "Set preferences for Uplift messages",
      ],
      textColor: "text-[#FFFFFF]",
      subcolor: "text-[#FFFFFF]",
      bgColor: "bg-[#4DA3AE]",
      btColor: "bg-[#FFFFFF]",
      bttext: "text-[#2B2B2B]",
      popular: "Popular",
      tick: "/images/darktick.png",
    },
    {
      icon: "/images/pricemm.png",
      audience: "For enterprise",
      title: "+Summaries Boost",
      subtitle:
        "Unlock deeper insight with access to your team’s care summaries.",
      price: "$2.99",
      priceSub: "/ one time purchase",
      features: [
        "Unlock the ability to view other team members' summaries",
        "Gain deeper insight into your team’s caregiving efforts",
        "Available across all joined projects ",
        // "Dedicated support",
      ],
      textColor: "text-[#2B2B2B]",
      subcolor: "text-[#839297]",
      bgColor: "bg-[#FFFFFF]",
      btColor: "bg-[#2B2B2B]",
      bttext: "text-[#FFFFFF]",
      tick: "/images/lighttick.png",
    },
  ];
  return (
    <div className="mb-15">
      <div className="p-6 flex flex-col items-center justify-center text-center px-4 py-10">
        <h2 className="text-2xl md:text-4xl font-semibold mb-2 text-prime font-sfpro-regular">
          Affordable Pricing Plans
        </h2>
        <p className="text-secondary mb-6 max-w-xl font-sfpro-regular">
          Because we want this to be accessible to everyone
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full lg:max-w-[60rem] xl:max-w-[1270px] mx-auto">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
