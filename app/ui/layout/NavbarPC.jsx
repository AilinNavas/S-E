import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo-svg.svg'

const NavbarPC = () => {
  return (
    <header className="hidden lg:block sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="max-w-7xl mx-auto h-30 flex justify-between">
        <div className="z-20 h-28 w-2/12 mr-12 mt-1.5">
          <Link href={'/'}>
            <Image src={logo} className="h-full w-full" alt='Logotipo de la empresa' />
          </Link>
        </div>
        {/* larger screen navigation */}
        <div className="flex justify-end items-center w-10/12">
          <ul className="hidden lg:flex text-[20px] space-x-12 ">
            <Link href={'/'}><li className="text-[#0a2a54] hover:text-[#0a2a54]/70 ease-in-out duration-300 ">About Us</li></Link>
            <Link href={'/'}><li className="text-[#0a2a54] hover:text-[#0a2a54]/70 ease-in-out duration-300 ">Procedures</li></Link>
            <Link href={'/'}><li className="text-[#0a2a54] hover:text-[#0a2a54]/70 ease-in-out duration-300 max-w-32 ">Patients</li></Link>
            <Link href={'/'}><li className="text-[#0a2a54] hover:text-[#0a2a54]/70 ease-in-out duration-300 max-w-32 ">Doctors</li></Link>

          </ul>
          <div className="hidden lg:flex ml-12 space-x-2">
            <Link href={'/'}>
              <button className="bg-[#3c8dbc] border-2 border-[#3c8dbc] hover:bg-[#3c8dbc]/80 text-white px-8 py-3 font-inter font-semibold rounded-md hover:bg-primary/70 ease-in-out duration-300">Book an Appoinment</button>
            </Link>
            <Link href={'/'}>
              <button className="text-[#3c8dbc] border-2  border-[#3c8dbc] px-8 py-3 font-inter font-semibold rounded-md hover:bg-primary/70 ease-in-out duration-300">Refer Now</button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavbarPC 