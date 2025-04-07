import Image from 'next/image'
import heroPC from '@/public/heroPC.png'


const Hero = () => {
  return (
    <div className='relative py-32 md:py-40'>
    <div className="px-4 max-w-7xl mx-auto space-y-4">
        <h1 className="text-5xl md:text-7xl max-w-3xl font-zen font-semibold uppercase text-[#0a2a54]">Fort Worth's Trusted Endodontist Practice</h1>
        <span className="font-inter text-[#0a2a54] text-xl md:text-3xl block lg:max-w-2xl">Delivering Compassionate Endodontic Care with the Latest Technology in Fort Worth, TX.</span>
    </div>

    
    <div className="px-4 max-w-7xl mx-auto mt-4">
        <div className=" flex flex-col md:flex-row w-44 md:w-96 md:items-center space-y-2 md:space-y-0 md:space-x-2">
        <a href={'https://walink.co/7712bc'} target="_blank"
            rel="noopener noreferrer">
          <button className="bg-[#3c8dbc] border-2 border-[#3c8dbc] hover:bg-[#3c8dbc]/80 text-white px-8 py-3 font-inter font-semibold rounded-md hover:bg-primary/70 ease-in-out duration-300">Book an Appoinment</button>
        </a>
        
        </div>
    </div>

    {/* Imagen para dispositivos móviles */}
    {/* <Image
        src={hero1}
        alt='Diseño exclusivo - móvil'
        quality={80}
        priority
        sizes="(max-width: 768px) 100vw"
        className='w-full block lg:hidden absolute top-0 -z-10'
        placeholder="blur"
    /> */}

    {/* Imagen para pantallas grandes */}
    <Image
        src={heroPC}
        alt='Diseño exclusivo - escritorio'
        quality={80}
        sizes="(min-width: 1024px) 100vw"
        className='w-full hidden lg:block absolute top-0 -z-10'
        placeholder="blur"
    />
</div>
  )
}

export default Hero 