import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo-svg.svg'

const NavbarPC = () => {
  return (
    <header className="hidden lg:block sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg shadow-md">
      <nav className="max-w-7xl mx-auto h-30 flex justify-between">
        <div className="z-20 h-28 w-2/12 mr-12 mt-1.5">
          <Link href={'/'}>
            <Image src={logo} className="h-full w-full" alt='Logotipo de la empresa' />
          </Link>
        </div>
        {/* larger screen navigation */}
        <div className="flex justify-end items-center w-10/12">
          <ul className="hidden lg:flex text-[20px] space-x-8 ">
            <Link href={'/about-us'}><li className="text-[#0a2a54] drop-shadow hover:text-[#0a2a54]/70 ease-in-out duration-300 font-inter">About Us</li></Link>
            <Link href={'/procedures'}><li className="text-[#0a2a54] drop-shadow hover:text-[#0a2a54]/70 ease-in-out duration-300 font-inter">Procedures</li></Link>
            <Link href={'/for-doctors'}><li className="text-[#0a2a54] drop-shadow hover:text-[#0a2a54]/70 ease-in-out duration-300  font-inter ">Doctors</li></Link>
            <Link href={'/for-patients'}><li className="text-[#0a2a54] drop-shadow hover:text-[#0a2a54]/70 ease-in-out duration-300 font-inter">Patients</li></Link>

          </ul>
          <div className="hidden lg:flex ml-12 space-x-4">
            <Link href={'/'}>
            <button className="rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/90 ease-in duration-300">Book An Appointment</button>
            </Link>
            <Link href={'/'}>
              <button className="text-[#3c8dbc] border-2  border-[#3c8dbc] px-6 py-2 font-inter text-lg font-semibold rounded-md hover:bg-primary/70 ease-in-out duration-300">Refer Now</button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavbarPC 