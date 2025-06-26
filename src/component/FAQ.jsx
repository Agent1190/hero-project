"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const FAQ = ({ title, subtitle, items }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-2xl font-sfpro-regular sm:text-4xl text-prime">
          {title}
        </h1>
        <p className="mt-4 text-sm sm:text-lg text-prime font-sfpro-regular text-secondary">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
        {items.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-gray-200 dark:border-[#E7E7E7] h-auto p-4 rounded-xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left focus:outline-none cursor-pointer"
      >
        <span>
          <h3 className="text-base sm:text-2xl font-sfpro-regular text-prime">
            {question}
          </h3>
        </span>
        <span
          className={`ml-6 h-7 w-7 flex items-center justify-center rounded-md transition duration-200 ${
            isOpen ? "bg-[#4DA3AE]" : "bg-[#E7E7E7]"
          }`}
        >
          {isOpen ? (
            <span className="text-black text-2xl font-sfpro-medium">−</span> // Minus sign
          ) : (
            <span className="text-black text-2xl font-sfpro-medium">+</span> // Plus sign
          )}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="pr-12"
          >
            <p className="text-sm sm:text-xl text-prime font-sfpro-regular">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQ;
