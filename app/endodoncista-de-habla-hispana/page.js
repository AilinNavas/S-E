import React from 'react'
import Hero from '../components/Hero'
import DrHorn from '@/public/images/about-us/DrHorn.webp'
import { trustHablaHispana } from '../data/TrustData'
import ReferralProcess from '../for-doctors/components/ReferralProcess'
import Testimonials from '../components/Testimonials'
import { testimonialsMain } from '../data/testimonials'
import Faqs from '../components/Faqs'
import { faqsEnEspañol, faqsForDoctors } from '../data/faqsHome'
import ParallaxSection from '../components/ParallaxSection'
import drHorn from '@/public/images/about-us/Neal.webp'
import WhyTrustUs from '../procedures/components/WhyTrustUs'
import Services from '../components/home/Services'
import { servicios } from '../data/services'



const EndodoncistaHablaEspañolPage = () => {
  return (
    <>
      <Hero title="Endodoncista Que Habla Español en Fort Worth"
        subtitle="Atención endodontica en español para un tratamiento sin estrés y con confianza"
        primaryButtonText="Agendar Cita"
        primaryButtonLink="/appointments"
        secondaryButtonText="Referir Paciente"
        secondaryButtonLink="/referrals"
        imageSrc={DrHorn}
        imageAlt="Dr. Neal Horn at Southside Endodontics" />
      <WhyTrustUs cards={trustHablaHispana}
        title="¿Por Qué Elegir a un Endodoncista Que Habla Español?"
        subtitle="Recibir atención dental especializada en su idioma hace toda la diferencia"
        bgColor="bg-white"
        mdCols={3} />
      <Services title="Servicios Endodónticos"
        description="Tratamientos de conducto y más para mantener su sonrisa saludable."
        services={servicios}
        showAllLink={false} />
      <Testimonials data={testimonialsMain}
        title="Fort Worth dentists trust"
        subtitle="Real experiences working with Southside Endodontics."
        showCTA={false} />

      <Faqs title="Preguntas Frecuentes"
        description="Resuelve tus dudas sobre nuestros tratamientos endodónticos."
        items={faqsEnEspañol} />
      <ParallaxSection imageSrc={drHorn}
        title="Endodoncista Que Habla Español en Fort Worth"
        description="Atención endodontica en español para un tratamiento sin estrés."
        buttonText="Agendar Cita" />

    </>



  )
}

export default EndodoncistaHablaEspañolPage