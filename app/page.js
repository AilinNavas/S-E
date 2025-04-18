import Faqs from "./components/Faqs";
import InfoContact from "./components/InfoContact";
import NavbarPC from "./components/NavbarPC";
import Referring from "./components/home/Referring";
import Services from "./components/home/Services";
import Technology from "./components/home/Technology";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/home/WhyUs";
import Hero from "./components/home/Hero";
import AboutUs from "./components/home/AboutUs";
import Footer from "./components/Footer";
import FaqsHome from "./data/faqsHome";
import ParallaxSection from "./components/ParallaxSection";
import FormContact from "./components/FormContact";
import { testimonialsMain, testimonialsForServices } from "./data/testimonials";
import NavbarMobile from "./components/NavbarMobile";

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
