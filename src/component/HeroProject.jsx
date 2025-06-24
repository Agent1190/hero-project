import Image from "next/image";
import React from "react";

const HeroProject = () => {
  return (
    <div className="text-center px-4 py-10">
      <span className="text-sm md:text-xl text-[#A7A6AE] mb-4">
        What Is the Hero Project?
      </span>
      <h2 className="text-3xl xl:text-5xl leading-12 md:leading-16 font-sfpro-medium">
        <span className="text-secondary"> Hero Project is a </span> caregiving
        app{" "}
        <Image
          src="/images/home_icon.png" // Replace with your actual image path
          alt="Home Icon"
          width={35}
          height={35}
          className="inline-block"
        />
        <span className="text-secondary"> helping teams </span>log care, uplift{" "}
        <Image
          src="/images/upliftg.png" // Replace with your actual image path
          alt="Uplift Icon"
          width={25}
          height={25}
          className="inline-block"
        />{" "}
        one another
        <span className="text-secondary"> and stay </span>
        connected <span> through </span> inspired daily support.
      </h2>
    </div>
  );
};

export default HeroProject;
