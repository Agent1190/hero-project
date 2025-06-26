"use client";

import Image from "next/image";
import React from "react";

const AppDownloadBanner = () => {
  return (
    <section className="bg-gradient-custom text-white mt-32 lg:mt-40 px-4">
      <div className="max-w-7xl h-[42rem] sm:h-[36rem] lg:h-60 mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1 text-left sm:text-center md:text-left pt-6 lg:pt-0">
          <h2 className="text-4xl font-sfpro-bold mb-2 sm:text-5xl">
            Get The Hero Project App
          </h2>
          <p className="text-white/80 mb-4 font-sfpro-regular text-lg sm:text-2xl">
            Download the app and empower your care team today.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-col xs:flex-row items-center justify-center lg:justify-start gap-3">
            <a
              href="#"
              className="flex items-center gap-2 bg-[#338F95] text-prime justify-center w-44 h-14 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
            >
              <Image
                src="/images/apple.png"
                alt="Apple Logo"
                width={28}
                height={28}
              />
              <div className="text-left leading-tight pl-2">
                <p className="text-sm font-sfpro-regular text-white">
                  Download on the
                </p>
                <p className="font-sfpro-medium text-white text-xl">
                  App Store
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-[#338F95] text-prime justify-center w-44 h-14 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
            >
              <Image
                src="/images/play.png"
                alt="Play Store Logo"
                width={28}
                height={28}
              />
              <div className="text-left leading-tight">
                <p className="text-sm text-white font-sfpro-regular">
                  Get it on
                </p>
                <p className="font-sfpro-medium text-white text-xl">
                  Google Play
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end relative bottom-0 lg:bottom-[3.15rem] left-0">
          <div className="relative w-[300px]  sm:w-[350px] lg:w-[340px] aspect-square">
            <Image
              src="/images/doctor.png"
              alt="Doctor holding phone"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadBanner;
