
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { usePathname } from 'next/navigation'

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

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])
  const pathname = usePathname()
  const isSpanish = pathname === "/endodoncista-de-habla-hispana"

  return (
    <section className="relative">
      <div className="container grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:gap-12 mx-auto max-w-7xl py-16">
        <div className="flex flex-col gap-6 ">
          <h1 className="font-zen text-5xl font-bold leading-tight text-[#0a2a54] uppercase lg:text-7xl">
            {title}
          </h1>
          <p className="text-xl  font-semibold font-inter text-[#0a2a54] md:text-2xl">
            {subtitle}
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <Link href={primaryButtonLink}>
              <button className="cursor-pointer w-full rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/75 ease-in duration-300">
                {primaryButtonText}
              </button>
            </Link>
            <a href={secondaryButtonLink} target='_blank' rel="noopener noreferrer">
              <button className="cursor-pointer w-full text-[#3c8dbc] border-2 border-[#3c8dbc] px-6 py-2 font-inter text-lg font-semibold rounded-md hover:bg-[#3c8dbc]/20 ease-in-out duration-300">
                {secondaryButtonText}
              </button>
            </a>
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
      <div className='bg-[#3c8dbc]/5 px-8 py-4 text-[#5a6065] font-inter text-center rounded-md md:hidden -mt-6'>
        <p className='flex items-center justify-center'> <MapPin className='inline text-[#3c8dbc] mr-1' />
        <span className='text-lg text-[#3c8dbc]'>
            {isSpanish ? "Ver ubicación" : "See Location"}
          </span>
          </p>
        <a href="https://maps.app.goo.gl/xx2i9XrdQaAjtDbW7"
          target="_blank"><p className=''>
            1307 8th Avenue, Suite 303 Fort Worth, TX</p></a>
      </div>
    </section>
  )
}

export default Hero
