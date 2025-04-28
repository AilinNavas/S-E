
import { CheckCircle } from 'lucide-react'
import DoubleCrrousel from './DoubleCrrousel'

const Insurance = () => {


    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl py-16 lg:py-32 px-4">
                <div className="mb-8 text-center">
                    <h2 className="text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl mb-8">
                        Affordable Care with Flexible Payment Options
                    </h2>
                    <p className='text-xl font-semibold font-inter text-[#5a6065] md:text-2xl text-center'>
                    Our team will help verify your coverage and discuss financing options.
         </p>
                </div>

                <DoubleCrrousel />

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 font-inter">
                    <div >
                        <div className="flex flex-col items-center gap-4 p-6 text-center">
                            <div className="flex space-x-2 items-center">
                                <CheckCircle className="h-8 w-8 text-[#3c8dbc]" /><h3 className="text-xl font-semibold text-[#0a2a54]">Insurance Accepted</h3>
                            </div>
                           
                            <p className="text-[#5a6065]">
                                We work with most major insurance providers to ensure you get the maximum benefits.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col items-center gap-4 p-6 text-center">
                            <div className="flex space-x-2 items-center">
                                <CheckCircle className="h-8 w-8 text-[#3c8dbc]" /><h3 className="text-xl font-semibold text-[#0a2a54]">Transparent Pricing</h3>
                            </div>
                            <p className="text-[#5a6065]">
                                We provide clear cost estimates before treatment so there are no surprises.
                            </p>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex flex-col items-center gap-4 p-6 text-center">
                            <div className="flex space-x-2 items-center">
                                <CheckCircle className="h-8 w-8 text-[#3c8dbc]" /><h3 className="text-xl font-semibold text-[#0a2a54]">Flexible Payment Plans</h3>
                            </div>
                            <p className="text-[#5a6065]">
                                We offer payment plans to help make your treatment more affordable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Insurance