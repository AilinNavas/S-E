'use client'
import Contact from "./Contact"
import DentalClinicMap from "./home/DentalClinicMap"
import { usePathname } from 'next/navigation'


const InfoContact = () => {

    const pathname = usePathname()
    const isSpanishPage = pathname.includes('/endodoncista-de-habla-hispana')
    return (
        <section className='bg-white'>
            <div className='mx-auto max-w-7xl py-16 lg:py-32  px-4 flex flex-col justify-center items-center'>
                <header className='pb-8 space-y-8'>
                    <h2 className='text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl text-center'>{isSpanishPage ? 'Encuéntranos' : 'find us'}</h2>
                    <p className='text-xl font-semibold font-inter text-[#0a2a54] md:text-2xl text-center'>
                    {isSpanishPage ? 'Estamos convenientemente ubicados en Fort Worth para servirle.' : "We're conveniently located in Fort Worth to serve you."}
          </p>
                </header>

                <div className=" md:w-3xl md:p-4 lg:p-0 lg:w-7xl flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:items-start lg:space-x-16 ">

                    <div className="lg:w-1/2">
                      
                        <DentalClinicMap />
                    </div>

                    <div className="lg:w-1/2">
                        <Contact />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default InfoContact