import Image from "next/image";
import React from "react";
import InfoCard from "./InfoCard";

const Team = () => {
  const infoCards = [
    {
      emoji: "🏡",
      title: "Family Care Teams",
      description:
        "Keep everyone connected, involved, and uplifted—no matter the distance.",
    },
    {
      emoji: "💪",
      title: "Recovery After Surgery",
      description:
        "Stay organized and supportive through every milestone of the healing journey.",
    },
    {
      emoji: "🕊️",
      title: "Hospice and Palliative Care",
      description:
        "Coordinate care and share memories during life’s most meaningful chapter.",
    },
    {
      emoji: "🌿",
      title: "Long-Term Illness Support",
      description:
        "Track care, encourage each other, and bring consistency to ongoing treatment.",
    },
  ];
  return (
    <div className="bg-[#EDF6F7] rounded-2xl flex flex-col lg:flex-row justify-between mb-7">
      <div className="order-2 lg:order-1 relative w-full lg:w-1/2 xs:h-[22.5rem] h-[17rem] sm:h-auto lg:h-[30rem]">
        <h2 className="text-4xl font-sfpro-medium text-secondary p-6 lg:text-left text-center lg:block hidden">
          For Every <span className="text-prime"> Team </span> Behind <br /> a{" "}
          <span className="text-prime"> Hero </span>
        </h2>
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[5/4]">
          {/* Absolutely-positioned image that can be nudged down per breakpoint */}
          <div className="absolute inset-x-0 xs:top-[20%] sm:top-[0%] md:top-[0%] lg:top-[39%] xl:top-[4%] h-full">
            <Image
              src="/images/team.png"
              alt="Team"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2 flex flex-col flex-wrap justify-center gap-3 p-4 sm:p-8">
        <h2 className="text-3xl sm:text-4xl font-sfpro-medium text-secondary p-6 text-center block lg:hidden">
          For Every <span className="text-prime"> Team </span> Behind <br /> a{" "}
          <span className="text-prime"> Hero </span>
        </h2>
        {infoCards.map((card, index) => (
          <InfoCard
            key={index}
            emoji={card.emoji}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
