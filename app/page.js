'use client'
import React, { useEffect } from "react";
import Faqs from "./components/Faqs";
import Services from "./components/home/Services";
import Technology from "./components/home/Technology";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/home/WhyUs";
import Hero from "./components/Hero";
import AboutUs from "./components/home/AboutUs";
import { FaqsHome } from "./data/faqsHome";
import ParallaxSection from "./components/ParallaxSection";
import { testimonialsMain, testimonialsForServices } from "./data/testimonials";
import DrHorn from '@/public/images/about-us/Neal.webp'
import smile from '@/public/images/smile.webp'
import { services } from "./data/services";
import Referring2 from "./components/home/Referring2";

export default function Home() {
  // Asegurar que la página comienza en la parte superior al cargar
  useEffect(() => {
    // Restaurar la posición de scroll al inicio de la página
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
     
      <Hero
        title="SOUTHSIDE ENDODONTICS"
        subtitle="We make your experience as seamless and comfortable as possible."
        primaryButtonText="Book An Appointment"
        primaryButtonLink="/contact"
        secondaryButtonText="Refer Now"
        secondaryButtonLink="https://securesite1246.tdo4endo.com/RefDocsLogin.aspx"
        imageSrc={DrHorn}
        imageAlt="Dr. Neal Horn at Southside Endodontics"
      />
      <AboutUs />
      <WhyUs />
      <Testimonials data={testimonialsMain}
        title="What Our Patients Say"
        subtitle="We are proud to have earned the trust of our patients and referring doctors."
        showCTA={false} />
      <Services
        title="Our Endodontic Procedures"
        subtitle="We offer a comprehensive range of endodontic treatments."
        services={services}
        showButton={true} // o false si no quieres mostrar el botón
        buttonText="See All Procedures" // opcional, puedes personalizarlo
        buttonLink="/procedures" // opcional, puedes cambiar el link
      />
      <Referring2 />
   
      <Technology />

      <Testimonials data={testimonialsForServices}
        title="Painless Experience"
        subtitle="We're grateful for the trust and kind words from our patients and partners."
        showCTA={true} />

<ParallaxSection
        imageSrc={smile}
        title="SOUTHSIDE ENDODONTICS FORT WORTH, TX"
        description="We make your experience as seamless and comfortable as possible."
        buttonText="Book an Appointment"
        buttonLink={"/contact"}
      />
      <Faqs title="Frequently Asked Questions"
        description="Find answers to common questions about endodontic treatments and our practice."
        items={FaqsHome} />

    </>

  );
}
