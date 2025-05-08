
"use client"

import { motion } from "framer-motion"
import { Check, Shield } from 'lucide-react'
import Image from "next/image"

export default function InsuranceGrid() {
  const insurances = [
    "Aetna PPO",
    "Ameritas PPO",
    "Always Care/UNUM",
    "BCBS",
    "Careington",
    "Cigna PPO",
    "Delta Dental",
    "Delta Care",
    "GEHA",
    "Guardian PPO",
    "Humana PPO",
    "Metlife",
    "Principal PPO",
    "United Healthcare PPO",
    "Unicare",
  ]

  // Mapeo de seguros a sus logos
  const insuranceLogos = {
    "Aetna PPO": "/images/logo-insurance/1.webp",
    "Ameritas PPO": "/images/logo-insurance/2.webp",
    "Always Care/UNUM": "/images/logo-insurance/3.webp",
    "BCBS": "/images/logo-insurance/4.webp",
    "Careington": "/images/logo-insurance/5.webp",
    "Cigna PPO": "/images/logo-insurance/6.webp",
    "Delta Dental": "/images/logo-insurance/7.webp",
    "Delta Care": "/images/logo-insurance/8.webp",
    "GEHA": "/images/logo-insurance/9.webp",
    "Guardian PPO": "/images/logo-insurance/10.webp",
    "Humana PPO": "/images/logo-insurance/11.webp",
    "Metlife": "/images/logo-insurance/12.webp",
    "Principal PPO": "/images/logo-insurance/13.webp",
    "United Healthcare PPO": "/images/logo-insurance/14.webp",
    "Unicare": "/images/logo-insurance/15.webp",
  }

  // Función para obtener el logo del seguro o un fallback
  const getInsuranceLogo = (name) => {
    return insuranceLogos[name] || `/images/insurance-logos/default.svg`
  }

  // Get a consistent color based on insurance name (para el borde en móvil)
  const getInsuranceColor = (name) => {
    const colors = [
      "rgba(60, 141, 188, 0.9)", // #3c8dbc with opacity
    ]

    const index = name.length % colors.length
    return colors[index]
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <div className="w-full mx-auto py-8">
      {/* Desktop Grid View (lg screens and up) */}
      <motion.div variants={container} initial="hidden" animate="show" className="hidden lg:grid lg:grid-cols-4 gap-4">
        {insurances.map((insurance, index) => (
          <motion.div
            key={`grid-${index}`}
            variants={item}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            className="relative rounded-xl overflow-hidden"
            style={{ backgroundColor: "#ffffff" }}
          >
            <div className="absolute top-0 right-0 p-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="bg-white rounded-full p-1 shadow-md"
              >
                <Check size={16} style={{ color: "#267E60" }} />
              </motion.div>
            </div>

            <div className="p-6 flex items-center">
              {/* Logo del seguro en lugar del círculo con iniciales */}
              <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0  border border-gray-100 overflow-hidden p-1">
                {/* Fallback para logos que no existan */}
                <div className="relative w-full h-full">
                  <Image
                    src={getInsuranceLogo(insurance) || "/placeholder.svg"}
                    alt={`${insurance} logo`}
                    fill
                    sizes="48px"
                    className="object-fill "
                    onError={(e) => {
                      // Si la imagen falla, mostrar un fallback con las iniciales
                      e.currentTarget.style.display = "none"
                      e.currentTarget.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-[${getInsuranceColor(
                        insurance
                      )}] text-white font-bold text-sm">${insurance.charAt(0)}</div>`
                    }}
                  />
                </div>
              </div>

              <div>
                <h3 className="font-medium" style={{ color: "#0a2a54" }}>
                  {insurance}
                </h3>
                <p className="text-sm" style={{ color: "#5a6065" }}>
                  Accepted
                </p>
              </div>
            </div>

            <div
              className="py-2 px-6 text-xs flex items-center justify-end"
              style={{ backgroundColor: "rgba(252, 253, 253, 0.7)" }}
            >
              <Shield size={12} className="mr-1" style={{ color: "#3c8dbc" }} />
              <span style={{ color: "#5a6065" }}>In-Network Provider</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile and Tablet List View (below lg screens) */}
      <motion.div variants={container} initial="hidden" animate="show" className="lg:hidden space-y-3">
        {insurances.map((insurance, index) => (
          <motion.div
            key={`list-${index}`}
            variants={item}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
            className="relative rounded-lg overflow-hidden border-l-4"
            style={{
              backgroundColor: "#ffffff",
              borderLeftColor: getInsuranceColor(insurance),
            }}
          >
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center">
                {/* Logo del seguro en lugar del círculo con iniciales (versión móvil) */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 bg-gray-50 border border-gray-100 overflow-hidden p-1">
                  <div className="relative w-full h-full">
                    <Image
                      src={getInsuranceLogo(insurance) || "/placeholder.svg"}
                      alt={`${insurance} logo`}
                      fill
                      sizes="40px"
                      className="object-contain"
                      onError={(e) => {
                        // Si la imagen falla, mostrar un fallback con las iniciales
                        e.currentTarget.style.display = "none"
                        e.currentTarget.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-[${getInsuranceColor(
                          insurance
                        )}] text-white font-bold text-sm">${insurance.charAt(0)}</div>`
                      }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium" style={{ color: "#0a2a54" }}>
                    {insurance}
                  </h3>
                </div>
              </div>

              <div className="flex items-center">
                <span className="text-xs mr-2 hidden sm:inline" style={{ color: "#5a6065" }}>
                  In-Network
                </span>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 + index * 0.03 }}
                  className="bg-white rounded-full p-1 shadow-sm"
                  style={{ backgroundColor: "rgba(60, 141, 188, 0.1)" }}
                >
                  <Check size={16} style={{ color: "#3c8dbc" }} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 p-4 rounded-lg text-center" style={{ backgroundColor: "rgba(60, 141, 188, 0.1)" }}>
        <a href="tel:+8173869007"><p style={{ color: "#5a6065" }}>
          Don't see your insurance listed? Contact us at{" "}
          <span className="font-bold" style={{ color: "#3c8dbc" }}>
          817-386-9007
          </span>{" "}
          to verify your coverage.
        </p></a>
      </div>
    </div>
  )
}
