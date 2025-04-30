import Hero from '@/app/components/Hero'
import WhatIs from '../components/WhatIs'
import Symptoms from '../components/Symptoms'
import TreatmentProcess from '../components/TreatmentProcess'
import WhyTrustUs from '../components/WhyTrustUs'
import Testimonials from '@/app/components/Testimonials'
import Faqs from '@/app/components/Faqs'
import ParallaxSection from '@/app/components/ParallaxSection'
import DrHorn from '@/public/images/about-us/DrHorn.webp'

const RootCanalPage = () => {
  return (

    <>
      <Hero title="Pain-Free Root Canal Therapy in Fort Worth"
                      subtitle="A root canal can save your tooth and relieve discomfort"
                      primaryButtonText="Book An Appointment"
                      primaryButtonLink="/appointments"
                      secondaryButtonText="Emergency Care"
                      secondaryButtonLink="/"
                      imageSrc={DrHorn}
                      imageAlt="Dr. Neal Horn at Southside Endodontics" />
      <WhatIs />
      <Symptoms />
      <TreatmentProcess />
      <WhyTrustUs />
      <Testimonials />
      <Faqs />
      <ParallaxSection />

    </>



  )
}

export default RootCanalPage