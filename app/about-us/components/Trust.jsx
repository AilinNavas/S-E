import  { Globe, Heart, Award , CheckCircle } from 'lucide-react'

const Trust = () => {
  return (
    <section className="bg-[#f7f7f7]">
    <div className="mx-auto max-w-7xl py-16 lg:py-32 px-4">
      <div className="mb-8 text-center">
        <h2 className="text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl mb-8">
          Why Patients & Doctors Trust Dr. Horn
        </h2>
        <p className="text-xl font-semibold font-inter text-[#0a2a54] md:text-2xl text-center">
          Dr. Horn combines clinical expertise with a compassionate approach.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 font-inter">
        {/* Expert Endodontic Care */}
        <div className="bg-white border-none shadow-sm">
          <div className="flex flex-col items-center gap-4 p-6 text-center">
            <div className="rounded-full bg-[#3c8dbc]/10 p-4">
              <Award className="h-8 w-8 text-[#3c8dbc]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0a2a54]">Expert Endodontic Care</h3>
            <p className="text-[#5a6065]">
              Over 15 years of experience in root canal treatment and endodontic procedures.
            </p>
            <ul className="mt-2 text-left space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                <span className="text-[#5a6065]">Specialized training in complex cases</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                <span className="text-[#5a6065]">Thousands of successful procedures</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bilingual in Spanish */}
        <div className="bg-white border-none shadow-sm">
          <div className="flex flex-col items-center gap-4 p-6 text-center">
            <div className="rounded-full bg-[#3c8dbc]/10 p-4">
              <Globe className="h-8 w-8 text-[#3c8dbc]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0a2a54]">Bilingual in Spanish</h3>
            <p className="text-[#5a6065]">
              Communicates fluently with Spanish-speaking patients for better understanding and comfort.
            </p>
            <ul className="mt-2 text-left space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                <span className="text-[#5a6065]">Clear explanations in Spanish</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                <span className="text-[#5a6065]">Cultural understanding</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Compassionate & Patient-Focused */}
        <div className="bg-white border-none shadow-sm">
          <div className="flex flex-col items-center gap-4 p-6 text-center">
            <div className="rounded-full bg-[#3c8dbc]/10 p-4">
              <Heart className="h-8 w-8 text-[#3c8dbc]" />
            </div>
            <h3 className="text-xl font-semibold text-[#0a2a54]">Compassionate Care</h3>
            <p className="text-[#5a6065]">Creates a stress-free, comfortable environment for all patients.</p>
            <ul className="mt-2 text-left space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                <span className="text-[#5a6065]">Patient comfort is a priority</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                <span className="text-[#5a6065]">Gentle, thorough approach</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Advanced Technology & Techniques */}
        <div className="bg-white border-none shadow-sm">
          <div className="flex flex-col items-center gap-4 p-6 text-center">
            <div className="rounded-full bg-[#3c8dbc]/10 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-[#3c8dbc]"
              >
                <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" />
                <path d="m6 17 3.13-5.78c.53-.97.43-2.22-.26-3.07A2.97 2.97 0 0 1 8.5 6" />
                <path d="m8.5 6 3.05-2.76a3 3 0 0 1 4.01.24c.59.66.79 1.59.55 2.44" />
                <path d="m18 17 4-6.5a3 3 0 0 0-5.5-2.5L14 13" />
                <path d="M18 17H4.5c-1.5 0-3-1.5-3-3 0-1.5 1.5-3 3-3h0c1.5 0 3 1.5 3 3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0a2a54]">Advanced Technology</h3>
            <p className="text-[#5a6065]">
              Uses the latest innovations in endodontics for precise, effective treatments.
            </p>
            <ul className="mt-2 text-left space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                <span className="text-[#5a6065]">Digital imaging for accuracy</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                <span className="text-[#5a6065]">Microscopic endodontics</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Trust