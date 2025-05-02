import Hero from "@/app/components/Hero"
import WhatIs from "../components/WhatIs"
import Symptoms from "../components/Symptoms"     
import TreatmentProcess from "../components/TreatmentProcess"
import WhyTrustUs from "../components/WhyTrustUs"
import Testimonials from "@/app/components/Testimonials"
import Faqs from "@/app/components/Faqs"
import ParallaxSection from "@/app/components/ParallaxSection"
import DrHorn from "@/public/images/about-us/DrHorn.webp"
import { whatIsRetreatment } from "@/app/data/services"
import { symptomsRetreatment } from "@/app/data/symptoms"
import { trustServices } from "@/app/data/TrustData"
import { testimonialsMain } from "@/app/data/testimonials"
import { faqsForPatients } from "@/app/data/faqsHome"
import { afterCareItemsRetreatment, stepsRetreatment } from "@/app/data/treatmentProcess"
import smile from "@/public/images/smile.webp"

const EndodonticRetreatmentPage = () => {
  return (
   <>
    <Hero title="Root Canal Retreatment in Fort Worth "
        subtitle="If your previous root canal is causing pain or infection, retreatment can help"
        primaryButtonText="Book An Appointment"
        primaryButtonLink="/appointments"
        secondaryButtonText="Emergency Care"
        secondaryButtonLink="/"
        imageSrc={DrHorn}
        imageAlt="Dr. Neal Horn at Southside Endodontics" />
      <WhatIs content={whatIsRetreatment[0]} />
      <Symptoms title="Do You Need a Retreatment?"
        subtitle="Persistent symptoms after a root canal may require retreatment."
        symptoms={symptomsRetreatment} />
      <TreatmentProcess title="Our Pain-Free Root Canal Retreatment Process"
        subtitle="Our step-by-step approach ensures a thorough, effective retreatment with minimal discomfort."
        gridCols={"md:grid-cols-5"}
        steps={stepsRetreatment}
        subtitle2={"The Retreatment Advantage"}
        afterCareItems={afterCareItemsRetreatment} />
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
        title="Root Canal Retreatment in Fort Worth "
        description="If your previous root canal is causing pain or infection, retreatment can help"
        buttonText="Book an Appointment" />

    </>
   

  )
}

export default EndodonticRetreatmentPage