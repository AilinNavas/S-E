import Hero from '@/app/components/Hero'
import WhatIs from '../components/WhatIs'
import Symptoms from '../components/Symptoms'
import TreatmentProcess from '../components/TreatmentProcess'
import WhyTrustUs from '../components/WhyTrustUs'
import Testimonials from '@/app/components/Testimonials'
import Faqs from '@/app/components/Faqs'
import ParallaxSection from '@/app/components/ParallaxSection'
import DrHorn from '@/public/images/about-us/DrHorn.webp'
import { trustServices } from '@/app/data/TrustData'
import { testimonialsMain } from '@/app/data/testimonials'
import { faqsForPatients } from '@/app/data/faqsHome'
import smile from '@/public/images/smile.webp'
import { whatIsEndodonticSurgery } from '@/app/data/services'
import { symptomsEndodonticSurgery } from '@/app/data/symptoms'
import { afterCareItemsEndodonticSurgery, stepsEndodonticSurgery } from '@/app/data/treatmentProcess'


const EndodonticSurgeryPage = () => {
  return (
    <>
      <Hero title="Endodontic Surgery in Fort Worth "
        subtitle="Advanced microsurgical techniques for optimal tooth health"
        primaryButtonText="Book An Appointment"
        primaryButtonLink="/appointments"
        secondaryButtonText="Emergency Care"
        secondaryButtonLink="/"
        imageSrc={DrHorn}
        imageAlt="Dr. Neal Horn at Southside Endodontics" />
      <WhatIs content={whatIsEndodonticSurgery[0]} />
      <Symptoms title="Do You Have These Symptoms?"
        subtitle="Recognizing the signs early can save your natural tooth."
        symptoms={symptomsEndodonticSurgery} />
      <TreatmentProcess title="Our Endodontic Surgery Process"
        subtitle="Our step-by-step approach ensures a precise, comfortable procedure with optimal healing."
        gridCols={"md:grid-cols-5"}
        steps={stepsEndodonticSurgery}
        subtitle2={"Recovery After Endodontic Surgery"}
        afterCareItems={afterCareItemsEndodonticSurgery} />
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
        title="Endodontic Surgery in Fort Worth "
        description="Advanced microsurgical techniques for optimal tooth health"
        buttonText="Book an Appointment" />

    </>

  )
}

export default EndodonticSurgeryPage