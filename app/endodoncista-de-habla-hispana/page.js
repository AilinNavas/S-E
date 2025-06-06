import React from 'react'
import Hero from '../components/Hero'
import DrHorn from '@/public/images/about-us/DrHorn.webp'
import { trustHablaHispana } from '../data/TrustData'
import Testimonials from '../components/Testimonials'
import { testimonialsInSpanish } from '../data/testimonials'
import Faqs from '../components/Faqs'
import { faqsEnEspañol } from '../data/faqsHome'
import ParallaxSection from '../components/ParallaxSection'
import drHorn from '@/public/images/about-us/Neal.webp'
import WhyTrustUs from '../procedures/components/WhyTrustUs'
import Services from '../components/home/Services'
import { servicios } from '../data/services'
import InsuranceSection from '../components/home/InsuranceSection'



const EndodoncistaHablaEspañolPage = () => {
  return (
    <>
      <Hero title="Endodoncista Que Habla Español en Fort Worth"
        subtitle="Atención endodontica en español para un tratamiento sin estrés y con confianza."
        primaryButtonText="Agendar Cita"
        primaryButtonLink="/contact"
        secondaryButtonText="Referir Paciente"
        secondaryButtonLink="https://securesite1246.tdo4endo.com/RefDocsLogin.aspx"
        imageSrc={DrHorn}
        imageAlt="Dr. Neal Horn at Southside Endodontics" />
      <WhyTrustUs cards={trustHablaHispana}
        title="¿Por Qué Elegir a un Endodoncista Que Habla Español?"
        subtitle="Recibir atención dental especializada en su idioma hace toda la diferencia."
        bgColor="bg-white"
        mdCols={3} />
      <InsuranceSection />
      <Services title="Servicios Endodónticos"
        subtitle="Ofrecemos una amplia gama de tratamientos de endodoncia."
        services={servicios}
        showAllLink={false} />
      <Testimonials data={testimonialsInSpanish}
        title="Comentarios de Pacientes"
        subtitle="Experiencias reales en Southside Endodontics."
        showCTA={false} />

      <Faqs title="Preguntas Frecuentes"
        description="Resuelve tus dudas sobre nuestros tratamientos endodónticos."
        items={faqsEnEspañol} />
      <ParallaxSection imageSrc={drHorn}
        title="Endodoncista Que Habla Español en Fort Worth"
        description="Atención endodontica en español para un tratamiento sin estrés."
        buttonText="Agendar Cita"
        buttonLink={'/contact'} />

    </>



  )
}

export default EndodoncistaHablaEspañolPage