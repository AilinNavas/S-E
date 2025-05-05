
import Image from "next/image";
import clipboard from "@/public/icons/clipboard.svg";
import check from "@/public/icons/check.svg";
import lock from "@/public/icons/lock.svg";
import one from '@/public/images/refer-section/refering-1.webp';
import two from '@/public/images/refer-section/refering-2.webp';
import three from '@/public/images/refer-section/refering-3.webp';

const Referring = () => {

  const Refer = [
    {
      title: 'Timely, Custom Reports',
      icon: clipboard,
      detail: 'Tailored reports for each patient with quick updates.'
    },
    {
      title: 'Seamless Communication',
      icon: check,
      detail: "We ensure that you are always up-to-date with your patient's treatment progress."
    },
    {
      title: 'Efficient, HIPAA-Compliant Process',
      icon: lock,
      detail: "Minimize paperwork and administrative overhead."
    }
  ];

  return (
    <section className='bg-[#3c8dbc]/5'>
      <div className='mx-auto max-w-7xl py-16 lg:py-32 px-4'>

        {/* Título y texto introductorio */}
        <header className='pb-8 space-y-8'>
          <h2 className='text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl text-center'>
            For Referring Doctors
          </h2>
          <p className='text-xl font-semibold font-inter text-[#0a2a54] md:text-2xl text-center'>
            Let us help your patients get the best care possible.
          </p>
        </header>
    

        {/* GRID de 6 celdas */}
        <div
          className="
            grid 
            grid-cols-1 
            gap-6 
            md:grid-cols-2 
            md:grid-rows-3 
            lg:grid-cols-3 
            lg:grid-rows-2 
            auto-rows-[minmax(200px,auto)]
          "
        >
          {/* Celda 1 - Tarjeta con Refer[0] */}
          <div className="bg-white flex flex-col p-6 rounded-lg items-center justify-center transition-all ease-linear duration-300 hover:shadow-[0px_2px_10px_0px_rgba(60,_141,_188,_0.5)]">
            <div className='rounded-full  w-20 h-20 bg-[#3c8dbc]/10 flex items-center justify-center mb-4'>
              <Image src={Refer[0].icon} alt='icon' className='h-12 w-12' />
            </div>
            <h3 className="text-xl text-center lg:text-2xl text-[#0a2a54] font-inter mb-2">
              {Refer[0].title}
            </h3>
            <p className="text-[#5a6065] text-center font-inter text-lg">
              {Refer[0].detail}
            </p>
          </div>

          {/* Celda 2 - Relleno de color */}
          <div className="bg-[#3c8dbc]/10 rounded-lg">
            <Image src={one} alt="image-1" className="rounded-lg" /></div>

          {/* Celda 3 - Tarjeta con Refer[1] */}
          <div className="bg-white flex flex-col p-6 rounded-lg items-center justify-center transition-all ease-linear duration-300 hover:shadow-[0px_2px_10px_0px_rgba(60,_141,_188,_0.5)]">
            <div className='rounded-full w-20 h-20 bg-[#3c8dbc]/10 flex items-center justify-center mb-4'>
              <Image src={Refer[1].icon} alt='icon' className='h-12 w-12' />
            </div>
            <h3 className="text-xl text-center lg:text-2xl text-[#0a2a54] font-inter mb-2">
              {Refer[1].title}
            </h3>
            <p className="text-[#5a6065] text-center font-inter text-lg">
              {Refer[1].detail}
            </p>
          </div>

          {/* Celda 4 - Relleno de color */}
          <div className="bg-[#3c8dbc]/10 rounded-lg">
            <Image src={two} alt="image-2" className="rounded-lg" /></div>

          {/* Celda 5 - Tarjeta con Refer[2] */}
          <div className="bg-white flex flex-col p-6 rounded-lg items-center justify-center transition-all ease-linear duration-300 hover:shadow-[0px_2px_10px_0px_rgba(60,_141,_188,_0.5)]">
            <div className='rounded-full w-20 h-20 bg-[#3c8dbc]/10 flex items-center justify-center mb-4'>
              <Image src={Refer[2].icon} alt='icon' className='h-12 w-12' />
            </div>
            <h3 className="text-xl text-center lg:text-2xl text-[#0a2a54] font-inter mb-2">
              {Refer[2].title}
            </h3>
            <p className="text-[#5a6065] text-center font-inter text-lg">
              {Refer[2].detail}
            </p>
          </div>

          {/* Celda 6 - Relleno de color */}
          <div className="bg-[#3c8dbc]/10 rounded-lg" >
            <Image src={three} alt="image-3" className="rounded-lg" /></div>

        </div>
        <div className="text-center mt-8">
        <button className=" cursor-pointer text-[#3c8dbc] border-2 border-[#3c8dbc] px-6 py-2 font-inter text-lg font-semibold rounded-md hover:bg-primary/70 ease-in-out duration-300">
          Refer a Patient
        </button>
        </div>

        

      </div>
    </section>
  );
};

export default Referring;


