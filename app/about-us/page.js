import Hero from "../components/Hero"
import NavbarMobile from "../components/NavbarMobile"
import NavbarPC from "../components/NavbarPC"
import DrHorn from '@/public/images/about-us/DrHorn.webp'
import Journey from "./components/Journey"
import Trust from "./components/Trust"
import Testimonials from "../components/Testimonials"
import { testimonialsMain } from "../data/testimonials";
import AfterOffice from "./components/AfterOffice"
import ParallaxSection from "../components/ParallaxSection"
import InfoContact from "../components/InfoContact" 
import FormContact from "../components/FormContact"
import Faqs from "../components/Faqs"
import FaqsHome from "../data/faqsHome"
import Footer from "../components/Footer"


const AboutUsPage = () => {
  return (
    <>
      <NavbarMobile />
      <NavbarPC />
      <Hero
        title="Experienced Endodontist in Fort Worth, TX"
        subtitle="With over 15 years of experience in endodontics, Dr. Neal Horn is committed to providing expert, patient-centered care in Fort Worth's Medical District. Fluent in Spanish and passionate about his community, he ensures every patient feels comfortable and well-informed."
        primaryButtonText="Book An Appointment"
        primaryButtonLink="/appointments"
        secondaryButtonText="Refer Now"
        secondaryButtonLink="/referrals"
        imageSrc={DrHorn}
        imageAlt="Dr. Neal Horn at Southside Endodontics" />
      <Journey />
      <Trust />
      <Testimonials data={testimonialsMain}
        title="What Patients & Doctors Say About Dr. Horn"
        showCTA={false} />
      <AfterOffice />
      <ParallaxSection />
      <InfoContact />
      <FormContact />
      <Faqs title="Frequently Asked Questions About Dr. Horn"
        description="Find answers to common questions about endodontic treatments and our practice."
        items={FaqsHome} />
      <Footer />
    </>

  )
}

export default AboutUsPage