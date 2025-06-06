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
import InsuranceSection from '@/app/components/home/InsuranceSection'
import Insurance from '@/app/for-patients/components/Insurance'


const EndodonticSurgeryPage = () => {
  return (
    <>
      <Hero title="Endodontic Surgery in Fort Worth "
        subtitle="Advanced microsurgical techniques for optimal tooth health."
        primaryButtonText="Book An Appointment"
        primaryButtonLink="/contact"
      secondaryButtonText="Refer Now"
        secondaryButtonLink="https://securesite1246.tdo4endo.com/RefDocsLogin.aspx"
        imageSrc={DrHorn}
        imageAlt="Dr. Neal Horn at Southside Endodontics" />
      <WhatIs content={whatIsEndodonticSurgery[0]} />
      <Symptoms title="Do You Have These Symptoms?"
        subtitle="Recognizing the signs early can save your natural tooth."
        symptoms={symptomsEndodonticSurgery} />
      <TreatmentProcess title="Our Endodontic Surgery Process"
        subtitle="Our step-by-step approach ensures a precise, comfortable procedure with optimal healing."
        gridCols={"lg:grid-cols-5"}
        steps={stepsEndodonticSurgery}
        subtitle2={"Recovery After Endodontic Surgery"}
        afterCareItems={afterCareItemsEndodonticSurgery} />
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
      subtitle={'Our team will help verify your insurance coverage and answer any questions you have.'}/>
      <Faqs title="Have Questions? We Have Answers."
        description="Find answers to common endodontic questions."
        items={faqsForPatients} />
      <ParallaxSection imageSrc={smile}
        title="Endodontic Surgery in Fort Worth "
        description="Advanced microsurgical techniques for optimal tooth health."
        buttonText="Book an Appointment"
        buttonLink={"/contact"}/>

    </>

  )
}

export default EndodonticSurgeryPage