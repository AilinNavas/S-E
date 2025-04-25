"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import check from "@/public/icons/check.svg";




const Services = () => {

  const services = [
    {
      id: 1,
      title: "Root Canal Therapy",
      link: "/procedures/root-canal-therapy",
      description:
        "Root Canal Therapy is a treatment used to repair and save a tooth that is decayed or infected.",
      bullets: [
        "Relieves tooth pain and sensitivity",
        "Prevents infection from spreading",
        "Preserves your natural tooth",
        "Typically completed in 1-2 visits",
      ],
    },
    {
      id: 2,
      title: "Endodontic Retreatment",
      link: "/procedures/endodontic-retreatment",
      description:
        "Performed when a previously treated tooth doesn't heal properly or develops new issues.",
      bullets: [
        "Fixes persistent or new infection",
        "Extends the life of the tooth",
        "Alternative to tooth extraction",
        "Often requires 1-2 visits",
      ],
    },
    {
      id: 3,
      title: "Endodontic Surgery",
      link: "/procedures/endodontic-surgery",
      description:
        "Endodontic surgery can save a tooth when traditional root canal treatments are not sufficient.",
      bullets: [
        "Apicoectomy to remove infected tissue",
        "Preserves your natural tooth",
        "Minor surgical procedure",
        "Supports long-term stability",

      ],
    },
    {
      id: 4,
      title: "Emergency Care",
      link: "/procedures/emergency-care",
      description:
        "Emergency endodontic care immediate treatment for sudden tooth pain or dental trauma.",
      bullets: [
        "Immediate pain relief",
        "Prevents further complications",
        "Often available same-day",
        "Protects surrounding teeth"
      ],
    },
  ];

  // Estado para controlar qué pestaña está activa
  const [selectedTab, setSelectedTab] = useState(services[0]);

  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-7xl py-16 lg:py-32  px-4 flex flex-col justify-center items-center'>
        <header className='space-y-8 mb-8'>
          <h2 className='text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl text-center'>Our Endodontic Procedures</h2>
          <p className='text-xl font-semibold font-inter text-[#5a6065] md:text-2xl text-center'>
            We offer a comprehensive range of endodontic treatments.
          </p>
        </header>
      

        <div className="w-full max-w-4xl mx-auto pb-8">
          {/* Botones de pestañas */}
          <div className="flex flex-wrap gap-2 mb-8 w-full justify-center">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedTab(service)}
                className={`cursor-pointer px-4 py-2 text-lg font-medium rounded font-inter
              ${selectedTab.id === service.id
                    ? "bg-[#3c8dbc]/40  text-[#5a6065]"
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
              key={selectedTab.id} // clave para animar la transición al cambiar de pestaña
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="rounded border border-[#3c8dbc] p-8 bg-white"
            >
              <Link href={selectedTab.link} ><h2 className=" text-2xl  text-[#0a2a54] uppercase font-zen font-bold mb-2">{selectedTab.title}</h2></Link>
              <p className="mb-4 text-[#5a6065] text-lg font-inter">{selectedTab.description}</p>
              <ul className="md:grid md:grid-cols-2 space-y-1 mb-4">
                {selectedTab.bullets.map((bullet, index) => (
                  <li className="flex text-[#5a6065] font-inter" key={index}><Image className="w-6 mr-2" alt='icon-check' src={check} />{bullet}</li>
                ))}
              </ul>

              <button className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/90 ease-in duration-300">
                Schedule Treatment
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
        <button className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter text-white border-2 border-[#0a2a54] bg-[#0a2a54] hover:bg-transparent hover:text-[#0a2a54] ease-in duration-300">See All Procedures</button>
      </div>
    </section>
  )
}

export default Services