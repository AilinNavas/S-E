import Link from "next/link"
import { Clock, FileText, MessageCircle, Send } from "lucide-react"

const ReferralProcess = () => {
    return (
        <section className='bg-[#f7f7f7]'>
            <div className='mx-auto max-w-7xl py-16 lg:py-32 px-4'>

                {/* Título y texto introductorio */}
                <header className='pb-8 space-y-8'>
                    <h2 className='text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl text-center'>
                        A Seamless Referral Process
                    </h2>
                    <p className='text-xl font-semibold font-inter text-[#0a2a54] md:text-2xl text-center'>
                        Referring is quick and easy. Just the way it should be.
                    </p>
                </header>

                <div className="relative">
                    {/* Desktop connector line */}
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#3c8dbc]/20 hidden md:block"></div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-4 font-inter">
                        {/* Step 1 */}
                        <div className="relative flex flex-col items-center">
                            <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#3c8dbc] text-white mb-4">
                                <span className="text-2xl font-bold text-[#3c8dbc]">1</span>
                            </div>
                            <div className="w-full bg-white border-none shadow-sm lg:h-[220px]">
                                <div className="flex flex-col gap-4 p-6 text-center">
                                    <h3 className="text-xl font-semibold text-[#0a2a54]">Submit a Referral</h3>
                                    <p className="text-brand-secondary">
                                        Use our online referral form or send patient information securely through TDO.
                                    </p>

                                </div>
                                <div className="flex items-end justify-center text-[#3c8dbc]">
                                    <Send className="h-6 w-6 mr-2" />
                                    <Link href="#referral-form"><span>Submit a Referral</span></Link>
                                </div>


                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative flex flex-col items-center">
                            <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#3c8dbc] text-white mb-4">
                                <span className="text-2xl font-bold text-[#3c8dbc]">2</span>
                            </div>
                            <div className="w-full bg-white border-none shadow-sm lg:h-[220px]">
                                <div className="flex flex-col gap-4 p-6 text-center">
                                    <h3 className="text-xl font-semibold text-[#0a2a54]">We Contact the Patient</h3>
                                    <p className="text-brand-secondary">
                                        We reach out to schedule an appointment and explain the procedure in detail.
                                    </p>
                                </div>
                                <div className=" flex items-end justify-center text-[#3c8dbc]">
                                    <Clock className="h-6 w-6 mr-2" />
                                    <span>Usually within 24 hours</span>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative flex flex-col items-center">
                            <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#3c8dbc] text-white mb-4">
                                <span className="text-2xl font-bold text-[#3c8dbc]">3</span>
                            </div>
                            <div className="w-full bg-white border-none shadow-sm lg:h-[220px]">
                                <div className="flex flex-col gap-4 p-6 text-center">
                                    <h3 className="text-xl font-semibold text-[#0a2a54]">Treatment & Updates</h3>
                                    <p className="text-brand-secondary">
                                        We perform the endodontic treatment while keeping you informed of progress.
                                    </p>

                                </div>
                                <div className="flex items-center justify-center text-[#3c8dbc]">
                                    <MessageCircle className="h-6 w-6 mr-2" />
                                    <span>Regular communication</span>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="relative flex flex-col items-center">
                            <div className="zz-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#3c8dbc] text-white mb-4">
                                <span className="text-2xl font-bold text-[#3c8dbc]">4</span>
                            </div>
                            <div className="w-full bg-white border-none shadow-sm lg:h-[220px]">
                                <div className="flex flex-col gap-4 p-6 text-center">
                                    <h3 className="text-xl font-semibold text-[#0a2a54]">Returning the Patient</h3>
                                    <p className="text-brand-secondary">
                                        Aftercare instructions are provided, and we send you a complete case report.
                                    </p>

                                </div>
                                <div className="flex items-center justify-center text-[#3c8dbc]">
                                    <FileText className="h-6 w-6 mr-2" />
                                    <span>Detailed documentation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-8">
                    <Link href="">
                        <button className="cursor-pointer text-[#3c8dbc] border-2 border-[#3c8dbc] px-6 py-2 font-inter text-lg font-semibold rounded-md hover:bg-primary/70 ease-in-out duration-300">
                            Refer Now
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ReferralProcess