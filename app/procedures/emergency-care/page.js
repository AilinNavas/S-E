import Hero from "@/app/components/Hero"
import WhatIs from "../components/WhatIs"
import Symptoms from "../components/Symptoms"
import TreatmentProcess from "../components/TreatmentProcess"
import WhyTrustUs from "../components/WhyTrustUs"
import Testimonials from "@/app/components/Testimonials"
import Faqs from "@/app/components/Faqs"
import ParallaxSection from "@/app/components/ParallaxSection"
import DrHorn from "@/public/images/about-us/DrHorn.webp"
import { whatIsEmergencyCare } from "@/app/data/services"
import { symptomsEmergencyCare } from "@/app/data/symptoms"
import { trustServices } from "@/app/data/TrustData"
import { testimonialsMain } from "@/app/data/testimonials"
import { faqsForPatients } from "@/app/data/faqsHome"
import { afterCareItemsEmergencyCare, stepsEmergencyCare } from "@/app/data/treatmentProcess"
import smile from "@/public/images/smile.webp"
import InsuranceSection from "@/app/components/home/InsuranceSection"
import Insurance from "@/app/for-patients/components/Insurance"

const EmergencyCarePage = () => {
  return (
    <>
      <Hero title="Emergency Care in Fort Worth"
        subtitle="Same-Day appointments for tooth pain, infection, and dental trauma."
        primaryButtonText="Book An Appointment"
        primaryButtonLink="/contact"
        secondaryButtonText="Refer Now"
        secondaryButtonLink="https://securesite1246.tdo4endo.com/RefDocsLogin.aspx"
        imageSrc={DrHorn}
        imageAlt="Dr. Neal Horn at Southside Endodontics" />
      <WhatIs content={whatIsEmergencyCare[0]} />
      <Symptoms title="When to Seek Emergency Endodontic Care"
        subtitle="These symptoms need urgent dental attention."
        symptoms={symptomsEmergencyCare} />
      <TreatmentProcess title="Our Emergency Care Process"
        subtitle="Step-by-step care when every minute matters."
        gridCols={"lg:grid-cols-5"}
        steps={stepsEmergencyCare}
        subtitle2={"Post-Treatment Care & Recovery"}
        afterCareItems={afterCareItemsEmergencyCare} />
      <InsuranceSection />
      <WhyTrustUs cards={trustServices}
        title="Why Fort Worth Trusts Southside Endodontics"
        subtitle="Our commitment to excellence in endodontic care sets us apart."
        bgColor="bg-[#3c8dbc]/5"
        mdCols={3} />
      <Testimonials data={testimonialsMain}
        title="Real Patient Experiences"
        subtitle="Hear from patients who have experienced."
        showCTA={false} />
      <Insurance title={'Affordable Care for Everyone'}
        subtitle={'Our team will help verify your insurance coverage and answer any questions you have.'} />
      <Faqs title="Have Questions? We Have Answers."
        description="Find answers to common endodontic questions."
        items={faqsForPatients} />
      <ParallaxSection imageSrc={smile}
        title="Emergency Care in Fort Worth "
        description="Same-Day appointments for tooth pain, infection, and dental trauma."
        buttonText="Book an Appointment"
        buttonLink={"/contact"} />

    </>


  )
}

export default EmergencyCarePage