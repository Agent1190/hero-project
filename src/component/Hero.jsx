import React from "react";
import StatsComponent from "./StatsComponent";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white mt-4 sm:mt-0">
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]"></div>
      <div className="absolute inset-0 z-0 overflow-hidden h-[38rem]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] rotate-[0deg] origin-center scale-200"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90"></div>
      </div>
      <div className="relative z-10 flex md:flex-row flex-col items-center justify-center w-full lg:max-w-4xl xl:max-w-7xl mx-auto px-4 xl:px-3 ">
        <section className="flex items-center justify-center md:min-h-screen">
          <div className="max-w-4xl text-center md:text-left pr-2 ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sfpro-medium text-prime mb-2">
              Where <span className="text-gradient-custom">Care</span>
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-sfpro-medium text-prime mb-8">
              Becomes a Team Effort.
            </h2>
            <p className=" md:text-lg xl:text-xl text-gray-600 mb-10 leading-relaxed">
              Empowering families and caregivers to act as one - organized,
              supportive & present.
            </p>
            <Link
              href="/"
              className="bg-gradient-custom text-[12px] sm:text-sm lg:text-[16px] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:opacity-90 inner-shadow-blue"
            >
              Get Started
            </Link>
          </div>
        </section>
        <div className="max-w-4xl">
          <StatsComponent />
        </div>
      </div>
    </div>
  );
};

export default Hero;
