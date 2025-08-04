
// const Referring2 = () => {

//     const benefits = [
//         {

//             title: "Timely, Custom Reports",
//             subtitle: "Tailored reports for each patient with quick updates.",
//         },
//         {

//             title: "Seamless Communication",
//             subtitle: "We ensure that you are always up-to-date with your patient's treatment progress.",
//         },
//         {

//             title: "Efficient, HIPAA-Compliant Process",
//             subtitle: "Minimize paperwork and administrative overhead.",
//         },

//     ]

//     return (
//         <section className="relative py-16 md:py-24">
//             {/* Imagen de fondo con overlay */}
//             <div
//                 className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
//                 style={{
//                     backgroundImage: "url('/images/refer-section/refering-1.webp')",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                 }}
//             >
//                 <div className="absolute inset-0 bg-black/80"></div>
//             </div>

//             {/* Contenido */}
//             <div className="max-w-7xl mx-auto px-4 relative z-10">
//                 {/* Título y subtítulo dinámicos */}
//                 <div className="text-center mb-8 space-y-8">
//                     <h2 className="text-white font-zen font-bold uppercase text-3xl md:text-5xl text-center">For Referring Doctors</h2>
//                     <p className="text-xl font-semibold font-inter text-center text-white md:text-2xl">Let us help your patients get the best care possible.</p>
//                 </div>

//                 {/* Síntomas dinámicos */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-inter">
//                     {benefits.map((benefit, index) => (
//                         <div
//                             key={index}
//                             className="backdrop-blur-sm border border-white/20 rounded-lg p-6 transition-all duration-300 hover:bg-white/25 hover:transform hover:-translate-y-1 hover:shadow-lg"
//                         >
//                             <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
//                             <p className="text-gray-200">{benefit.subtitle}</p>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="text-center my-8">
//                     <a href="https://securesite1246.tdo4endo.com/RefDocsLogin.aspx" target="_blank" rel="noopener noreferrer">
//                         <button className="cursor-pointer text-[#3c8dbc] border-2 border-[#3c8dbc] px-6 py-2 font-inter text-lg font-semibold rounded-md hover:bg-[#3c8dbc]/20 ease-in-out duration-300">
//                             Refer a Patient
//                         </button>
//                     </a>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Referring2
"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const Referring2 = () => {
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

  // Configuración del efecto parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Valores de transformación para un efecto notorio
  const parallaxIntensity = isMobile ? 60 : 80 // Porcentaje de movimiento

  // Transformación para el efecto parallax
  const y = useTransform(scrollYProgress, [0, 1], [`-${parallaxIntensity / 2}%`, `${parallaxIntensity / 2}%`])

  // Añadimos una transformación de escala para hacer el efecto aún más notorio
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.15, 1.2])

  const benefits = [
    {
      title: "Timely, Custom Reports",
      subtitle: "Tailored reports for each patient with quick updates.",
    },
    {
      title: "Seamless Communication",
      subtitle: "We ensure that you are always up-to-date with your patient's treatment progress.",
    },
    {
      title: "Efficient, HIPAA-Compliant Process",
      subtitle: "Minimize paperwork and administrative overhead.",
    },
  ]

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
              backgroundImage: "url('/images/refer-section/refering-1.webp')",
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
            For Referring Doctors
          </h2>
          <h3 className="text-xl font-semibold font-inter text-center text-white md:text-2xl">
            Let us help your patients get the best care possible.
          </h3>
        </div>

        {/* Síntomas dinámicos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-inter">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="backdrop-blur-sm border border-white/20 rounded-lg p-6 transition-all duration-300 hover:bg-white/25 hover:transform hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-200">{benefit.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="text-center my-8">
          <a href="https://securesite1246.tdo4endo.com/RefDocsLogin.aspx" target="_blank" rel="noopener noreferrer" aria-label="Click to refer patient (opens in a new tab)">
            <button className="cursor-pointer text-[#3c8dbc] border-2 border-[#3c8dbc] px-6 py-2 font-inter text-lg font-semibold rounded-md hover:bg-[#3c8dbc]/20 ease-in-out duration-300">
              Refer a Patient
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Referring2
