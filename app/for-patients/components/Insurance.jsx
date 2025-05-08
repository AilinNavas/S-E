import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import InsuranceGrid from './Insurance-grid'

const Insurance = ({ title, subtitle, showCTA = true }) => {
  return (
    <section id="insurance" className="bg-[#3c8dbc]/5">
      <div className="mx-auto max-w-7xl py-16 lg:py-32 px-4">
        <div className="mb-8 text-center">
          <h2 className="text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl mb-8">
            {title}
          </h2>
          <p className="text-xl font-semibold font-inter text-[#0a2a54] md:text-2xl">
            {subtitle}
          </p>
        </div>

        <InsuranceGrid />

        {/* Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: 'Insurance Accepted',
              text: 'We work with most major insurance providers to ensure you get the maximum benefits.',
            },
            {
              title: 'Transparent Pricing',
              text: 'We provide clear cost estimates before treatment so there are no surprises.',
            },
            {
              title: 'We accept CareCredit.com',
              text: 'We want to make your treatment more affordable.',
            },
          ].map((item, index) => (
            <div key={index} className="bg-[#fcfdfd] p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 text-[#3c8dbc] mr-3" />
                <h3 className="text-xl font-bold text-[#0a2a54] font-zen">
                  {item.title}
                </h3>
              </div>
              <p className="text-[#5a6065] font-inter">{item.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {showCTA && (
          <div className="mt-16 text-center">
            <Link href="/contact">
              <button className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/75 ease-in duration-300">
                Book An Appointment
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Insurance
