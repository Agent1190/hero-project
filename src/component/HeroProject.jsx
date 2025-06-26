import Image from "next/image";
import React from "react";

const HeroProject = () => {
  return (
    <div className="text-center px-4 py-10">
      <span className="text-base md:text-2xl text-[#A7A6AE] mb-4 font-sfpro-regular">
        What Is the Hero Project?
      </span>
      <h2 className="text-3xl sm:text-4xl xl:text-5xl leading-12 md:leading-16 font-sfpro-medium">
        <span className="text-secondary"> Hero Project is a </span> caregiving
        app{" "}
        <Image
          src="/images/home_icon.png" // Replace with your actual image path
          alt="Home Icon"
          width={0}
          height={0}
          sizes="100vw"
          className="inline-flex w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
        />
        <span className="text-secondary"> helping teams </span>log care, uplift{" "}
        <Image
          src="/images/upliftg.png" // Replace with your actual image path
          alt="Uplift Icon"
          // fill
          width={0}
          height={0}
          sizes="100vw"
          className="inline-flex w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
        />{" "}
        one another
        <span className="text-secondary"> and stay </span>
        connected <span> through </span> inspired daily support.
      </h2>
    </div>
  );
};

export default HeroProject;
