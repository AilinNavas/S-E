
"use client"

import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Symptoms({ title, subtitle, symptoms }) {
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
        setContainerHeight(sectionHeight * 2.2) // 120% más alto que la sección para un efecto más extremo

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

  // Configuración del efecto parallax con offset ampliado
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Valores de transformación para un efecto muy notorio
  const parallaxIntensity = isMobile ? 70 : 100 // Porcentaje de movimiento (aumentado para mayor efecto)

  // Transformación para el efecto parallax - valores aumentados significativamente
  const y = useTransform(scrollYProgress, [0, 1], [`-${parallaxIntensity / 2}%`, `${parallaxIntensity / 2}%`])

  // Añadimos una transformación de escala para hacer el efecto aún más notorio
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.2, 1.25])

  // Añadimos una transformación de rotación sutil para un efecto más dinámico
  const rotate = useTransform(scrollYProgress, [0, 1], ["-1deg", "1deg"])

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      {/* Contenedor de la imagen con efecto parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute w-full"
          style={{
            y,
            scale,
            rotate,
            height: containerHeight || "220%", // Altura dinámica o fallback
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
              backgroundImage: "url('/images/about-us/before.webp')",
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
          <h2 className="text-white font-zen font-bold uppercase text-3xl md:text-5xl text-center">{title}</h2>
          <h3 className="text-xl font-semibold font-inter text-center text-white md:text-2xl">{subtitle}</h3>
        </div>

        {/* Síntomas dinámicos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-inter">
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className="backdrop-blur-sm border border-white/20 rounded-lg p-6 transition-all duration-300 hover:bg-white/25 hover:transform hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{symptom.title}</h3>
              <p className="text-gray-200">{symptom.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="text-center my-8">
          <Link href="/contact">
            <button className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/90 ease-in duration-300">
              Book An Appointment
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
