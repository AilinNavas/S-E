import React from 'react'
import Hero from '../components/Hero'
import DrHorn from '@/public/images/about-us/DrHorn.webp'

const DoctorsPage = () => {
  return (
    <>
      <Hero title="Your Trusted Endodontic Partner for Exceptional Patient Care"
        subtitle="Seamless referrals, superior care, and clear communication—ensuring the best outcomes for your patients."
        primaryButtonText="Book An Appointment"
        primaryButtonLink="/appointments"
        secondaryButtonText="Refer Now"
        secondaryButtonLink="/referrals"
        imageSrc={DrHorn}
        imageAlt="Dr. Neal Horn at Southside Endodontics" />

    </>
  )
}

export default DoctorsPage