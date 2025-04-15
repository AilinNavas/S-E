import Image from "next/image"
import drHorn from "@/public/DrHorn.webp"
import check from "@/public/icons/check.svg"

const WhyUs = () => {
    return (
        <section className='bg-[#f7f7f7]'>
            <div className='mx-auto max-w-7xl py-16 lg:py-32  px-4 flex flex-col justify-center items-center'>
                <header className='pb-8'>
                    <h2 className='bg-gradient-to-b from-blue-950  to-blue-900 bg-clip-text text-transparent font-zen font-bold uppercase text-3xl md:text-5xl'>Why Choose Us?</h2>
                </header>

                <div className="flex flex-col-reverse items-center space-y-8 lg:flex-row">

                    <div className="lg:w-1/2 space-y-8">
                        <p className='text-[#5a6065] font-inter md:text-xl text-left'>
                            We provide compassionate care, affordable treatments, and efficient service using the latest technology. Here's how we make your experience as seamless and comfortable as possible.
                        </p>

                        <ul className="mt-4 space-y-4 font-inter">
                            <li className="flex items-start gap-3 font-inter">
                                <Image alt="icon-check" src={check} className="mt-1 h-6 w-6 flex-shrink-0 text-brand-accent" />
                                <div>
                                    <h3 className="text-lg font-semibold bg-gradient-to-b text-[#0a2a54]">Fast, Efficient Appointments</h3>
                                    <p className="text-[#5a6065]">With TDO software, we reduce waiting times and paperwork.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 font-inter">
                                <Image alt="icon-check" src={check} className="mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                                <div>
                                    <h3 className="text-lg font-semibold bg-gradient-to-b text-[#0a2a54]">Compassionate Care</h3>
                                    <p className="text-[#5a6065]">Our team treats every patient like family.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 font-inter">
                                <Image alt="icon-check" src={check} className="mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                                <div>
                                    <h3 className="text-lg font-semibold bg-gradient-to-b text-[#0a2a54]">Affordable Rates</h3>
                                    <p className="text-[#5a6065]">High-quality care that won't break the bank.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 font-inter">
                                <Image alt="icon-check" src={check} className="mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                                <div>
                                    <h3 className="text-lg font-semibold bg-gradient-to-b text-[#0a2a54]">Seamless Technology</h3>
                                    <p className="text-[#5a6065]">Everything is streamlined for your convenience.</p>
                                </div>
                            </li>
                        </ul>
                        <button className="rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/90 ease-in duration-300">Book An Appointment</button>

                    </div>

                    <div className="pb-8 lg:pb-0 lg:w-1/2 lg:p-8">
                        <Image src={drHorn} alt="dr-horn" className="rounded-md" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WhyUs