"use client"

import { motion } from "framer-motion"
import { Check, Shield } from "lucide-react"
import Image from "next/image"

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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
}

const InsuranceCard = ({ insurance, index }) => (
  <motion.div
    key={index}
    variants={itemVariants}
    whileHover={{
      scale: 1.03,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    }}
    className="relative rounded-xl overflow-hidden bg-white"
  >
    <div className="absolute top-0 right-0 p-2">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 + index * 0.05 }}
        className="rounded-full p-1 shadow-sm bg-[rgba(60,141,188,0.1)]"
      >
        <Check size={16} className="text-[#3c8dbc]" />
      </motion.div>
    </div>

    <div className="p-6 flex items-center">
      <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 border border-gray-100 overflow-hidden p-1">
        <div className="relative w-full h-full">
          <Image
            src={insuranceLogos[insurance]}
            alt={`${insurance} logo`}
            fill
            sizes="48px"
            className="object-contain"
          />
        </div>
      </div>
      <div>
        <h3 className="font-medium text-[#0a2a54]">{insurance}</h3>
        <p className="text-sm text-[#5a6065]">Accepted</p>
      </div>
    </div>

    <div className="py-2 px-6 text-xs flex items-center justify-end bg-[rgba(252,253,253,0.7)]">
      <Shield size={12} className="mr-1 text-[#3c8dbc]" />
      <span className="text-[#5a6065]">In-Network Provider</span>
    </div>
  </motion.div>
)

const InsuranceListItem = ({ insurance, index }) => (
  <motion.div
    key={index}
    variants={itemVariants}
    whileHover={{
      scale: 1.01,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    }}
    className="relative rounded-lg overflow-hidden border-l-4 border-[#3c8dbc] bg-white"
  >
    <div className="p-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 bg-gray-50 border border-gray-100 overflow-hidden p-1">
          <div className="relative w-full h-full">
            <Image
              src={insuranceLogos[insurance]}
              alt={`${insurance} logo`}
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
        </div>
        <h3 className="font-medium text-[#0a2a54]">{insurance}</h3>
      </div>
      <div className="flex items-center">
        <span className="text-xs mr-2 hidden sm:inline text-[#5a6065]">In-Network</span>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 + index * 0.03 }}
          className="rounded-full p-1 shadow-sm bg-[rgba(60,141,188,0.1)]"
        >
          <Check size={16} className="text-[#3c8dbc]" />
        </motion.div>
      </div>
    </div>
  </motion.div>
)

export default function InsuranceGrid() {
  return (
    <div className="w-full mx-auto py-8">
      {/* Desktop */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="hidden lg:grid lg:grid-cols-4 gap-4"
      >
        {insurances.map((insurance, index) => (
          <InsuranceCard key={index} insurance={insurance} index={index} />
        ))}
      </motion.div>

      {/* Mobile/Tablet */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="lg:hidden space-y-3"
      >
        {insurances.map((insurance, index) => (
          <InsuranceListItem key={index} insurance={insurance} index={index} />
        ))}
      </motion.div>

      <div className="mt-10 p-4 rounded-lg text-center bg-[rgba(60,141,188,0.1)]">
        <a href="tel:+8173869007">
          <p className="text-[#5a6065]">
            Don’t see your insurance listed? Contact us at{" "}
            <span className="font-bold text-[#3c8dbc]">817-386-9007</span> to verify your coverage.
          </p>
        </a>
      </div>
    </div>
  )
}
