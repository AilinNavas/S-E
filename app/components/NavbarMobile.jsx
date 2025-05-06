"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, MotionConfig, AnimatePresence } from "framer-motion"
import Image from "next/image"
import logo from "@/public/logo-svg.svg"
import { ChevronDown, Phone } from "lucide-react"
import { usePathname } from "next/navigation"

const NavbarMobile = () => {
    const pathname = usePathname()
    const isSpanishPage = pathname.includes("/endodoncista-de-habla-hispana")

    return (
        <div className="md:mt-10 lg:hidden bg-white">
            <div className="flex items-center justify-between py-2">
                <div className="h-20 pt-4 ml-4">
                    <Link href={"/"}>
                        <Image src={logo || "/placeholder.svg"} className="h-full w-full" alt="Southside Endodontics logo" />
                    </Link>
                </div>
                <AnimatedHamburgerButton isSpanishPage={isSpanishPage} />
            </div>
        </div>
    )
}

const AnimatedHamburgerButton = ({ isSpanishPage }) => {
    const [active, setActive] = useState(false)
    const [proceduresOpen, setProceduresOpen] = useState(false)

    // Lock body scroll when menu is open
    useEffect(() => {
        if (active) {
            // Save current scroll position
            const scrollY = window.scrollY

            // Add styles to body to prevent scrolling
            document.body.style.position = "fixed"
            document.body.style.top = `-${scrollY}px`
            document.body.style.width = "100%"
        } else {
            // Restore scroll position when menu is closed
            const scrollY = document.body.style.top
            document.body.style.position = ""
            document.body.style.top = ""
            document.body.style.width = ""
            if (scrollY) {
                window.scrollTo(0, Number.parseInt(scrollY || "0", 10) * -1)
            }
        }

        return () => {
            // Cleanup function to restore body styles when component unmounts
            document.body.style.position = ""
            document.body.style.top = ""
            document.body.style.width = ""
        }
    }, [active])

    const handleLinkClick = () => {
        setActive(false)
        setProceduresOpen(false)
    }

    const toggleProcedures = (e) => {
        e.preventDefault()
        setProceduresOpen(!proceduresOpen)
    }

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
            en: "Speaking Spanish Endodontics",
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

    return (
        <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
            <div className="relative z-30 mr-1 bg-white">
                <motion.button
                    initial={false}
                    onClick={() => setActive((pv) => !pv)}
                    className="relative z-50 h-14 w-14 rounded-full bg-[#0a2a54]/0 transition-colors hover:bg-[#0a2a54]/10"
                    animate={active ? "open" : "closed"}
                    aria-label="Abrir y cerrar menú"
                >
                    <motion.span
                        style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
                        className="absolute h-0.5 w-10 bg-[#0a2a54]"
                        variants={{
                            open: { rotate: ["0deg", "0deg", "45deg"], top: ["35%", "50%", "50%"] },
                            closed: { rotate: ["45deg", "0deg", "0deg"], top: ["50%", "50%", "35%"] },
                        }}
                    />
                    <motion.span
                        style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
                        className="absolute h-0.5 w-10 bg-[#0a2a54]"
                        variants={{
                            open: { rotate: ["0deg", "0deg", "-45deg"] },
                            closed: { rotate: ["-45deg", "0deg", "0deg"] },
                        }}
                    />
                    <motion.span
                        style={{ left: "calc(50% + 10px)", bottom: "35%", x: "-50%", y: "50%" }}
                        className="absolute h-0.5 w-5 bg-[#0a2a54]"
                        variants={{
                            open: { rotate: ["0deg", "0deg", "45deg"], left: "50%", bottom: ["35%", "50%", "50%"] },
                            closed: { rotate: ["45deg", "0deg", "0deg"], left: "calc(50% + 10px)", bottom: ["50%", "50%", "35%"] },
                        }}
                    />
                </motion.button>

                <AnimatePresence>
                    {active && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-white z-40"
                        >
                            <div className="flex flex-col h-full">
                                {/* Logo area at top */}
                                <div className="flex items-center justify-between py-2 px-4 border-b border-gray-100">
                                    <div className="h-20 pt-4">
                                        <Link href={"/"}>
                                            <Image src={logo || "/placeholder.svg"} className="h-full w-full" alt="Logotipo de la empresa" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Scrollable menu content */}
                                <div className="flex-1 overflow-y-auto">
                                    <nav className="flex flex-col items-start justify-start space-y-8 p-8 font-inter text-2xl">
                                        <div className="flex">
                                            <Link href="/about-us" className="text-[#0a2a54]" onClick={handleLinkClick}>
                                                {isSpanishPage ? "Sobre nosotros" : "About Us"}
                                            </Link>
                                        </div>

                                        <div className="flex flex-col w-full">
                                            <button onClick={toggleProcedures} className="flex items-center text-[#0a2a54] font-inter">
                                                {isSpanishPage ? "Tratamientos" : "Procedures"}
                                                <motion.div
                                                    animate={{ rotate: proceduresOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="ml-2"
                                                >
                                                    <ChevronDown className="h-5 w-5" />
                                                </motion.div>
                                            </button>

                                            <AnimatePresence>
                                                {proceduresOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pl-4 mt-4 flex flex-col space-y-4">
                                                            {proceduresLinks.map((link, index) => (
                                                                <motion.div
                                                                    key={index}
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: index * 0.05 }}
                                                                >
                                                                    <Link
                                                                        href={link.href}
                                                                        className="text-[#0a2a54] text-xl hover:text-[#0a2a54]/70"
                                                                        onClick={handleLinkClick}
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

                                        <div className="flex">
                                            <Link href="/for-patients" className="text-[#0a2a54]" onClick={handleLinkClick}>
                                                {isSpanishPage ? "Pacientes" : "Patients"}
                                            </Link>
                                        </div>

                                        <div className="flex">
                                            <Link href="/for-doctors" className="text-[#0a2a54]" onClick={handleLinkClick}>
                                                {isSpanishPage ? "Doctores" : "Doctors"}
                                            </Link>
                                        </div>
                                        <div className="flex">
                                            <Link href="/endodoncista-de-habla-hispana" className="text-[#0a2a54]" onClick={handleLinkClick}>
                                                {isSpanishPage ? "Español" : "Español"}
                                            </Link>
                                        </div>

                                        <div className="">
                                            <Link href="/contact" className="text-[#0a2a54]" onClick={handleLinkClick}>
                                                {isSpanishPage ? "Agendar Cita" : "Book An Appointment"}
                                            </Link>
                                        </div>

                                        <div className="flex">
                                            <a href="https://securesite1246.tdo4endo.com/RefDocsLogin.aspx" className="text-[#0a2a54]" onClick={handleLinkClick}>
                                                {isSpanishPage ? "Referir Ahora" : "Refer Now"}
                                            </a>
                                        </div>

                                        <Link href="tel:+8173869007" onClick={handleLinkClick}>
                                            <button className="flex items-center bg-[#119960] border-2 border-[#119960] hover:bg-[#119960]/80 text-white px-8 py-3 font-inter font-semibold rounded-md hover:bg-primary/70 ease-in-out duration-300">
                                                <Phone className="w-6 h-6 mr-2 text-white" />
                                                {isSpanishPage ? "Llamar Ahora" : "Call Us"}
                                            </button>
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </MotionConfig>
    )
}

export default NavbarMobile

