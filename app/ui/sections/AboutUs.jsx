import React from 'react'
import Image from 'next/image'
import family from '@/public/familyHorn.webp'

const AboutUs = () => {
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-7xl py-16 lg:py-32  px-4 flex flex-col justify-center items-center'>
        <header className='pb-8'>
          <h2 className='text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl'>A Family-Owned Practice You Can Trust</h2>
        </header>
        <div className="flex flex-col items-center space-y-8">
          <p className='text-secondary font-inter md:text-xl text-center'>
            At Southside Endodontics, Dr. Neal Horn and Leslie are committed to providing the highest quality of care to our patients, treating them like family. We believe in building lasting relationships through compassionate care and clear communication.
          </p>
          <Image src={family} alt='family-Horn' className='rounded-md mx-auto' />
          <button className="rounded-md px-6 py-2 text-lg font-inter text-white border-2 bg-primary  hover:bg-transparent hover:text-primary ease-in duration-300">Meet Dr.Horn</button>
        </div>
      </div>
    </section>
  )
}

export default AboutUs