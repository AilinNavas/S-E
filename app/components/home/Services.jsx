
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const Services = ({
  title,
  subtitle,
  services,
  showButton = true
}) => {
  const [selectedTab, setSelectedTab] = useState(services[0]);
  const pathname = usePathname()
  const isSpanish = pathname === "/endodoncista-de-habla-hispana"

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl py-16 lg:py-32 px-4 flex flex-col justify-center items-center">
        <header className="space-y-8 mb-8">
          <h2 className="text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl text-center">
            {title}
          </h2>
          <p className="text-xl font-semibold font-inter text-[#0a2a54] md:text-2xl text-center">
            {subtitle}
          </p>
        </header>

        <div className="w-full max-w-4xl mx-auto pb-8">
          {/* Botones de pestañas */}
          <div className="flex flex-wrap gap-2 mb-8 w-full justify-center ">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedTab(service)}
                className={`cursor-pointer px-4 py-2 text-lg font-medium rounded font-inter w-full md:w-auto  transition-colors duration-300 ease-in-out
                  ${selectedTab.id === service.id
                    ? "bg-[#3c8dbc]/40 text-[#0a2a54]"
                    : "bg-gray-200 text-[#5a6065] hover:bg-[#3c8dbc]/40"
                  }
                `}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Contenido de la pestaña activa con animación */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="rounded border border-[#3c8dbc] p-8 bg-white "
            >
              <Link href={selectedTab.link}>
                <h2 className="text-2xl text-[#0a2a54] uppercase font-zen font-bold mb-2">
                  {selectedTab.title}
                </h2>
              </Link>
              <p className="mb-4 text-[#5a6065] text-lg font-inter">
                {selectedTab.description}
              </p>
              <ul className="md:grid md:grid-cols-2 space-y-1 mb-4">
                {selectedTab.bullets.map((bullet, index) => (
                  <li
                    className="flex text-[#5a6065] font-inter items-center"
                    key={index}
                  >
                    <CheckCircle className="mr-1 h-5 w-5 text-[#3c8dbc]" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="my-4">
                <Link
                  href={selectedTab.link}
                  className="ml-1 inline-flex items-center text-[#3c8dbc] hover:underline"
                >
                 { isSpanish? 'Saber más' : 'Learn more'}
                </Link>
              </div>


              <Link href={'/contact'}><button className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/75 ease-in duration-300">
              { isSpanish? 'Programar tratamiento' : 'Schedule Treatment'} 
              </button></Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Botón final opcional */}
        {showButton && (
          <Link
            href='/procedures'
            className="ml-1 inline-flex items-center text-[#3c8dbc] hover:underline text-xl"
          >
            { isSpanish? 'Ver todos los procedimientos' : ' See all procedures'}  <ArrowRight className="ml-1 h-6 w-6" />
          </Link>
        )}
      </div>
    </section>
  );
};

export default Services;
