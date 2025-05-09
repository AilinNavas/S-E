
"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"

const ParallaxSection = ({
  imageSrc,
  title,
  description,
  buttonText,
  buttonLink,
  overlayOpacity = 0.6, // Valor por defecto, permite personalización
  parallaxIntensity = 0.4, // Controla la intensidad del efecto parallax
}) => {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  // Detectar si estamos en un dispositivo móvil para ajustar el efecto parallax
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Ajustar la intensidad del parallax según el dispositivo
  const parallaxRange = isMobile
    ? [`-${parallaxIntensity * 100 * 0.5}%`, `${parallaxIntensity * 100 * 0.5}%`]
    : [`-${parallaxIntensity * 100}%`, `${parallaxIntensity * 100}%`]

  const y = useTransform(scrollYProgress, [0, 1], parallaxRange)

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        height: isMobile ? "70vh" : "90vh",
        minHeight: isMobile ? "500px" : "600px",
      }}
    >
      {/* Contenedor de la imagen con tamaño extra para evitar espacios en blanco */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Imagen con efecto parallax */}
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] will-change-transform">
          <div className="relative w-full h-full">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title || "Parallax background"}
              fill
              sizes="100vw"
              quality={90}
              className="object-cover object-center"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Capa oscura encima con opacidad personalizable */}
      <div className="absolute inset-0 bg-black z-10" style={{ opacity: overlayOpacity }} />

      {/* Contenido */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          {title && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 font-zen uppercase tracking-wide">
              {title}
            </h2>
          )}

          {description && (
            <p className="max-w-4xl mx-auto font-inter mb-6 sm:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white/90">
              {description}
            </p>
          )}

          {buttonText && buttonLink && (
            <div className="mt-2 sm:mt-4">
              <a
                href={buttonLink}
                className="inline-block cursor-pointer rounded-md px-5 py-2.5 text-base sm:text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/75 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                {buttonText}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ParallaxSection