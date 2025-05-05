
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import rootCanal from '@/public/images/smile.webp'

const TreatmentProcess = ({ title, subtitle, gridCols,  steps, subtitle2, afterCareItems }) => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl py-16 lg:py-32 px-4">
        <header className="pb-8 space-y-8">
          <h2 className="text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl text-center">
            {title}
          </h2>
          <p className="text-xl font-semibold font-inter text-[#0a2a54] md:text-2xl text-center">
            {subtitle}
          </p>
        </header>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#3c8dbc]/20 hidden lg:block"></div>

          <div className={`grid grid-cols-1 gap-8 ${gridCols}`}>
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#3c8dbc] text-white mb-4">
                  <span className="text-2xl font-bold text-[#3c8dbc]">{index + 1}</span>
                </div>
                <div className="w-full bg-white border-none shadow-sm">
                  <div className="flex flex-col gap-4 p-6 text-center">
                    <h3 className="text-xl font-semibold text-[#0a2a54]">{step.title}</h3>
                    <p className="text-[#5a6065]">{step.description}</p>
                    <div className="flex items-center justify-center text-[#3c8dbc]">
                      <span>{step.benefit}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-[#5a6065]/5 p-8 rounded-lg">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-[#0a2a54] mb-4">{subtitle2}</h3>
              <ul className="space-y-3">
                {afterCareItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                    <span className="text-[#5a6065]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[300px] w-full">
          
                <Image
                  src={rootCanal}
                  alt="Post Root Canal Care"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Puedes agregar una imagen u otro contenido visual si lo deseas */}
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default TreatmentProcess
