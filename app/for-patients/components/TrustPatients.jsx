// import { Award, Cpu, Heart, AlertCircle } from 'lucide-react'

// const TrustPatients = () => {
//   return (
//     <section className="bg-white">
//     <div className="mx-auto max-w-7xl py-16 lg:py-32 px-4">
//       <div className="mb-8 text-center">
//         <h2 className="text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl mb-8">
//           Why Patients Choose Southside Endodontics
//         </h2>
//         <p className="text-[#5a6065] text-lg md:text-xl text-center font-inter mb-8 mx-auto">
//           Dr. Horn combines clinical expertise with a compassionate approach to provide exceptional endodontic care.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 font-inter">
//         <div  className="bg-white border-none shadow-sm">
//           <div className="flex flex-col items-center gap-4 p-6 text-center">
//             <div className="rounded-full bg-[#3c8dbc]/10 p-4">
//               <Award className="h-8 w-8 text-[#3c8dbc]" />
//             </div>
//             <h3 className="text-xl text-[#0a2a54] font-inter">Experienced & Caring Specialists</h3>
//             <p className="text-[#5a6065]">
//               Our endodontists have years of experience in pain-free root canal therapy.
//             </p>
//           </div>
//         </div >

//         <div  className="bg-white border-none shadow-sm">
//           <div className="flex flex-col items-center gap-4 p-6 text-center">
//             <div className="rounded-full bg-[#3c8dbc]/10 p-4">
//               <Cpu className="h-8 w-8 text-[#3c8dbc]" />
//             </div>
//             <h3 className="text-xl text-[#0a2a54] font-inter">Advanced Technology</h3>
//             <p className="text-[#5a6065]">
//               We use cutting-edge technology like TDO software and digital imaging for better outcomes.
//             </p>
//           </div>
//         </div >

//         <div  className="bg-white border-none shadow-sm">
//           <div className="flex flex-col items-center gap-4 p-6 text-center">
//             <div className="rounded-full bg-[#3c8dbc]/10 p-4">
//               <Heart className="h-8 w-8 text-[#3c8dbc]" />
//             </div>
//             <h3 className="text-xl text-[#0a2a54] font-inter">Comfort & Anxiety-Free Treatments</h3>
//             <p className="text-[#5a6065]">
//               Gentle, patient-focused care with sedation options for a comfortable experience.
//             </p>
//           </div>
//         </div >

//         <div  className="bg-white border-none shadow-sm">
//           <div className="flex flex-col items-center gap-4 p-6 text-center">
//             <div className="rounded-full bg-[#3c8dbc]/10 p-4">
//               <AlertCircle className="h-8 w-8 text-[#3c8dbc]" />
//             </div>
//             <h3 className="text-xl text-[#0a2a54] font-inter">Same-Day Emergency Care</h3>
//             <p className="text-[#5a6065]">
//               Relief when you need it most with our prompt emergency endodontic services.
//             </p>
//           </div>
//         </div >
//       </div>
//     </div>
//   </section>

//   )
// }

// export default TrustPatients

import TrustCard from "@/app/components/TrustCard";


const TrustPatients = ({ cards = [] }) => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl py-16 lg:py-32 px-4">
        <div className="mb-8 text-center">
          <h2 className="text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl mb-8">
            Why Patients Choose Southside Endodontics
          </h2>
          <p className="text-[#5a6065] text-lg md:text-xl font-inter mb-8">
            Dr. Horn combines clinical expertise with a compassionate approach to provide exceptional endodontic care.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <TrustCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              benefits={card.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustPatients;
