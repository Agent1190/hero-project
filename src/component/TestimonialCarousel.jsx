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
      "The Hero Project helped our family stay in sync while caring for our dad. Logging visits and seeing everyone's updates gave us peace of mind.",
  },
  {
    name: "Amira S.",
    role: "Daughter & Care Team Lead",
    image: "/images/user2.png",
    message:
      "The Hero Project helped our family stay in sync while caring for our dad. Logging visits and seeing everyone's updates gave us peace of mind.",
  },
  {
    name: "David R.",
    role: "Primary Caregiver & Son",
    image: "/images/user1.png",
    message:
      "With the Hero Project, I no longer feel alone in managing Mom's care. My siblings can now easily stay informed and contribute, no matter where they are.",
  },
  {
    name: "Linda M.",
    role: "Granddaughter & Organizer",
    image: "/images/user2.png",
    message:
      "Before using Hero Project, we struggled to track appointments and medications. Now everything’s in one place, and it’s made caregiving so much easier.",
  },
  {
    name: "Mark A.",
    role: "Neighbor & Volunteer",
    image: "/images/user1.png",
    message:
      "Even as a neighbor helping occasionally, Hero Project makes it clear what’s needed. It’s an amazing tool for team-based caregiving.",
  },
  {
    name: "Sophia K.",
    role: "Sister & Remote Support",
    image: "/images/user2.png",
    message:
      "Living in another state, I used to feel disconnected. Hero Project lets me check in, leave notes, and feel like part of the care team again.",
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
            <h2 className="text-3xl sm:text-4xl font-sfpro-medium mb-2 text-center lg:text-left">
              What <span className="text-prime font-sfpro-bold">Real </span>{" "}
              Users Are Saying
            </h2>
            <p className="text-gray-600 mb-6 text-center lg:text-left font-sfpro-regular">
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
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-secondary">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-secondary font-sfpro-regular">
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
