import About from "../component/About";
import AppDownloadBanner from "../component/AppDownloadBanner";
import FAQPage from "../component/FAQPage";
import Form from "../component/Form";
import Hero from "../component/Hero";
import PricingPlan from "../component/PricingPlan";
import TestimonialCarousel from "../component/TestimonialCarousel";

export default function Home() {
  return (
    <div className=" ">
      <Hero />
      <section id="about" className="scroll-mt-24">
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
      <section id="contact" className="scroll-mt-24">
        <Form />
      </section>
      <div>
        <AppDownloadBanner />
      </div>
    </div>
  );
}
