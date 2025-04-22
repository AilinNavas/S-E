import Faqs from "./components/Faqs";
import InfoContact from "./components/InfoContact";
import NavbarPC from "./components/NavbarPC";
import Referring from "./components/home/Referring";
import Services from "./components/home/Services";
import Technology from "./components/home/Technology";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/home/WhyUs";
import Hero from "./components/Hero";
import AboutUs from "./components/home/AboutUs";
import Footer from "./components/Footer";
import {FaqsHome }  from "./data/faqsHome";
import ParallaxSection from "./components/ParallaxSection";
import FormContact from "./components/FormContact";
import { testimonialsMain, testimonialsForServices } from "./data/testimonials";
import NavbarMobile from "./components/NavbarMobile";
import DrHorn from '@/public/images/about-us/Neal.webp'
import officeParallax from '@/public/images/about-us/office2.webp'

export default function Home() {

  return (
    <>
      {/* <NavbarMobile />
      <NavbarPC /> */}
      <Hero
      title="Fort Worth's Trusted Endodontist Practice"
      subtitle="Delivering Compassionate Endodontic Care with the Latest Technology in Fort Worth, TX."
      primaryButtonText="Book An Appointment"
      primaryButtonLink="/appointments"
      secondaryButtonText="Refer Now"
      secondaryButtonLink="/referrals"
      imageSrc={DrHorn}
      imageAlt="Dr. Neal Horn at Southside Endodontics"
     />
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
      <ParallaxSection
      imageSrc={officeParallax}
      title="Save Your Teeth"
      description="Schedule your consultation and transform your dental health."
      buttonText="Book an Appointment"
    />
       <Faqs title="Frequently Asked Questions"
        description="Find answers to common questions about endodontic treatments and our practice."
        items={FaqsHome} />
     
    </>
  );
}
