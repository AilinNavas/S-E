
"use client"

import { usePathname } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"

const clinicData = {
  name: "Southside Endodontics",
  doctor: "Dr. Neal Horn",
  doctorImage: "/images/about-us/Neal.webp",
  mapImage: "/images/static-map.webp",
  address: "1307 8th Ave #303, Fort Worth, TX 76104, Estados Unidos",
  phone: "+18173869007",
}

export default function DentalClinicMapStatic() {
  const pathname = usePathname()

  const handleDirectionsClick = () => {
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      clinicData.address
    )}`
    window.open(mapsUrl, "_blank")
  }

  return (
    <div
      className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-md border border-gray-200"
      id="map-section"
    >
      {/* Imagen estática del mapa */}
      <Image
        src={clinicData.mapImage}
        alt="Map"
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
        priority
      />

      {/* Popup animado con efecto flotante */}
      <motion.div
        className="absolute left-6 bottom-6 bg-white rounded-md shadow-lg p-4 w-[250px] z-10"
        animate={{
          y: [0, -4, 0],
      
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-col items-center">
          <Image
            src={clinicData.doctorImage}
            alt={clinicData.doctor}
            width={48}
            height={48}
            className="rounded-full mb-2 object-cover"
          />
          <h3 className="font-bold text-sm mb-1 font-zen text-center">
            {clinicData.name}
          </h3>
          <p className="text-xs text-gray-600 mb-3 font-inter text-center">
            {clinicData.doctor}
          </p>
          <button
            onClick={handleDirectionsClick}
            className="bg-[#0a2a54] hover:bg-transparent border border-[#0a2a54] text-white hover:text-[#0a2a54] text-xs py-1 px-3 rounded-md transition-colors duration-300 font-inter"
          >
            {pathname === "/endodoncista-de-habla-hispana"
              ? "Ir a la clínica"
              : "Go to the office"}
          </button>
        </div>
      </motion.div>
    </div>
  )
}
