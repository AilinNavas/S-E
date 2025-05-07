import React from 'react'
import Hero from '../components/Hero'
import DrHorn from '@/public/images/about-us/DrHorn.webp'
import { trustDoctors, trustSpeakingSpanish } from '../data/TrustData'
import ReferralProcess from '../for-doctors/components/ReferralProcess'
import Testimonials from '../components/Testimonials'
import { testimonialsMain } from '../data/testimonials'
import Faqs from '../components/Faqs'
import { faqsForDoctors } from '../data/faqsHome'
import ParallaxSection from '../components/ParallaxSection'
import drHorn from '@/public/images/about-us/Neal.webp'
import WhyTrustUs from '../procedures/components/WhyTrustUs'
import InsuranceSection from '../components/home/InsuranceSection'



const SpanishSpeakingEndodontistPage = () => {
  return (
    <>
      <Hero title="Spanish-Speaking Endodontist in Fort Worth"
        subtitle="Endodontic care for spanish-speaking patients with seamless communication."
        primaryButtonText="Book An Appointment"
        primaryButtonLink="/contact"
        secondaryButtonText="Refer Now"
        secondaryButtonLink="https://securesite1246.tdo4endo.com/RefDocsLogin.aspx"
        imageSrc={DrHorn}
        imageAlt="Dr. Neal Horn at Southside Endodontics" />
      <WhyTrustUs cards={trustSpeakingSpanish}
        title="Why Choose a Spanish-Speaking Endodontist"
        subtitle="Refer your Spanish-speaking patients to a bilingual specialist for a better experience."
        bgColor="bg-white"
        mdCols={3} />
        <InsuranceSection />
      <ReferralProcess />
      <Testimonials data={testimonialsMain}
        title="Fort Worth dentists trust"
        subtitle="Real experiences working with Southside Endodontics."
        showCTA={false} />

      <Faqs title="Frequently Asked Questions"
        description="What referring dentists need to know."
        items={faqsForDoctors} />
      <ParallaxSection imageSrc={drHorn}
        title="Your Trusted Endodontic Partner"
        description="Endodontic care for spanish-speaking patients with seamless communication."
        buttonText="Refer Now"
        buttonLink={"https://securesite1246.tdo4endo.com/RefDocsLogin.aspx"} />

    </>



  )
}

export default SpanishSpeakingEndodontistPage