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
          "The Hero Project is an app that helps caregiving teams stay connected, log care activities, and share encouragement.",
      },
      {
        question: "Who is the app for?",
        answer:
          "It's made for families and support teams caring for someone in hospice, recovery, or living with a long-term illness.",
      },
      {
        question: "Is the app free?",
        answer:
          "Team Members join for free. Only the Project Leader pays $5.99/month after a free trial.",
      },
      {
        question: "What is the +Summaries Boost?",
        answer:
          "A one-time $2.99 upgrade that lets Team Members view each other's care summaries.",
      },
      {
        question: "What are Uplift Messages?",
        answer:
          "They’re inspirational messages sent every few days—Christian or non-religious—based on your preferences.",
      },
      {
        question: "How do I invite others?",
        answer:
          "Project Leaders can invite teammates via text from within the app in just a few taps.",
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
