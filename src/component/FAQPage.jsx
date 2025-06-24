import Image from "next/image";
import FAQ from "./FAQ";

const FAQPage = () => {
  const faqData = {
    title: "Frequently Asked Questions",
    subtitle: "Everything You Need to Know Before You Start",
    items: [
      {
        question: "What is The Hero Project?",
        answer:
          "We offer end-to-end development services including web development, mobile apps, cloud solutions, and AI integration.",
      },
      {
        question: "Who is the app for?",
        answer:
          "Project timelines vary based on complexity, but most projects range from 4-12 weeks.",
      },
      {
        question: "Is the app free?",
        answer:
          "We use modern frameworks like React, Next.js, Flutter, AWS, and various AI tools—whatever fits your vision best.",
      },
      {
        question: "What is the +Summaries Boost?",
        answer:
          "We work with businesses of all sizes, from startups to enterprises.",
      },
      {
        question: "What are Uplift Messages?",
        answer:
          "They’re inspirational messages sent every few days faith-based or non-religious—based on your preferences.",
      },
      {
        question: "How do I invite others?",
        answer:
          "Absolutely! We specialize in custom solutions tailored to your specific needs.",
      },
    ],
  };

  return (
    <div className="bg-white pb-12 relative">
      
      <FAQ {...faqData} />
    </div>
  );
};

export default FAQPage;
