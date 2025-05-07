"use client"

import InsuranceSearch from '@/app/for-patients/components/Insurance-search'
import React from 'react'
import { usePathname } from 'next/navigation'

const InsuranceSection = () => {
  const pathname = usePathname()
  const isSpanish = pathname === '/endodoncista-de-habla-hispana'

  return (
    <section className="relative py-16 md:py-24">
      {/* Imagen de fondo con overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/images/family.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Título y subtítulo dinámicos */}
        <div className="text-center mb-8 space-y-8">
          <h2 className="text-white font-zen font-bold uppercase text-3xl md:text-5xl text-center">
            {isSpanish ? 'Aceptamos seguros dentales' : 'We accept insurance'}
          </h2>
          <p className="text-xl font-semibold font-inter text-center text-white md:text-2xl">
            {isSpanish
              ? 'Verifica si aceptamos tu plan de seguro dental.'
              : 'Check if we accept your dental insurance plan.'}
          </p>
        </div>

        <InsuranceSearch />

        <div className="text-center my-8">
          <a href="/contact" target="_blank" rel="noopener noreferrer">
            <button className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/75 ease-in duration-300">
              {isSpanish ? 'Agenda Cita' : 'Book An Appointment'}
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default InsuranceSection
