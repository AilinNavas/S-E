'use client'
import React, { useEffect } from "react";
import Faqs from "./components/Faqs";
import Referring from "./components/home/Referring";
import Services from "./components/home/Services";
import Technology from "./components/home/Technology";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/home/WhyUs";
import Hero from "./components/Hero";
import AboutUs from "./components/home/AboutUs";
import {FaqsHome }  from "./data/faqsHome";
import ParallaxSection from "./components/ParallaxSection";
import { testimonialsMain, testimonialsForServices } from "./data/testimonials";
import DrHorn from '@/public/images/about-us/Neal.webp'
import officeParallax from '@/public/images/about-us/office2.webp'

export default function Home() {
    // Asegurar que la página comienza en la parte superior al cargar
    useEffect(() => {
      // Restaurar la posición de scroll al inicio de la página
      window.scrollTo(0, 0)
    }, [])
  

  return (
    <>
      {/* <NavbarMobile />
      <NavbarPC /> */}
      <Hero
      title="sOUTHSIDE ENDODONTICS"
      subtitle="We make your experience as seamless and comfortable as possible"
      primaryButtonText="Book An Appointment"
      primaryButtonLink="/appointments"
      secondaryButtonText="Refer Now"
      secondaryButtonLink="/referrals"
      imageSrc={DrHorn}
      imageAlt="Dr. Neal Horn at Southside Endodontics"
     />
      <AboutUs />
      <WhyUs />
      <Testimonials data={testimonialsMain}
        title="What Our Patients and Referring Doctors Say"
        subtitle="We are proud to have earned the trust of our patients and referring doctors."
        showCTA={false} />
      <Services />
      <Referring />
      <Testimonials data={testimonialsForServices}
        title=" What People Are Saying About us"
        subtitle="We're grateful for the trust and kind words from our patients and partners."
        showCTA={true} />
      <Technology />
      <ParallaxSection
      imageSrc={officeParallax}
      title="Save Your Teeth"
      description="Schedule your consultation and transform your dental health."
      buttonText="Book an Appointment"
    />
       <Faqs title="Frequently Asked Questions"
        description="Find answers to common questions about endodontic treatments and our practice."
        items={FaqsHome} />
    
    </>
    
  );
}
