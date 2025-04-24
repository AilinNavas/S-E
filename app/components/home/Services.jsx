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
        "Root Canal Therapy is a treatment used to repair and save a tooth that is badly decayed or infected. During a root canal procedure, the nerve and pulp are removed, and the inside of the tooth is cleaned and sealed.",
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
        "Endodontic retreatment is performed on a tooth that has had a root canal but did not heal properly or has developed new problems.",
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
        "Endodontic surgery can help save a tooth in situations where traditional root canal treatments are not sufficient.",
      bullets: [
        "Apicoectomy to remove infected tissue",
        "Preserves your natural tooth",
        "Minor surgical procedure",
      ],
    },
    {
      id: 4,
      title: "Emergency Care",
      link: "/procedures/emergency-care",
      description:
        "Emergency endodontic care addresses sudden tooth pain or trauma, providing quick relief and treatment.",
      bullets: [
        "Immediate pain relief",
        "Prevents further complications",
        "Often available same-day",
      ],
    },
  ];

  // Estado para controlar qué pestaña está activa
  const [selectedTab, setSelectedTab] = useState(services[0]);

  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-7xl py-16 lg:py-32  px-4 flex flex-col justify-center items-center'>
        <header className='pb-8'>
          <h2 className='text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl text-center'>Our Endodontic Services</h2>
        </header>
        <div className="pb-4">
          <p className='text-[#5a6065] font-inter md:text-xl text-left lg:text-center'>
            We offer a comprehensive range of endodontic treatments using the latest technology and techniques to ensure the best outcomes for our patients.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto ">
          {/* Botones de pestañas */}
          <div className="flex flex-wrap gap-2 mb-4">
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
              className="rounded border border-[#3c8dbc] shadow-xl p-8 bg-white "
            >
              <Link href={selectedTab.link} ><h2 className=" text-2xl bg-gradient-to-b from-[#0a2a54] via-blue-900 to-blue-950 bg-clip-text text-transparent uppercase font-zen font-bold mb-2">{selectedTab.title}</h2></Link>
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
      </div>
    </section>
  )
}

export default Services