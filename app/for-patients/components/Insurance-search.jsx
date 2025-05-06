"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search } from "lucide-react"

export default function InsuranceSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState([])
  const [message, setMessage] = useState("")
  const [showResults, setShowResults] = useState(false)

  // List of accepted insurances
  const acceptedInsurances = [
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

  useEffect(() => {
    if (searchTerm.length > 1) {
      const filteredResults = acceptedInsurances.filter((insurance) =>
        insurance.toLowerCase().includes(searchTerm.toLowerCase()),
      )

      setResults(filteredResults)
      setShowResults(true)

      if (filteredResults.length > 0) {
        setMessage("Great news! We accept the following insurance plans:")
      } else {
        setMessage("We couldn't find an exact match for your insurance. Please call our office for more information.")
      }
    } else {
      setShowResults(false)
      setResults([])
      setMessage("")
    }
  }, [searchTerm])

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6 rounded-lg shadow-lg z-50" style={{ backgroundColor: "#fcfdfd" }}>
      {/* <h2 className="text-2xl font-bold mb-4" style={{ color: "#0a2a54" }}>
        Insurance Verification
      </h2>
      <p className="mb-6" style={{ color: "#5a6065" }}>
        Check if we accept your dental insurance plan
      </p> */}

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5" style={{ color: "#3c8dbc" }} />
        </div>
        <input
          type="text"
          className="w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-opacity-50"
          placeholder="Type your insurance name..."
          value={searchTerm}
          onChange={handleInputChange}
          style={{
            borderColor: "#3c8dbc",
            backgroundColor: "#ffffff",
            color: "#5a6065",
            focusRingColor: "#3c8dbc",
          }}
        />
      </div>

      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 overflow-hidden"
          >
            <div
              className="p-4 rounded-lg"
              style={{
                backgroundColor: results.length > 0 ? "rgba(60, 141, 188, 0.1)" : "rgba(90, 96, 101, 0.1)",
              }}
            >
              <p
                className="font-medium mb-3 font-inter"
                style={{
                  color: results.length > 0 ? "#3c8dbc" : "#5a6065",
                }}
              >
                {message}
              </p>

              {results.length > 0 && (
                <ul className="space-y-2">
                  {results.map((insurance, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center p-2 rounded-md font-inter"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        className="mr-2 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#3c8dbc" }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="#ffffff">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                      <span style={{ color: "#0a2a54" }}>{insurance}</span>
                    </motion.li>
                  ))}
                </ul>
              )}

              {results.length === 0 && searchTerm.length > 1 && (
                <div className="text-center py-2">
                  <p className="text-sm" style={{ color: "#5a6065" }}>
                    Please call our office at{" "}
                    <span className="font-bold" style={{ color: "#3c8dbc" }}>
                    817-386-9007
                    </span>{" "}
                    for more information about your specific insurance plan.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-6 text-sm" style={{ color: "#B3BBC1" }}>
        We accept many insurance plans. If you don't see yours listed, please contact us directly.
      </div>
    </div>
  )
}