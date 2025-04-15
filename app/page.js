
import Faqs from "./ui/common/Faqs";
import InfoContact from "./ui/common/InfoContact";
import NavbarPC from "./ui/layout/NavbarPC";
import Referring from "./ui/sections/Referring";
import Services from "./ui/sections/Services";
import Technology from "./ui/sections/Technology";
import Testimonials from "./ui/common/Testimonials";
import WhyUs from "./ui/sections/WhyUs";
import Hero from "./ui/sections/Hero";
import AboutUs from "./ui/sections/AboutUs";
import Footer from "./ui/layout/Footer";
import FaqsHome from "./data/faqsHome";
import ParallaxSection from "./ui/common/ParallaxSection";
import FormContact from "./ui/common/FormContact";
import { testimonialsMain, testimonialsForServices } from "./data/testimonials";
import NavbarMobile from "./ui/layout/NavbarMobile";

export default function Home() {
  return (
    <>
      {/* <InfoTop /> */}
      <NavbarMobile />
      <NavbarPC />
      <Hero />
      <AboutUs />
      <WhyUs />
      <Testimonials data={testimonialsMain}
        title="What Our Patients and Referring Doctors Say"
        showCTA={false} />
      <Services />
      <Referring />
      <Testimonials data={testimonialsForServices}
        title="What People Are Saying About Our Special Treatment"
        showCTA={true} />
      <Technology />
      <ParallaxSection />
      <InfoContact />
      <FormContact />
      <Faqs title="Frequently Asked Questions"
        description="Find answers to common questions about endodontic treatments and our practice."
        items={FaqsHome} />
      <Footer />

    </>
  );
}
