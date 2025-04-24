// 'use client';
// import { useScroll, useTransform, motion } from 'framer-motion';
// import { useRef } from 'react';
// import Image from 'next/image';
// import office2 from '@/public/images/about-us/office2.webp';  

// const ParallaxSection = () => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ['start end', 'end start'],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ['-50%', '50%']);

//   return (
//     <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
//       {/* Imagen con efecto parallax */}
//       <motion.div
//         style={{ y }}
//         className="absolute inset-0 will-change-transform z-0"
//       >
//         <Image
//           src={office2}
//           alt="Consultorio dental"
//           fill
//           className="object-cover object-center"
//           priority
//         />
//       </motion.div>

//       {/* Capa oscura encima */}
//       <div className="absolute inset-0 bg-black/50 z-10" />

//       {/* Contenido */}
//       <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
//         <h2 className="text-3xl md:text-5xl font-bold mb-4 font-zen">Save Your Teeth</h2>
//         <p className="text-lg md:text-xl mb-6 max-w-3xl font-inter">
//         Schedule your consultation and transform your dental health.
//         </p>
//         <button className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/90 ease-in duration-300">Book an Appoinment</button>
//       </div>


//     </section>
//   );
// };

// export default ParallaxSection;

'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const ParallaxSection = ({
  imageSrc,
  title,
  description,
  buttonText,
  
}) => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-50%', '50%'])

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Imagen con efecto parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 will-change-transform z-0"
      >
        <Image
          src={imageSrc}
          alt="Parallax background"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Capa oscura encima */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Contenido */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-zen">{title}</h2>
        <p className="text-lg md:text-xl mb-6 max-w-3xl font-inter">{description}</p>
        {buttonText && (
          <button
        
            className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/90 ease-in duration-300"
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  )
}

export default ParallaxSection
