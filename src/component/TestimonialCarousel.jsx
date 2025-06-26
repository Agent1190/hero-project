"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Amira S.",
    role: "Daughter & Care Team Lead",
    image: "/images/user1.png",
    message:
      "“The Hero Project helped our family stay in sync while caring for our dad. Logging visits and seeing everyone's updates gave us peace of mind.”",
  },
  {
    name: "Janelle M.",
    role: "Hospice Volunteer",
    image: "/images/user2.png",
    message:
      "“The Uplift Messages came exactly when I needed them. They made long days feel lighter. Its simple and a thoughtful feature for caregivers. ”",
  },
  {
    name: "Helen D.",
    role: "Recovery Support Organizer",
    image: "/images/user3.png",
    message:
      "“It’s simple, thoughtful, and truly made our caregiving more coordinated.”",
  },
  {
    name: "Marco R.",
    role: "Sibling & Team Member",
    image: "/images/user4.png",
    message:
      "“We all felt more connected. Even from different cities, we could show up for our mom in real ways.”",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 2 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2 >= testimonials.length ? 0 : prev + 1));
  };

  return (
    <div className="w-full bg-[#EDF6F7] py-5 flex flex-col items-center px-4 sm:px-10 mt-10">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        <div className="flex flex-col items-center lg:items-start">
          <div>
            <h2 className="text-3xl xl:text-5xl font-sfpro-medium mb-2 text-center lg:text-left max-w-xs sm:max-w-sm">
              What <span className="text-prime font-sfpro-bold">Real </span>{" "}
              Users Are Saying
            </h2>
            <p className="text-secondary mb-6 text-center lg:text-left font-sfpro-regular max-w-xs sm:max-w-sm text-lg sm:text-2xl">
              Compassionate care, powered by connection.
            </p>
          </div>

          <div className="flex space-x-4 sm:space-x-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow hover:bg-gray-200 transition cursor-pointer"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow hover:bg-gray-200 transition cursor-pointer"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0 sm:space-x-6">
          <div className="max-w-[20rem] sm:max-w-2xl xl:max-w-3xl overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (isMobile ? 100 : 50)
                }%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-[100%] sm:min-w-[50%] p-4">
                  <div className="bg-[#FFFFFF] p-6 rounded-xl shadow-md h-full">
                    <div className="flex items-center mb-4 space-x-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-sfpro-bold text-base sm:text-lg lg:text-2xl">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm lg:text-base text-secondary font-sfpro-regular">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-secondary font-sfpro-regular text-lg sm:text-lg lg:text-2xl">
                      {testimonial.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
