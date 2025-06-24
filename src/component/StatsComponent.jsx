import Image from "next/image";
import React from "react";

const StatsComponent = () => {
  return (
    <div className="w-full sm:px-4 py-10 md:py-16 flex flex-col xl:gap-8 max-w-6xl mx-auto items-start">
      <div className="flex items-end gap-6">
        <div className="rounded-4xl bg-[#FFEEEC] shadow-sm w-full max-w-[50%] sm:max-w-[22rem] md:max-w-[26rem] lg:max-w-[28rem] xl:max-w-[32rem] h-32 sm:h-36 md:h-40 lg:h-44 flex flex-col justify-between">
          <div className="px-4 pt-4 sm:px-6 sm:pt-6">
            <p className="text-prime text-base lg:text-xl xl:text-2xl font-sfpro-bold">
              Active <span className="text-[#FF897B]">Caregivers</span>
            </p>
            <p className="text-prime text-xs sm:text-sm xl:text-lg font-sfpro-regular mt-1">
              <span className="font-sfpro-bold">500+</span> Teams Connected
            </p>
          </div>
          <div className="ml-auto w-7 h-7 sm:w-8 sm:h-8 xl:w-12 xl:h-12 relative right-3 bottom-3">
            <Image
              src="/images/heart.png"
              alt="Heart Icon"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Mobile Image */}
        <div className="flex items-center justify-center inset-x-0">
          <Image
            src="/images/web.png"
            alt="Mobile UI"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="w-[13rem] sm:w-[28rem] lg:w-[35rem] h-auto object-contain"
          />
        </div>
      </div>

      <div className="flex items-start justify-between mt-4 sm:mt-8 gap-6">
        {/* Bottom Left Card */}
        <div className="rounded-b-4xl rounded-tl-4xl bg-[#F4F2FF] shadow-sm max-w-[22rem] h-[9rem] sm:h-44 flex flex-col justify-between">
          <div className="px-3 pt-4 sm:p-6">
            <p className="text-base lg:text-xl xl:text-2xl font-sfpro-bold">
              Inspire & <span className="text-[#A096FF]">Uplift</span>
            </p>
            <p className="text-prime text-sm sm:text-sm xl:text-lg font-sfpro-regular mt-1">
              3,000+ Moments of Encouragement
            </p>
          </div>
          <div className="ml-auto w-7 h-7 sm:w-8 xl:w-12 sm:h-8 xl:h-12 relative right-3 bottom-3">
            <Image
              src="/images/uplift.png"
              alt="Uplift Icon"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Bottom Right Card */}
        <div className="rounded-b-4xl rounded-tr-4xl bg-[#2B2B2B] shadow-sm max-w-[19rem] h-[10rem] sm:h-52 flex flex-col justify-between ">
          <div className="px-3 pt-4 sm:p-6">
            <p className="text-white text-base lg:text-xl xl:text-3xl font-sfpro-bold">
              Lets Connect
            </p>
            <p className="text-white text-sm sm:text-sm xl:text-lg font-sfpro-regular mt-1">
              43% of Members connect Outside the App
            </p>
          </div>
          <div className="ml-auto w-7 h-7 sm:w-8 xl:w-12 sm:h-8 xl:h-12 relative right-4 bottom-4 ">
            <Image
              src="/images/add.png"
              alt="Chart Icon"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
