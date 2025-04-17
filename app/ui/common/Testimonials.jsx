// import Image from "next/image";
// import Link from "next/link";
// import { testimonials } from "@/app/data/testimonials";
// import star from '@/public/icons/star.svg';
// import google from '@/public/icons/google.svg';

// const Testimonials = () => {

//   return (
//     <section className='bg-white'>
//       <div className='mx-auto max-w-7xl py-16 lg:py-32  px-4 flex flex-col justify-center items-center'>
//         <header className='pb-8'>
//         <h2 className='text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl'>What Our Patients and Referring Doctors Say</h2>
//       </header>

//         <div
//           className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
//         >
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className={`flex flex-col gap-4 rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition-opacity duration-500 `}
//             >
//               <div className="flex items-center gap-4 ">
//                 {testimonial.image ? (
//                   <div className="relative h-16 w-16 overflow-hidden rounded-full">
//                     <Image
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                 ) : (
//                   <div className="h-16 w-16 rounded-full bg-[#3c8dbc]/20 flex items-center justify-center">
//                     <span className="text-2xl font-bold text-[#3c8dbc]">
//                       {testimonial.initials}
//                     </span>
//                   </div>
//                 )}
//                 <div>
//                   <h3 className="text-lg font-semibold text-[#0a2a54]">{testimonial.name}</h3>
//                   <p className="text-sm text-[#5a6065]">{testimonial.role}</p>
//                 </div>

//               </div>
//               <p className="flex items-center h-6">
//                   <Image src={star} alt="star" className="w-6"/>
//                   <Image src={star} alt="star" className="w-6"/>
//                   <Image src={star} alt="star" className="w-6"/>  
//                   <Image src={star} alt="star" className="w-6"/>
//                   <Image src={star} alt="star" className="w-6"/>
//                 </p>
//               <p className="italic text-[#5a6065]">"{testimonial.text}"</p>
//               <p className="text-left">
//                 <Image src={google} alt="star" className="w-8 inline-block mr-2" />
//               </p>
//             </div>
//           ))}
//         </div>

//         <div className="mt-8 text-center">

//           <p className="text-lg text-[#5a6065] mb-4">Join our +220 reviews on Google!</p>
//           <button className="rounded-md px-6 py-2 text-lg font-inter text-white border-2 bg-[#0a2a54] hover:bg-transparent hover:text-[#0a2a54] ease-in duration-300">
//             <Link
//               href="https://g.page/r/southside-endodontics/review"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Leave a Review
//             </Link>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import Image from "next/image";
import Link from "next/link";
import star from '@/public/icons/star.svg';
import google from '@/public/icons/google.svg';

const Testimonials = ({ data = [], title, showCTA = true }) => {
  return (
    <section className='bg-[#3c8dbc]/40'>
      <div className='mx-auto max-w-7xl py-16 lg:py-32 px-4 flex flex-col justify-center items-center'>
        {title && (
          <header className='mb-8'>
            <h2 className='bg-gradient-to-b from-[#0a2a54] via-blue-900 to-blue-950 bg-clip-text text-transparent font-zen font-bold uppercase text-3xl md:text-5xl text-center'>
              {title}
            </h2>
          </header>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-lg bg-white p-6 shadow-[0px_4px_20px_0px_rgba(255,_255,_255,_0.5)] transition-opacity duration-500"
            >
              <div className="flex items-center gap-4">
                {testimonial.image ? (
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-16 w-16 rounded-full bg-[#3c8dbc]/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#3c8dbc]">
                      {testimonial.initials}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold bg-gradient-to-b from-[#0a2a54] via-blue-900 to-blue-950 bg-clip-text text-transparent">{testimonial.name}</h3>
                  <p className="text-sm text-[#5a6065]">{testimonial.role}</p>
                </div>
              </div>

              <p className="flex items-center h-6">
                {[...Array(5)].map((_, i) => (
                  <Image key={i} src={star} alt="star" className="w-6" />
                ))}
              </p>

              <p className="italic text-[#5a6065]">"{testimonial.text}"</p>

              <p className="text-left">
                <Image src={google} alt="google icon" className="w-8 inline-block mr-2" />
              </p>
            </div>
          ))}
        </div>

        {showCTA && (
          <div className="mt-8 text-center">
            <p className="text-lg text-[#5a6065] mb-4">Join our +220 reviews on Google!</p>
            <button className="rounded-md px-6 py-2 text-lg font-inter text-white border-2 border-[#0a2a54] bg-[#0a2a54] hover:bg-transparent hover:text-[#0a2a54] ease-in duration-300">
              <Link
                href="https://g.page/r/southside-endodontics/review"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leave a Review
              </Link>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
