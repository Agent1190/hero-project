import React from "react";
import StatsComponent from "./StatsComponent";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white mt-4 sm:mt-0">
      <div
        className="
      absolute top-72 right-0                
      w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[230px] lg:h-[300px]
      bg-[#8DF2FF] blur-[70%] rounded-full
      pointer-events-none                     
      z-0                       
      translate-x-0                       
    "
      />
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]"></div>
      <div className="absolute inset-0 z-0 overflow-hidden h-[38rem]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] rotate-[0deg] origin-center scale-200"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90"></div>
      </div>
      <div className="relative z-10 flex lg:flex-row flex-col items-center justify-center w-full lg:max-w-[60rem] xl:max-w-[1270px] mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-center lg:max-w-[412px] xl:max-w-lg mx-auto">
          <div className="max-w-4xl text-center lg:text-left my-4 lg:my-0">
            <h2 className="text-4xl md:text-3xl lg:text-4xl xl:text-6xl font-sfpro-medium text-prime mb-2 leading-tight">
              Where <span className="text-gradient-custom"> Care </span>
              Becomes a Team Effort.
            </h2>
            <p className=" md:text-lg xl:text-2xl text-subtext mb-6 leading-relaxed font-sfpro-regular">
              Empowering families and caregivers to act as one - organized,
              supportive & present.
            </p>
            <a
              href="#banner"
              className="bg-gradient-custom text-[14px] sm:text-base lg:text-[18px] justify-center items-center text-white w-[122px] h-[37px] md:w-[152px] md:h-[45px] inline-flex rounded-full hover:opacity-90 inner-shadow-blue font-sfpro-regular"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="max-w-2xl mx-auto">
          <StatsComponent />
        </div>
      </div>
    </div>
  );
};

export default Hero;
