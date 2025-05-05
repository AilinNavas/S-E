import React from 'react'
import Hero from '../components/Hero'
import DrHorn from '@/public/images/about-us/DrHorn.webp'
import { trustDoctors } from '../data/TrustData'
import ReferralProcess from './components/ReferralProcess'
import Testimonials from '../components/Testimonials'
import { testimonialsForDoctors3 } from '../data/testimonials'
import Faqs from '../components/Faqs'
import { faqsForDoctors } from '../data/faqsHome'
import ParallaxSection from '../components/ParallaxSection'
import drHorn from '@/public/images/about-us/Neal.webp'
import WhyTrustUs from '../procedures/components/WhyTrustUs'



const DoctorsPage = () => {
  return (
    <>
      <Hero title="Your Trusted Endodontic Partner"
        subtitle="Seamless referrals and clear communication. Ensure the best outcomes for your patients."
        primaryButtonText="Refer Now"
        primaryButtonLink="https://securesite1246.tdo4endo.com/RefDocsLogin.aspx"
        secondaryButtonText="Call Us"
        secondaryButtonLink="tel:+8173869007"
        imageSrc={DrHorn}
        imageAlt="Dr. Neal Horn at Southside Endodontics" />
      <WhyTrustUs cards={trustDoctors}
        title="Why Dentists Trust Southside Endodontics"
        subtitle="Trusted care and easy collaboration, every step of the way."
        bgColor="bg-white"
        mdCols={3} />
      <ReferralProcess />
      <Testimonials data={testimonialsForDoctors3}
        title="Fort Worth dentists trust"
        subtitle="Real experiences working with Southside Endodontics."
        showCTA={true} />

      <Faqs title="Frequently Asked Questions"
        description="What referring dentists need to know."
        items={faqsForDoctors} />
      <ParallaxSection imageSrc={drHorn}
        title="Your Trusted Endodontic Partner"
        description="Seamless referrals and clear communication."
        buttonText="Refer Now" />

    </>



  )
}

export default DoctorsPage