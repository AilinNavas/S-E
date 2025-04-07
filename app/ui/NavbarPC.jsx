import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/logo-svg.svg'

const NavbarPC = () => {
  return (
    <header className=" hidden lg:block bg-white text-primary font-inter w-full ease-in duration-500 top-10 left-0 z-10">
    <nav className="max-w-7xl mx-auto h-32 flex justify-between">
      <div className="z-20 h-28 w-2/12 mr-12 mt-1.5">
        <Link href={'/'}>
          <Image src={logo} className="h-full w-full" alt='Logotipo de la empresa' />
        </Link>
      </div>
      {/* larger screen navigation */}
      <div className="flex justify-end items-center w-10/12">
        <ul className="hidden lg:flex text-[20px] space-x-12 ">
          <Link href={'/'}><li className="hover:text-primary/65 ease-in-out duration-300 ">About Us</li></Link>
          <Link href={'/'}><li className="hover:text-primary/65 ease-in-out duration-300 ">Procedures</li></Link>
          <Link href={'/'}><li className="hover:text-primary/65 ease-in-out duration-300 max-w-32 ">Patients</li></Link>
          <Link href={'/'}><li className="hover:text-primary/65 ease-in-out duration-300 max-w-32 ">Doctors</li></Link>

        </ul>
        <div className="hidden lg:flex ml-12">
          <a href={'https://walink.co/7712bc'} target='_blank'  rel="noopener noreferrer">
            <button className="rounded-full px-6 py-2 text-lg font-assistant bg-secondary text-primary font-semibold border-secondary border-2 hover:bg-transparent hover:text-secondary ease-in duration-300">Contactar</button>
          </a>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default NavbarPC 