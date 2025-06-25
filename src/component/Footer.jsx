"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2B2B2B] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start border-b border-gray-400 pb-8">
        {/* Logo & Contact */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/images/herologo.png"
              alt="Hero Project Logo"
              width={150}
              height={50}
            />
            {/* <h1 className="text-xl font-semibold text-[#58B2BE]">
              Hero Project
            </h1> */}
          </div>
          <p className="text-sm mb-2">+1 (7635) 547-12-97</p>
          <p className="text-sm">support@heroproject.com</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-sfpro-bold mb-3">Social Links</h3>
          <div className="flex gap-3">
            <a
              href="#"
              className="bg-[#2F2F2F] border border-[#E5E7EB] p-2 rounded-full hover:bg-[#58B2BE] transition"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="#"
              className="bg-[#2F2F2F] border border-[#E5E7EB] p-2 rounded-full hover:bg-[#58B2BE] transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="bg-[#2F2F2F] border border-[#E5E7EB] p-2 rounded-full hover:bg-[#58B2BE] transition"
            >
              <FaTwitter size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-sfpro-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/terms&conditions"
                className="hover:text-[#58B2BE] transition"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-[#58B2BE] transition"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-sfpro-bold mb-3">Subscribe</h3>
          <form className="flex items-center w-full">
            <input
              type="email"
              placeholder="Get product updates"
              className="flex-1 px-3 py-2 rounded-l-md text-black bg-white text-sm focus:outline-none border border-[#E5E7EB]"
            />
            <button
              type="submit"
              className="bg-[#4DA3AE] px-3 py-2 rounded-r-md hover:bg-[#4ba6ad] transition cursor-pointer"
            >
              <span className="text-white">→</span>
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-white pt-6">
        © 2025 Hero Project. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
