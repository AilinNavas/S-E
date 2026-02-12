
"use client"
import Link from "next/link"
import Image from "next/image"
import logo from "@/public/logo-svg.svg"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const NavbarPC = () => {
  const pathname = usePathname()
  const isSpanishPage = pathname.includes("/endodoncista-de-habla-hispana")
  const [isProceduresOpen, setIsProceduresOpen] = useState(false)
  const dropdownRef = useRef(null)
      if (pathname.startsWith("/payment")) return null

  const proceduresLinks = [
    {
      en: "Root Canal Therapy",
      es: "Tratamiento de Conducto",
      href: "/procedures/root-canal-therapy",
    },
    {
      en: "Endodontic Retreatment",
      es: "Retratamiento Endodóntico",
      href: "/procedures/endodontic-retreatment",
    },
    {
      en: "Endodontic Surgery",
      es: "Cirugía Endodóntica",
      href: "/procedures/endodontic-surgery",
    },
    {
      en: "Emergency Care",
      es: "Atención de Emergencia",
      href: "/procedures/emergency-care",
    },
    {
      en: "All Procedures",
      es: "Todos los Tratamientos",
      href: "/procedures",
    },
    {
      en: "Spanish-speaking Endodontist",
      es: "Endodoncia en Español",
      href: "/spanish-speaking-endodontist",
    },
    {
      en: "Endodontist Fort Worth",
      es: "Endodoncista en Fort Worth",
      href: "/endodontist-fort-worth",
    },
    {
      en: "Endodoncista de habla hispana",
      es: "Endodoncista de habla hispana",
      href: "/endodoncista-de-habla-hispana",
    },
  ]

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProceduresOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Toggle dropdown on click
  const toggleProceduresDropdown = (e) => {
    e.preventDefault()
    setIsProceduresOpen(!isProceduresOpen)
  }

  // Animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  }

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
      },
    }),
    exit: { opacity: 0, x: -10 },
  }

  return (
    <header className="hidden lg:block sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg shadow-md">
      <nav role="navigation" aria-label="Main menu" className="max-w-7xl mx-auto h-30 flex justify-between">
        <div className="z-20 h-28 w-2/12 mr-12 mt-1.5">
          <Link href={"/"}>
            <Image src={logo || "/placeholder.svg"} className="h-full w-full" alt="Logotipo de la empresa" />
          </Link>
        </div>
        {/* larger screen navigation */}
        <div className="flex justify-end items-center w-10/12">
          <ul className="hidden lg:flex text-[20px] space-x-6 ">
            <Link href={"/about-us"}>
              <li className="text-[#0a2a54] drop-shadow hover:text-[#0a2a54]/70 ease-in-out duration-300 font-inter cursor-pointer">
                {isSpanishPage ? "Sobre nosotros" : "About Us"}
              </li>
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                aria-haspopup="true" aria-expanded="false"
                onClick={toggleProceduresDropdown}
                className="flex items-center text-[#0a2a54] drop-shadow hover:text-[#0a2a54]/70 ease-in-out duration-300 font-inter cursor-pointer"
              >
                {isSpanishPage ? "Tratamientos" : "Procedures"}
                <motion.div>
                  <ChevronDown className="ml-1 mt-0.5 h-6 w-6" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isProceduresOpen && (
                  <motion.div
                    className="absolute left-0 mt-2 w-[270px] rounded-md shadow-lg z-50 overflow-hidden border-[#0a2a54]/40 backdrop-blur-lg  bg-white"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {proceduresLinks.map((link, index) => (
                        <motion.div
                          key={index}
                          custom={index}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={itemVariants}
                        >
                          <Link
                            href={link.href}
                            className="block px-4 py-2 text-xl font-inter text-[#0a2a54] hover:bg-gray-100 hover:text-[#0a2a54]/70 transition duration-150 ease-in-out cursor-pointer"
                            onClick={() => setIsProceduresOpen(false)}
                          >
                            {isSpanishPage ? link.es : link.en}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href={"/for-doctors"}>
              <li className="text-[#0a2a54] drop-shadow hover:text-[#0a2a54]/70 ease-in-out duration-300 font-inter cursor-pointer">
                {isSpanishPage ? "Doctores" : "Doctors"}
              </li>
            </Link>

            <Link href={"/for-patients"}>
              <li className="text-[#0a2a54] drop-shadow hover:text-[#0a2a54]/70 ease-in-out duration-300 font-inter cursor-pointer">
                {isSpanishPage ? "Pacientes" : "Patients"}
              </li>
            </Link>
            <Link href={"/endodoncista-de-habla-hispana"}>
              <li className="text-[#0a2a54] drop-shadow hover:text-[#0a2a54]/70 ease-in-out duration-300 font-inter cursor-pointer">
                {isSpanishPage ? "Español" : "Español"}
              </li>
            </Link>
          </ul>

          <div className="hidden lg:flex ml-6 space-x-4">
            <Link href={"/contact"}>
              <button className="cursor-pointer w-full rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/75 ease-in duration-300">
                {isSpanishPage ? "Agendar Cita" : "Book An Appointment"}
              </button>
            </Link>
            <a href={"https://securesite1246.tdo4endo.com/RefDocsLogin.aspx"} target="_blank" aria-label="Click to refer patient (opens in a new tab)">
              <button className="cursor-pointer w-full text-[#3c8dbc] border-2 border-[#3c8dbc] px-6 py-2 font-inter text-lg font-semibold rounded-md hover:bg-[#3c8dbc]/20 ease-in-out duration-300">
                {isSpanishPage ? "Referir Ahora" : "Refer Now"}
              </button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavbarPC