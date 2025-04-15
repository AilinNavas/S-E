// import Image from "next/image";
// import clipboard from "@/public/icons/clipboard.svg";
// import check from "@/public/icons/check.svg";
// import lock from "@/public/icons/lock.svg";

// const Referring = () => {

//   const Refer = [
//       {
//         title: 'Timely, Custom Reports',
//         icon: clipboard,
//         detail: 'Tailored reports for each patient with quick updates.'
//       },
//       {
//         title: 'Seamless Communication',
//         icon: check,
//         detail: "We ensure that you are always up-to-date with your patient's treatment progress."
//       },
//       {
//         title: 'Efficient, HIPAA-Compliant Process',
//         icon: lock,
//         detail: "Minimize paperwork and administrative overhead."
//       }
//     ];

//   return (
//    <section className='bg-gray-200/40'>
//          <div className='mx-auto max-w-7xl py-16 lg:py-32  px-4 flex flex-col justify-center'>
//            <header className='pb-8'>
//              <h2 className='text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl text-center'>For Referring Doctors</h2>
//            </header>
//            <div className="pb-8">
//             <p className='text-[#5a6065] font-inter md:text-xl text-center'>
//             We understand the importance of smooth communication and fast, reliable patient care. Our advanced software ensures seamless patient registration, quick data sharing, and timely clinical outcomes. Let us help your patients get the best care possible.
//             </p>
//             </div>
//            <div className="grid gap-6 grid-cols-1 justify-items-center items-center md:grid-cols-2 lg:grid-cols-3">
//              {Refer.map((value, index) => (
//                <div
//                  key={index}
//                  className={`flex flex-col bg-gray-200/5 enter p-6 rounded-lg  max-w-sm h-[280px] transition-all ease-linear duration-300 `}

//                >
//                  <div className="flex flex-col space-y-2 items-center justify-center mb-4">
//                    <div className='rounded-full w-20 h-20 bg-[#3c8dbc]/10 flex items-center justify-center'>
//                      <Image src={value.icon} alt='icon' className='h-12 w-12' />
//                    </div>
//                    <h3 className="text-xl text-center lg:text-2xl text-[#0a2a54] font-inter">{value.title}</h3>
//                  </div>
//                  <p className="text-[#5a6065] text-center font-inter text-lg ">{value.detail}</p>
//                </div>
//              ))}
//            </div>
//          </div>
//        </section>
//   )
// }

// export default Referring

import Image from "next/image";
import clipboard from "@/public/icons/clipboard.svg";
import check from "@/public/icons/check.svg";
import lock from "@/public/icons/lock.svg";
import one from '@/public/refer-section/refering-1.webp';
import two from '@/public/refer-section/refering-2.webp';
import three from '@/public/refer-section/refering-3.webp';

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
    <section className='bg-[#f7f7f7]'>
      <div className='mx-auto max-w-7xl py-16 lg:py-32 px-4'>

        {/* Título y texto introductorio */}
        <header className='pb-8'>
          <h2 className='bg-gradient-to-b from-[#0a2a54] via-blue-900 to-blue-950 bg-clip-text text-transparent font-zen font-bold uppercase text-3xl md:text-5xl text-center'>
            For Referring Doctors
          </h2>
        </header>
        <div className='pb-8'>
          <p className='text-[#5a6065] font-inter md:text-xl lg:text-center'>
            We understand the importance of smooth communication and fast, reliable patient care.
            Our advanced software ensures seamless patient registration, quick data sharing, and
            timely clinical outcomes. Let us help your patients get the best care possible.
          </p>
        </div>

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
      </div>
    </section>
  );
};

export default Referring;


