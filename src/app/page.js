import About from "../component/About";
import AppDownloadBanner from "../component/AppDownloadBanner";
import FAQPage from "../component/FAQPage";
import Form from "../component/Form";
import Hero from "../component/Hero";
import PricingPlan from "../component/PricingPlan";
import TestimonialCarousel from "../component/TestimonialCarousel";

export default function Home() {
  return (
    <div className="">
      <div>
        <Hero />
      </div>
      <section id="about" className="scroll-mt-4">
        <About />
      </section>
      <div>
        <PricingPlan />
      </div>
      <div>
        <TestimonialCarousel />
      </div>
      <div>
        <FAQPage />
      </div>
      <section id="contact" className="scroll-mt-4">
        <Form />
      </section>
      <div id="banner" className="scroll-mt-4">
        <AppDownloadBanner />
      </div>
    </div>
  );
}
