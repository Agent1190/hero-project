import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="flex items-center justify-between px-4 py-3 bg-transparent w-full lg:max-w-[61rem] xl:max-w-[1270px] mx-auto">
        <Link
          href="/"
          className="hidden md:flex items-center space-x-2 w-24 md:w-32 lg:w-56 relative h-10 md:h-16 lg:h-20"
        >
          <Image
            src="/images/herologo.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </Link>
        <Link
          href="/"
          className="flex items-center space-x-2 w-24 md:w-32 lg:w-56 relative h-10 md:h-16 lg:h-20 md:hidden"
        >
          <Image
            src="/images/mobileLogo.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </Link>
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
            href="#banner"
            className="bg-gradient-custom text-[14px] sm:text-sm lg:text-[16px] text-white inline-flex w-[122px] h-[37px] md:w-[152px] md:h-[45px] items-center justify-center rounded-full hover:opacity-90 inner-shadow-blue font-sfpro-regular"
          >
            Download App
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
