"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

export default function PricingCard({
  icon,
  audience,
  title,
  subtitle,
  price,
  priceSub,
  features,
  bgColor,
  textColor,
  subcolor,
  tick,
  btColor,
  bttext,
  popular,
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`w-full max-w-sm lg:max-w-[18rem] xl:max-w-sm rounded-2xl p-6 ${textColor} shadow-2xl flex flex-col justify-between ${bgColor} mb-8 lg:mb-0`}
    >
      {/* Header */}
      <div className="h-96">
        <div className="relative">
          <p className="absolute right-0 bg-white py-1.5 px-2.5 text-prime w-[4.55rem] rounded-lg flex">
            {popular}
          </p>
        </div>
        <div className="flex mb-3 items-center pt-8">
          <div>
            <Image
              src={icon}
              width={60}
              height={100}
              alt="icon"
              className="object-contain"
            />
          </div>
          <div className="ml-4">
            <p className="text-sm sm:text-base opacity-90 mb-1">{audience}</p>
            <h3 className="text-lg xl:text-xl font-sfpro-bold mb-1">{title}</h3>
          </div>
        </div>
        <p className="text-xs xl:text-sm opacity-90 mb-4">{subtitle}</p>

        <div className="text-3xl lg:text-4xl xl:text-5xl font-sfpro-bold mb-2">
          {price}{" "}
          <span className={`text-sm font-sfpro-regular ${subcolor}`}>
            {priceSub}
          </span>
        </div>

        <div className="md:hidden mb-3">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} md:block`}>
          <p className="text-base font-sfpro-medium mb-2">What’s included</p>
          <ul className="space-y-2 text-sm h-32">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Image
                  src={tick}
                  width={20}
                  height={20}
                  alt="icon"
                  className="object-contain"
                />
                <span className="leading-5 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <button
        className={`mt-6 w-full ${btColor} ${bttext} font-semibold py-4 rounded-full transition hover:opacity-80 cursor-pointer`}
      >
        Get started
      </button>
    </div>
  );
}
