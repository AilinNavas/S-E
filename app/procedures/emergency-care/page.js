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
import { symptomsEmergencyCare} from "@/app/data/symptoms"
import { trustServices } from "@/app/data/TrustData"
import { testimonialsMain } from "@/app/data/testimonials"
import { faqsForPatients } from "@/app/data/faqsHome"
import { afterCareItemsEmergencyCare, afterCareItemsRetreatment, stepsEmergencyCare, stepsRetreatment } from "@/app/data/treatmentProcess"
import smile from "@/public/images/smile.webp"

const EmergencyCarePage = () => {
  return (
   <>
    <Hero title="Emergency Care in Fort Worth"
        subtitle="Same-Day appointments for tooth pain, infection, and dental trauma"
        primaryButtonText="Book An Appointment"
        primaryButtonLink="/#contact"
        secondaryButtonText="Emergency Care"
        secondaryButtonLink="tel:+8173869007"
        imageSrc={DrHorn}
        imageAlt="Dr. Neal Horn at Southside Endodontics" />
      <WhatIs content={whatIsEmergencyCare[0]} />
      <Symptoms title="When to Seek Emergency Endodontic Care"
        subtitle="Act fast. These symptoms need urgent dental attention."
        symptoms={symptomsEmergencyCare} />
      <TreatmentProcess title="Our Emergency Care Process"
        subtitle="Step-by-step care when every minute matters."
        gridCols={"lg:grid-cols-5"}
        steps={stepsEmergencyCare}
        subtitle2={"Post-Treatment Care & Recovery"}
        afterCareItems={afterCareItemsEmergencyCare} />
      <WhyTrustUs cards={trustServices}
        title="Why Fort Worth Trusts Southside Endodontics"
        subtitle="Our commitment to excellence in endodontic care sets us apart."
        bgColor="bg-[#3c8dbc]/5"
        mdCols={3} />
      <Testimonials data={testimonialsMain}
        title="Real Patient Experiences"
        subtitle="Hear from patients who have experienced."
        showCTA={false} />
      <Faqs title="Have Questions? We Have Answers."
        description="Find answers to common endodontic questions."
        items={faqsForPatients} />
      <ParallaxSection imageSrc={smile}
        title="Emergency Care in Fort Worth "
        description="Same-Day appointments for tooth pain, infection, and dental trauma"
        buttonText="Book an Appointment" />

    </>
   

  )
}

export default EmergencyCarePage