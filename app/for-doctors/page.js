import React from 'react'
import Hero from '../components/Hero'
import DrHorn from '@/public/images/about-us/DrHorn.webp'
import { trustDoctors } from '../data/TrustData'
import TrustDoctors from './components/TrustDoctors'
import ReferralProcess from './components/ReferralProcess'
import Testimonials from '../components/Testimonials'
import { testimonialsMain } from '../data/testimonials'

const DoctorsPage = () => {
  return (
    <>
      <Hero title="Your Trusted Endodontic Partner"
        subtitle="Seamless referrals and clear communication. Ensure the best outcomes for your patients."
        primaryButtonText="Book An Appointment"
        primaryButtonLink="/appointments"
        secondaryButtonText="Refer Now"
        secondaryButtonLink="/referrals"
        imageSrc={DrHorn}
        imageAlt="Dr. Neal Horn at Southside Endodontics" />
      <TrustDoctors cards={trustDoctors} />
      <ReferralProcess />
      <Testimonials data={testimonialsMain}
        title="What Our Patients and Referring Doctors Say"
        subtitle="We are proud to have earned the trust of our patients and referring doctors."
        showCTA={false} />
    </>

  )
}

export default DoctorsPage