import React from "react";
import HeroProject from "./HeroProject";
import CardBlock from "./CardBlock";
import Team from "./Team";

const About = () => {
  const cardData = [
    {
      iconSrc: "/images/home_icon.png",
      title: "Care Logging, Simplified",
      imageSrc: "/images/care.png",
      altText: "Care logging preview",
    },
    {
      iconSrc: "/images/upliftw.png",
      title: "Daily Encouragement",
      imageSrc: "/images/daily.png",
      altText: "Team collaboration preview",
    },
    {
      iconSrc: "/images/chartw.png",
      title: "Insight That Empowers",
      imageSrc: "/images/insight.png",
      altText: "Daily insights preview",
    },
  ];
  return (
    <div className="lg:max-w-[60rem] xl:max-w-[1270px] mx-auto">
      <HeroProject />
      <div>
        <div className="flex md:flex-row flex-col items-center justify-between p-4">
          {cardData.map((card, index) => (
            <CardBlock
              key={index}
              iconSrc={card.iconSrc}
              title={card.title}
              imageSrc={card.imageSrc}
              altText={card.altText}
              textWhite={index === 2}
            />
          ))}
        </div>
      </div>
      <Team />
      <div className="p-6 flex flex-col items-center justify-center text-center px-4 py-10">
        <h2 className="text-2xl md:text-4xl mb-2 text-prime font-sfpro-regular">
          Care Is a Team Effort
        </h2>
        <p className="text-secondary mb-6 max-w-xl font-sfpro-regular text-base lg:text-xl">
          Whether you're near or far, Hero Project helps families stay informed,
          involved and inspired together.
        </p>

        <div className="w-full max-w-7xl rounded-2xl overflow-hidden shadow-lg relative">
          <video
            className="w-full h-auto object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/hero.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          {/* Optional: bottom-right icon like the image has */}
          <div className="absolute bottom-4 right-4">
            <img
              src="/images/family_icon.png"
              alt="icon"
              className="w-10 h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
