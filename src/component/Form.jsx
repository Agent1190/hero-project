"use client";

import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#F8F8F8] py-10 px-4 sm:px-8 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center justify-between">
        {/* Left Content */}
        <div className="max-w-lg">
          <h2 className="text-3xl sm:text-4xl font-sfpro-medium text-prime text-center lg:text-left">
            <span className="border-b-3 border-[#58B2BE]">Have </span>Any{" "}
            <span className="text-[#58B2BE] ">Questions?</span>
          </h2>
          <p className="mt-4 text-[#9A9A9A] text-base sm:text-lg font-sfpro-regular text-center lg:text-left">
            Have questions or need assistance? Our team is ready to guide you
            through every step of Hero Project
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm md:text-base font-medium text-prime mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name"
                required
                className="w-full px-4 py-2 border border-[#E5E7EB] font-sfpro-medium rounded-md focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm md:text-base font-sfpro-medium text-prime mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                required
                className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md font-sfpro-medium focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm md:text-base font-sfpro-medium text-prime mb-1"
              >
                Description
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe Your Query"
                required
                rows={4}
                className="w-full px-4 py-2 border border-[#E5E7EB] rounded-md font-sfpro-medium focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-custom hover:opacity-90 inner-shadow-blue text-white font-sfpro-bold py-3 rounded-full transition duration-200 cursor-pointer text-base"
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
