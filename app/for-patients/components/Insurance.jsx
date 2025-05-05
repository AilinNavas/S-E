import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import DoubleCrrousel from './DoubleCrrousel'


const Insurance = () => {


    return (
        <section id='insurance' className="bg-white">
            <div className="mx-auto max-w-7xl py-16 lg:py-32 px-4">
                <div className="mb-8 text-center">
                    <h2 className="text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl mb-8">
                        Affordable Care with Flexible Payment Options
                    </h2>
                    <p className='text-xl font-semibold font-inter text-[#0a2a54] md:text-2xl'>
                        Our team will help verify your coverage and discuss financing options.
                    </p>
                </div>

                <DoubleCrrousel />
                {/* Benefits */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                    <div
                        className="bg-[#fcfdfd] p-6 rounded-lg shadow-sm"

                    >
                        <div className="flex items-center mb-4">
                            <CheckCircle className="h-8 w-8 text-[#3c8dbc] mr-3" />
                            <h3 className="text-xl font-bold text-[#0a2a54] font-zen">Insurance Accepted</h3>
                        </div>
                        <p className="text-[#5a6065] font-inter">
                            We work with most major insurance providers to ensure you get the maximum benefits.
                        </p>
                    </div>

                    <div
                        className="bg-[#fcfdfd] p-6 rounded-lg shadow-sm"

                    >
                        <div className="flex items-center mb-4">
                            <CheckCircle className="h-8 w-8 text-[#3c8dbc] mr-3" />
                            <h3 className="text-xl font-bold text-[#0a2a54] font-zen">Transparent Pricing</h3>
                        </div>
                        <p className="text-[#5a6065] font-inter">
                            We provide clear cost estimates before treatment so there are no surprises.
                        </p>
                    </div>

                    <div
                        className="bg-[#fcfdfd] p-6 rounded-lg shadow-sm"

                    >
                        <div className="flex items-center mb-4">
                            <CheckCircle className="h-8 w-8 text-[#3c8dbc] mr-3" />
                            <h3 className="text-xl font-bold text-[#0a2a54] font-zen">Flexible Payment Plans</h3>
                        </div>
                        <p className="text-[#5a6065] font-inter">
                            We offer payment plans to help make your treatment more affordable.
                        </p>
                    </div>
                </div>


                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link href='/contact'>
                    <button
                        className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/75 ease-in duration-300"

                    >
                        Book An Appointment
                    </button></Link>
                    <p className="mt-4 text-[#5a6065] font-inter">
                        Have questions about coverage? Call us at{" "}
                        <a href="tel:+8173869007" className="text-[#3c8dbc] font-semibold hover:underline">
                            817-386-9007
                        </a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Insurance