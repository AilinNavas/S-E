import Hero from '@/app/components/Hero'
import WhatIs from '../components/WhatIs'
import Symptoms from '../components/Symptoms'
import TreatmentProcess from '../components/TreatmentProcess'
import WhyTrustUs from '../components/WhyTrustUs'
import Testimonials from '@/app/components/Testimonials'
import Faqs from '@/app/components/Faqs'
import ParallaxSection from '@/app/components/ParallaxSection'
import DrHorn from '@/public/images/about-us/DrHorn.webp'
import { whatIsRootCanal } from '@/app/data/services'
import { symptomsRootCanal } from '@/app/data/symptoms'
import { trustServices } from '@/app/data/TrustData'
import { testimonialsMain } from '@/app/data/testimonials'
import { faqsForPatients } from '@/app/data/faqsHome'
import smile from '@/public/images/smile.webp'
import { afterCareItemsRootCanal, stepsRootCanal } from '@/app/data/treatmentProcess'

const RootCanalPage = () => {
  return (

    <>
      <Hero title="Pain-Free Root Canal Therapy in Fort Worth"
        subtitle="A root canal can save your tooth and relieve discomfort."
        primaryButtonText="Book An Appointment"
        primaryButtonLink="/#contact"
        secondaryButtonText="Emergency Care"
        secondaryButtonLink="/"
        imageSrc={DrHorn}
        imageAlt="Dr. Neal Horn at Southside Endodontics" />
      <WhatIs content={whatIsRootCanal[0]} />
      <Symptoms title="Do You Have These Symptoms?"
        subtitle="Recognizing the signs early can save your natural tooth."
        symptoms={symptomsRootCanal} />
      <TreatmentProcess title="A Comfortable, Pain-Free Experience"
        subtitle="Our step-by-step approach ensures a smooth, efficient root canal procedure with minimal discomfort."
        gridCols={"lg:grid-cols-4"}
        steps={stepsRootCanal}
        subtitle2={"What to expect after your root canal"}
        afterCareItems={afterCareItemsRootCanal} />
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
        title="Pain-Free Root Canal Therapy in Fort Worth"
        description="A root canal can save your tooth and relieve discomfort"
        buttonText="Book an Appointment" />

    </>



  )
}

export default RootCanalPage