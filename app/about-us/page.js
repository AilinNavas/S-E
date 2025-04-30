import Hero from "../components/Hero"
import DrHorn from '@/public/images/about-us/DrHorn.webp'
import Journey from "./components/Journey"
import Testimonials from "../components/Testimonials"
import { testimonialsMain } from "../data/testimonials";
import AfterOffice from "./components/AfterOffice"
import ParallaxSection from "../components/ParallaxSection"
import Faqs from "../components/Faqs"
import { faqsAboutUs } from "../data/faqsHome"
import NealParallax from '@/public/images/about-us/DrHyL.webp'
import { trustAboutUs } from "../data/TrustData"
import WhyTrustUs from "../procedures/components/WhyTrustUs"


const AboutUsPage = () => {
  return (
    <>
      {/* <NavbarMobile />
      <NavbarPC /> */}
      <Hero
        title="Experienced Endodontist in Fort Worth, TX"
        subtitle="Discover trusted, skilled, and passionate endodontic care at Southside Endodontics"
        primaryButtonText="Book An Appointment"
        primaryButtonLink="/appointments"
        secondaryButtonText="Refer Now"
        secondaryButtonLink="/referrals"
        imageSrc={DrHorn}
        imageAlt="Dr. Neal Horn at Southside Endodontics" />
      <Journey />
      <WhyTrustUs cards={trustAboutUs}
        title="Why Patients & Doctors Trust Dr. Horn"
        subtitle="Dr. Horn combines clinical expertise with a compassionate approach."
        bgColor="bg-[#3c8dbc]/5"
        mdCols={4} />
      <Testimonials data={testimonialsMain}
        title="What Patients & Doctors Say About Dr. Horn"
        subtitle="Real feedback on exceptional endodontics care"
        showCTA={false} />
      <AfterOffice />
      <ParallaxSection
        imageSrc={NealParallax}
        title="Schedule a Consultation with Dr. Horn"
        description="Experience expert endodontic care with Dr. Horn."
        buttonText="Call Us: (817) 555-1234"
      />
      <Faqs title="Frequently Asked Questions About Dr. Horn"
        description="Find answers to common questions about endodontic treatments and our practice."
        items={faqsAboutUs} />
    </>

  )
}

export default AboutUsPage