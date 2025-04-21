import React from 'react'
import Image from 'next/image'
import family from '@/public/images/about-us/familyHorn.webp'

const AboutUs = () => {
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-7xl py-16 lg:py-32 px-4 flex flex-col justify-center items-center'>
        <header className='flex flex-col items-center space-y-8 mb-8'>
          {/* <span className='font-zen font-semibold text-md text-[#3c8dbc] uppercase'>Many desktop publishing</span> */}
          <h2 className='text-[#0a2a54] font-zen text-center font-bold uppercase text-3xl md:text-5xl'>A Family-Owned Practice You Can Trust</h2>
        </header>
        <div className="flex flex-col items-center space-y-8">
         
          <Image src={family} alt='family-Horn' className='rounded-md mx-auto ' />
          
          <p className='text-[#5a6065] font-inter md:text-xl text-left lg:text-center'>
            At Southside Endodontics, Dr. Neal Horn and Leslie are committed to providing the highest quality of care to our patients, treating them like family. We believe in building lasting relationships through compassionate care and clear communication.
          </p>
          <button className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter text-white border-2 border-[#0a2a54] bg-[#0a2a54] hover:bg-transparent hover:text-[#0a2a54] ease-in duration-300">Meet Dr. Horn</button>
        </div>
      </div>
    </section>
  )
}

export default AboutUs