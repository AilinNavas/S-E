
"use client"

import InsuranceSearch from "@/app/for-patients/components/Insurance-search"
import { useRef, useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"

const InsuranceSection = () => {
  const pathname = usePathname()
  const isSpanish = pathname === "/endodoncista-de-habla-hispana"
  const sectionRef = useRef(null)

  // Estado para controlar la altura del contenedor de la imagen
  const [containerHeight, setContainerHeight] = useState(0)

  // Detectar si estamos en un dispositivo móvil para ajustar la intensidad
  const [isMobile, setIsMobile] = useState(false)

  // Efecto para calcular y actualizar la altura necesaria del contenedor
  useEffect(() => {
    const updateHeight = () => {
      if (sectionRef.current) {
        // Aumentamos significativamente la altura para permitir un efecto más pronunciado
        const sectionHeight = sectionRef.current.offsetHeight
        setContainerHeight(sectionHeight * 2) // 100% más alto que la sección

        // Detectar si estamos en móvil
        setIsMobile(window.innerWidth < 768)
      }
    }

    // Actualizar al cargar y al cambiar el tamaño de la ventana
    updateHeight()
    window.addEventListener("resize", updateHeight)

    return () => {
      window.removeEventListener("resize", updateHeight)
    }
  }, [])

  // Configuración del efecto parallax con offset ampliado para iniciar el efecto antes
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Valores de transformación mucho más pronunciados
  // Ajustamos la intensidad según el dispositivo
  const parallaxIntensity = isMobile ? 60 : 80 // Porcentaje de movimiento

  // Transformación para el efecto parallax - valores aumentados significativamente
  const y = useTransform(scrollYProgress, [0, 1], [`-${parallaxIntensity / 2}%`, `${parallaxIntensity / 2}%`])

  // Añadimos una transformación de escala para hacer el efecto aún más notorio
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.15, 1.2])

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      {/* Contenedor de la imagen con efecto parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute w-full"
          style={{
            y,
            scale,
            height: containerHeight || "200%", // Altura dinámica o fallback
            top: `-${parallaxIntensity / 2}%`, // Posicionamos más arriba para evitar espacios en blanco
            left: 0,
            right: 0,
            willChange: "transform",
          }}
        >
          {/* Imagen de fondo */}
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/family.webp')",
            }}
          />
        </motion.div>

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Título y subtítulo dinámicos */}
        <div className="text-center mb-8 space-y-8">
          <h2 className="text-white font-zen font-bold uppercase text-3xl md:text-5xl text-center">
            {isSpanish ? "Aceptamos seguros dentales" : "We accept insurance"}
          </h2>
          <p className="text-xl font-semibold font-inter text-center text-white md:text-2xl">
            {isSpanish
              ? "Verifica si aceptamos tu plan de seguro dental."
              : "Check if we accept your dental insurance plan."}
          </p>
        </div>

        <InsuranceSearch />

        <div className="text-center my-8">
          <a href="/contact" target="_blank" rel="noopener noreferrer">
            <button className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/75 ease-in duration-300">
              {isSpanish ? "Agendar Cita" : "Book An Appointment"}
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default InsuranceSection
