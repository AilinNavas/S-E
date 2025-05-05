// import Link from "next/link"


// export default function Symptoms() {
//   // Datos de ejemplo para las tarjetas de síntomas
//   const symptomsData = [
//     {
//       id: 1,
//       title: "Severe Toothache",
//       subtitle: "Persistent pain that may radiate to the jaw, ear, or neck",
//     },
//     {
//       id: 2,
//       title: "Sensitivity to Temperature",
//       subtitle: "Sharp pain when consuming hot or cold foods and beverages",
//     },
//     {
//       id: 3,
//       title: "Swollen Gums",
//       subtitle: "Inflammation and tenderness around a specific tooth",
//     },
//     {
//       id: 4,
//       title: "Facial Swelling",
//       subtitle: "Puffiness of the face, cheek, or jaw area",
//     },
//     {
//       id: 5,
//       title: "Persistent Bad Breath",
//       subtitle: "Unpleasant odor that doesn't go away with brushing",
//     },
//     {
//       id: 6,
//       title: "Discolored Tooth",
//       subtitle: "Darkening or discoloration of an individual tooth",
//     },
//   ]

//   return (
//     <section className="relative py-16 md:py-24">
//       {/* Imagen de fondo con overlay para mejorar legibilidad del texto */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
//         style={{
//           backgroundImage: "url('/images/about-us/before.webp')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Overlay semi-transparente para mejorar la legibilidad del texto */}
//         <div className="absolute inset-0 bg-black/80"></div>
//       </div>

//       {/* Contenido de la sección */}
//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         {/* Encabezado de la sección */}
//         <div className="text-center mb-8 space-y-8">
//           <h2 className="text-white font-zen font-bold uppercase text-3xl md:text-5xl text-center">Common Symptoms</h2>
//           <p className="text-xl font-semibold font-inter text-center text-white md:text-2xl">
//             Recognizing the signs early can save your natural tooth.
//           </p>
//         </div>

//         {/* Grid de tarjetas de síntomas */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-inter">
//           {symptomsData.map((symptom) => (
//             <div
//               key={symptom.id}
//               className=" backdrop-blur-sm border border-white/20 rounded-lg p-6 transition-all duration-300 hover:bg-white/25 hover:transform hover:-translate-y-1 hover:shadow-lg"
//             >
//               <h3 className="text-xl font-semibold text-white mb-2">{symptom.title}</h3>
//               <p className="text-gray-200">{symptom.subtitle}</p>
//             </div>
//           ))}
//         </div>
//         <div className="text-center my-8">

//           <Link href='/appointments'>
//             <button className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/90 ease-in duration-300">
//               Book An Appointment
//             </button>
//           </Link>
//         </div>


//       </div>
//     </section>
//   )
// }


import Link from "next/link"

export default function Symptoms({ title, subtitle, symptoms }) {
  return (
    <section className="relative py-16 md:py-24">
      {/* Imagen de fondo con overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/images/about-us/before.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Título y subtítulo dinámicos */}
        <div className="text-center mb-8 space-y-8">
          <h2 className="text-white font-zen font-bold uppercase text-3xl md:text-5xl text-center">{title}</h2>
          <p className="text-xl font-semibold font-inter text-center text-white md:text-2xl">{subtitle}</p>
        </div>

        {/* Síntomas dinámicos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-inter">
          {symptoms.map((symptom, index) => (
            <div
              key={index}
              className="backdrop-blur-sm border border-white/20 rounded-lg p-6 transition-all duration-300 hover:bg-white/25 hover:transform hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{symptom.title}</h3>
              <p className="text-gray-200">{symptom.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="text-center my-8">
          <Link href="/contact">
            <button className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/90 ease-in duration-300">
              Book An Appointment
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
