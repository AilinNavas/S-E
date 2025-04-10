'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const ParallaxSection = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-50%', '50%']);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Imagen con efecto parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 will-change-transform z-0"
      >
        <Image
          src="/office2.jpeg"
          alt="Consultorio dental"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Capa oscura encima */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenido */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Save Your Teeth</h2>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
        Schedule your consultation and transform your dental health.
        </p>
        <button className="bg-[#3c8dbc] border-2 border-[#3c8dbc] hover:bg-[#3c8dbc]/80 text-white px-8 py-3 font-inter font-semibold rounded-md hover:bg-primary/70 ease-in-out duration-300">Book an Appoinment</button>
      </div>


    </section>
  );
};

export default ParallaxSection;

