import Image from "next/image";
import React from "react";

const StatsComponent = () => {
  return (
    <div className="sm:px-4 py-10 md:py-8 flex flex-col">
      <div className="flex items-end gap-2 xs:gap-6">
        <div className="rounded-4xl bg-[#FFEEEC] w-[140px] xs:w-[178px] sm:w-[220px] sm:h-[160px] lg:w-[220px] xl:w-[278px] h-[123px] lg:h-[160px] xl:h-[201px] flex flex-col justify-between">
          <div className="px-4 pt-4 sm:px-6 sm:pt-6">
            <p className="text-prime text-base lg:text-xl xl:text-3xl font-sfpro-medium">
              Active <span className="text-[#FF897B]">Caregivers</span>
            </p>
            <p className="text-prime text-xs sm:text-sm xl:text-xl font-sfpro-regular mt-1">
              <span className="font-sfpro-bold">500+ </span>Teams Connected
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
            src="/images/Web.png"
            alt="Mobile UI"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="w-[140px] xs:w-[178px] sm:w-[16rem] lg:w-[259px] xl:w-[20.5rem] h-auto object-contain"
          />
        </div>
      </div>

      <div className="flex items-start justify-between mt-4 sm:mt-6 gap-2 xs:gap-6">
        {/* Bottom Left Card */}
        <div className="rounded-b-4xl rounded-tl-4xl bg-[#F4F2FF] w-[140px] xs:w-[178px] sm:w-[220px] sm:h-[160px] lg:w-[220px] xl:w-[278px] h-[123px] lg:h-[160px] xl:h-[201px] flex flex-col justify-between">
          <div className="px-3 pt-4 sm:p-6">
            <p className="text-base lg:text-xl xl:text-3xl font-sfpro-medium">
              Inspire & <span className="text-[#A096FF]">Uplift</span>
            </p>
            <p className="text-prime text-sm sm:text-sm xl:text-xl font-sfpro-regular mt-1">
              <span className=" font-sfpro-bold">3,000+ </span> Moments of
              Encouragement
            </p>
          </div>
          <div className="ml-auto w-7 h-7 sm:w-8 sm:h-8 xl:w-12 xl:h-12 relative right-3 bottom-3">
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
        <div className="rounded-b-4xl rounded-tr-4xl bg-[#2B2B2B] w-[140px] xs:w-[178px] h-[133px] sm:w-[259px] xl:w-[328px] sm:h-[180px] xl:h-[228px] flex flex-col justify-between ">
          <div className="px-3 pt-4 sm:p-6">
            <p className="text-white text-base lg:text-xl xl:text-3xl font-sfpro-medium">
              <span className="text-[#7C7C7C]">Lets </span> Connect
            </p>
            <p className="text-white text-sm sm:text-sm xl:text-xl font-sfpro-regular mt-1">
              <span className=" font-sfpro-bold">43% </span>of Members connect
              Outside the App
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
