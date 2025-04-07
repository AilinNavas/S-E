"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import check from "@/public/icons/check.svg";



const Services = () => {

  const services = [
    {
      id: 1,
      title: "Root Canal Therapy",
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
    <section className='bg-gray-100/50'>
      <div className='mx-auto max-w-7xl py-16 lg:py-32  px-4 flex flex-col justify-center items-center'>
        <header className='pb-8'>
          <h2 className='text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl'>Our Endodontic Services</h2>
        </header>
        <div className="pb-8">
          <p className='text-[#5a6065] font-inter md:text-xl text-center'>
            We offer a comprehensive range of endodontic treatments using the latest technology and techniques to ensure the best outcomes for our patients.
          </p>
        </div>

        <div className="w-full max-w-4xl mx-auto p-4">
          {/* Botones de pestañas */}
          <div className="flex flex-wrap gap-2 mb-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedTab(service)}
                className={`px-4 py-2 text-lg font-medium rounded 
              ${selectedTab.id === service.id
                    ? "bg-[#3c8dbc] text-white"
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
              className="rounded border border-[#3c8dbc] shadow-xl p-8 bg-white"
            >
              <h2 className="text-2xl text-[#0a2a54] uppercase font-zen font-bold mb-2">{selectedTab.title}</h2>
              <p className="mb-4 text-[#5a6065] text-lg ">{selectedTab.description}</p>
              <ul className="md:grid md:grid-cols-2 space-y-1 mb-4">
                {selectedTab.bullets.map((bullet, index) => (
                  <li className="flex text-[#5a6065]" key={index}><Image className="w-6 mr-2" alt='icon-check' src={check} />{bullet}</li>
                ))}
              </ul>
              <button className=" bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-inetr hover:bg-[#3c8dbc]/90 ease-in duration-300 px-4 py-2 rounded-md transition-colors">
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