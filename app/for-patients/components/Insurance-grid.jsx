"use client"

import { motion } from "framer-motion"
import { Check, Shield } from "lucide-react"

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

  // Get first letter or logo placeholder for each insurance
  const getInsuranceInitial = (name) => {
    const parts = name.split(" ")
    if (parts.length > 1 && parts[0].length <= 3) {
      return parts[0]
    }
    return name.charAt(0)
  }

  // Get a consistent color based on insurance name
  const getInsuranceColor = (name) => {
    const colors = [
      "rgba(60, 141, 188, 0.9)", // #3c8dbc with opacity
      "rgba(10, 42, 84, 0.9)", // #0a2a54 with opacity
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
                <Check size={16} style={{ color: "#3c8dbc" }} />
              </motion.div>
            </div>

            <div className="p-6 flex items-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold"
                style={{ backgroundColor: getInsuranceColor(insurance) }}
              >
                {getInsuranceInitial(insurance)}
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
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0 text-white font-bold text-sm"
                  style={{ backgroundColor: getInsuranceColor(insurance) }}
                >
                  {getInsuranceInitial(insurance)}
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
        <p style={{ color: "#5a6065" }}>
          Don't see your insurance listed? Contact us at{" "}
          <span className="font-bold" style={{ color: "#0a2a54" }}>
            555-123-4567
          </span>{" "}
          to verify your coverage.
        </p>
      </div>
    </div>
  )
}
