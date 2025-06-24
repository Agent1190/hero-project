import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="flex items-center justify-between px-4 py-3 bg-transparent lg:max-w-4xl xl:max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 w-24 md:w-32 lg:w-56 relative h-10 md:h-16 lg:h-20">
          <Image
            src="/images/herologo.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
        {/* Desktop Menu */}
        <div className="flex items-center space-x-6">
          <Link
            href="#about"
            className="text-sm lg:text-[16px] text-prime hover:text-tertiary font-sfpro-regular hidden md:flex"
          >
            About Us
          </Link>
          <Link
            href="#contact"
            className="text-prime text-sm lg:text-[16px] hover:text-tertiary font-sfpro-regular hidden md:flex"
          >
            Contact Us
          </Link>
          <Link
            href="/"
            className="bg-gradient-custom text-[12px] sm:text-sm lg:text-[16px] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:opacity-90 inner-shadow-blue"
          >
            Download App
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
