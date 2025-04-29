// 'use client'
// import { useEffect } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import DrHorn from '@/public/images/about-us/Neal.webp'


// const Hero = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0); // Esto fuerza a que la página haga scroll a la parte superior
//   }, [])
//   return (
//     <section className="relative">
//       <div className="container grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 mx-auto max-w-7xl py-16">
//         <div className="flex flex-col gap-6">
//           <h1 className="font-zen text-4xl font-bold leading-tight text-[#0a2a54] font-zen  uppercase md:text-5xl lg:text-6xl">
//             Fort Worth's Trusted Endodontist Practice
//           </h1>
//           <p className="text-xl font-semibold font-inter text-[#5a6065] md:text-2xl">
//             Delivering Compassionate Endodontic Care with the Latest Technology in Fort Worth, TX.
//           </p>
//           <div className="flex flex-col lg:flex-row gap-4">
//             <button className=" cursor-pointer rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/90 ease-in duration-300">Book An Appointment</button>
//             <Link href={'/'}>
//               <button className="cursor-pointer w-full text-[#3c8dbc] border-2 border-[#3c8dbc] px-6 py-2 font-inter text-lg font-semibold rounded-md hover:bg-primary/70 ease-in-out duration-300">Refer Now</button>
//             </Link>
//           </div>
        
//         </div>
//         <div className="relative h-[400px] w-full md:h-[500px]">
//           <Image
//             src={DrHorn}
//             alt="Dr. Neal Horn and Leslie Horn at Southside Endodontics"
//             fill
//             className="rounded-lg object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero 

'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  imageSrc,
  imageAlt,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="relative">
      <div className="container grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 mx-auto max-w-7xl py-16">
        <div className="flex flex-col gap-6">
          <h1 className="font-zen text-4xl font-bold leading-tight text-[#0a2a54] uppercase md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-xl font-semibold font-inter text-[#0a2a54] md:text-2xl">
            {subtitle}
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <Link href={primaryButtonLink}>
              <button className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/90 ease-in duration-300">
                {primaryButtonText}
              </button>
            </Link>
            <Link href={secondaryButtonLink}>
              <button className="cursor-pointer w-full text-[#3c8dbc] border-2 border-[#3c8dbc] px-6 py-2 font-inter text-lg font-semibold rounded-md hover:bg-primary/70 ease-in-out duration-300">
                {secondaryButtonText}
              </button>
            </Link>
          </div>
        </div>
        <div className="relative h-[400px] w-full md:h-[500px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
