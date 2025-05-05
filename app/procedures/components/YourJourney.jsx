import { Calendar, Clock, Shield, MessageCircle } from 'lucide-react';
import Link from "next/link";


const YourJourney = () => {
    return (<section className="bg-white">
        <div className="mx-auto max-w-7xl py-16 lg:py-32 px-4">

            <div className="mb-8 text-center">
                <h2 className="text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl mb-8">
                    Your Journey to a Healthy Smile
                </h2>
                <p className="text-xl font-semibold font-inter text-[#5a6065] md:text-2xl text-center">
                    We've designed a process to ensure your treatment is  comfortable and effective
                </p>

            </div>

            <div className="relative">
                {/* Desktop connector line */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#3c8dbc]/20 hidden lg:block"></div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 font-inter">
                    {/* Step 1 */}
                    <div className="relative flex flex-col items-center">
                        <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#3c8dbc] text-white mb-4">
                            <span className="text-2xl font-bold text-[#3c8dbc]">1</span>
                        </div>
                        <div className="w-full bg-white border-none shadow-sm lg:h-[220px]">
                            <div className="flex flex-col gap-4 p-4 text-center">
                                <h3 className="text-xl font-semibold text-[#0a2a54] ">Initial Consultation</h3>
                                <p className="text-brand-secondary">
                                    We'll evaluate your condition with digital imaging and create a personalized treatment plan.
                                </p>
                                <div className="flex items-center justify-center text-[#3c8dbc]">
                                    <Calendar className="h-6 w-6 mr-2" />
                                    <span>30-45 minutes</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex flex-col items-center">
                        <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#3c8dbc] text-white mb-4">
                            <span className="text-2xl font-bold text-[#3c8dbc]">2</span>
                        </div>
                        <div className="w-full bg-white border-none shadow-sm lg:h-[220px]">
                            <div className="flex flex-col gap-4 p-4 text-center">
                                <h3 className="text-xl font-semibold text-[#0a2a54] ">Treatment Day</h3>
                                <p className="text-brand-secondary">
                                    Experience pain-free root canal therapy with advanced techniques and thorough care.
                                </p>
                                <div className="flex items-center justify-center text-[#3c8dbc]">
                                    <Clock className="h-6 w-6 mr-2" />
                                    <span>60-90 minutes</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex flex-col items-center">
                        <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#3c8dbc] text-white mb-4">
                            <span className="text-2xl font-bold text-[#3c8dbc]">3</span>
                        </div>
                        <div className="w-full bg-white border-none shadow-sm lg:h-[220px]">
                            <div className="flex flex-col gap-4 p-4 text-center">
                                <h3 className="text-xl font-semibold text-[#0a2a54] ">Recovery & Aftercare</h3>
                                <p className="text-brand-secondary">
                                    Receive clear post-treatment instructions and guidance for optimal healing.
                                </p>
                                <div className="flex items-center justify-center text-[#3c8dbc]">
                                    <Shield className="h-6 w-6 mr-2" />
                                    <span>Minimal downtime</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex flex-col items-center">
                        <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#3c8dbc] text-white mb-4">
                            <span className="text-2xl font-bold text-[#3c8dbc]">4</span>
                        </div>
                        <div className="w-full bg-white shadow-sm lg:h-[220px] ">
                            <div className="flex flex-col gap-4 p-4 text-center ">
                                <h3 className="text-xl font-semibold text-[#0a2a54] ">Follow-Up & Communication</h3>
                                <p className="text-brand-secondary">
                                    We coordinate with your general dentist for lasting treatment success.
                                </p>
                                <div className="flex items-center justify-center text-[#3c8dbc]">
                                    <MessageCircle className="h-6 w-6 mr-2" />
                                    <span>Comprehensive care</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <Link href="/contact">
                    <button className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/90 ease-in duration-300">
                        Book an Appointment
                    </button></Link>
            </div>



        </div>
    </section>
    )
}

export default YourJourney