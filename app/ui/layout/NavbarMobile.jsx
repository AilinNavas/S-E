"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, MotionConfig } from 'framer-motion';
import Image from 'next/image';
import logo from '@/public/logo-svg.svg'

const NavbarMobile = () => {
    return (
        <div className='md:mt-10 lg:hidden'>
            <div className='flex items-center justify-between py-2'>
                <div className="z-40 h-20 pt-4 ml-4">
                    <Link href={'/'}>
                        <Image src={logo} className="h-full w-full" alt='Logotipo de la empresa' />
                    </Link>
                </div>
                <AnimatedHamburgerButton />
            </div>
        </div>
    );
}

const AnimatedHamburgerButton = () => {
    const [active, setActive] = useState(false);

    const handleLinkClick = () => {
        setActive(false);
    };

    return (
        <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
            <div className='relative z-30 mr-1'>
                <motion.button
                    initial={false}
                    onClick={() => setActive(pv => !pv)}
                    className='relative z-20 h-14 w-14 rounded-full bg-[#0a2a54]/0 transition-colors hover:bg-[#0a2a54]/10'
                    animate={active ? "open" : "closed"}
                    aria-label="Abrir y cerrar menú"
                >
                    <motion.span
                        style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
                        className='absolute h-0.5 w-10 bg-[#0a2a54]'
                        variants={{
                            open: { rotate: ["0deg", "0deg", "45deg"], top: ["35%", "50%", "50%"] },
                            closed: { rotate: ["45deg", "0deg", "0deg"], top: ["50%", "50%", "35%"] }
                        }}
                    />
                    <motion.span
                        style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
                        className='absolute h-0.5 w-10 bg-[#0a2a54]'
                        variants={{
                            open: { rotate: ["0deg", "0deg", "-45deg"] },
                            closed: { rotate: ["-45deg", "0deg", "0deg"] }
                        }}
                    />
                    <motion.span
                        style={{ left: "calc(50% + 10px)", bottom: "35%", x: "-50%", y: "50%" }}
                        className='absolute h-0.5 w-5 bg-[#0a2a54]'
                        variants={{
                            open: { rotate: ["0deg", "0deg", "45deg"], left: "50%", bottom: ["35%", "50%", "50%"] },
                            closed: { rotate: ["45deg", "0deg", "0deg"], left: "calc(50% + 10px)", bottom: ["50%", "50%", "35%"] }
                        }}
                    />
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={active ? { opacity: 1, height: '100vh' } : { opacity: 0, height: 0 }}
                    className="fixed top-0 left-0 right-0 bottom-0 bg-primary z-10 overflow-hidden"
                >
                    <nav className="flex bg-white mt-28 md:mt-40 flex-col items-start justify-start space-y-10 h-full p-8 font-inter text-2xl">

                        <div className='flex'>

                            <Link href="/sobre-nosotros" className="text-[#0a2a54]" onClick={handleLinkClick}>About Us</Link>
                        </div>

                        <div className='flex'>

                            <Link href="/cortinas/tradicional-con-riel" className="text-[#0a2a54]" onClick={handleLinkClick}>Procedures</Link>
                        </div>

                        <div className='flex'>

                            <Link href="/cortinas/tradicional-con-barral" className="text-[#0a2a54]" onClick={handleLinkClick}>Patients</Link>
                        </div>
                        <div className='flex'>

                            <Link href="/cortinas/roller" className="text-[#0a2a54]" onClick={handleLinkClick}>Doctors</Link>
                        </div>

                        <div className='flex flex-col items-start justify-center space-y-8'>
                            <Link href={'/'}>
                                <button className="bg-[#3c8dbc] border-2 border-[#3c8dbc] hover:bg-[#3c8dbc]/80 text-white px-8 py-3 font-inter font-semibold rounded-md hover:bg-primary/70 ease-in-out duration-300">Book an Appoinment</button>
                            </Link>
                            <Link href={'/'}>
                                <button className="text-[#3c8dbc] border-2  border-[#3c8dbc] px-8 py-3 font-inter font-semibold rounded-md hover:bg-primary/70 ease-in-out duration-300">Refer Now</button>
                            </Link>
                        </div>

                    </nav>
                </motion.div>
            </div>
        </MotionConfig>
    );
}

export default NavbarMobile;