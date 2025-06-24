"use client";

import Image from "next/image";
import React from "react";

const AppDownloadBanner = () => {
  return (
    <section className="bg-gradient-custom text-white mt-44 mb-20 px-4">
      <div className="max-w-7xl h-[42rem] sm:h-[36rem] lg:h-60 mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left pt-6 lg:pt-0">
          <h2 className="text-2xl sm:text-3xl font-sfpro-bold mb-2">
            Get The Hero Project App
          </h2>
          <p className="text-white/90 mb-4 font-sfpro-regular">
            Download the app and empower your care team today.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
            <a
              href="#"
              className="flex items-center gap-2 bg-[#338F95] text-prime px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
            >
              <Image
                src="/images/apple.png"
                alt="Apple Logo"
                width={24}
                height={24}
              />
              <div className="text-left leading-tight text-sm">
                <p className="text-xs font-sfpro-regular text-white">
                  Download on the
                </p>
                <p className="font-sfpro-medium text-white">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-[#338F95] text-prime px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition duration-200"
            >
              <Image
                src="/images/play.png"
                alt="Play Store Logo"
                width={24}
                height={24}
              />
              <div className="text-left leading-tight text-sm">
                <p className="text-xs text-white font-sfpro-regular">
                  Get it on
                </p>
                <p className="font-sfpro-medium text-white">Google Play</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end relative lg:bottom-[4.3rem] left-0">
          <Image
            src="/images/doctor.png" // Replace with your actual image
            alt="Doctor holding phone"
            width={300}
            height={300}
            className="w-auto h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AppDownloadBanner;
