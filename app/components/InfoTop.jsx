"use client"
import { useState, useEffect } from "react"
import { Phone, MapPin, Clock, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Link from "next/link"

const InfoTop = () => {
  const pathname = usePathname()
  const isSpanishPage = pathname.includes("/endodoncista-de-habla-hispana")
  const [isScrolled, setIsScrolled] = useState(false)
        if (pathname.startsWith("/secure-pay")) return null

  // Detectar scroll para cambiar la apariencia
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-1 bg-[#0a2a54]/95 backdrop-blur-md" : "py-2 bg-[#0a2a54]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Información de contacto */}
          <div className="flex items-center space-x-6 text-white">
            {/* Dirección */}
            <Link href="https://maps.app.goo.gl/xx2i9XrdQaAjtDbW7" target="_blank" rel="noopener noreferrer" aria-label="Click to view location on Google Maps (opens in a new tab)">
              <motion.div
                className="flex items-center cursor-pointer group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MapPin className="h-4 w-4 mr-2 text-[#3c8dbc] group-hover:text-white transition-colors duration-300" />
                <span className="text-sm font-inter">1307 8th Avenue, Suite 303, Fort Worth, TX 76104</span>
                <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </Link>

            {/* Separador vertical - solo visible en pantallas medianas y grandes */}
            <div className="hidden md:block h-4 w-px bg-white/30"></div>

            {/* Teléfono */}
            <a href="tel:+8173869007">
              <motion.div
                className="flex items-center cursor-pointer group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="h-4 w-4 mr-2 text-[#3c8dbc] group-hover:text-white transition-colors duration-300" />
                <span className="text-sm font-inter">817-386-9007</span>
                <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </a>
          </div>

          {/* Horario - Solo visible en pantallas medianas y grandes */}
          <div className="hidden md:flex items-center text-white mt-2 sm:mt-0">
            <Clock className="h-4 w-4 mr-2 text-[#3c8dbc]" />
            <span className="text-sm font-inter">
              {isSpanishPage ? "Lun-Jue: 8am-5pm" : "Mon-Thu: 8am-5pm"} |{" "}
              {isSpanishPage ? "Vie-Dom: Cerrado" : "Fri-Sun: Closed"}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoTop