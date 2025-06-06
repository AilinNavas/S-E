import Image from "next/image"
import { CheckCircle } from "lucide-react"
import before from "@/public/images/about-us/2.webp"
import during from "@/public/images/about-us/3.webp"
import after from "@/public/images/about-us/1.webp"


const Expect = () => {
    return (
        <section className="bg-[#3c8dbc]/5">
            <div className="mx-auto max-w-7xl py-16 lg:py-32 px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl mb-8">
                        Your Treatment Journey: What to Expect
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 font-inter">
                    {/* Before Your Visit */}
                    <div className="bg-white border-none shadow-sm">
                        <div className="flex flex-col gap-6 p-6">
                            <div className="flex items-center justify-center gap-4">
                                <h3 className="text-2xl font-semibold text-[#0a2a54]">Before your treatment</h3>
                            </div>
                            <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                                <Image
                                    src={before}
                                    alt="Patient preparing for endodontic treatment"
                                    fill
                                    className="object-center"
                                />
                            </div>
                            
                            <div className="flex flex-col items-center gap-8">
                            <p className="text-[#5a6065] text-center">
                            
                            To ensure safe and effective care, you'll complete a patient form before the procedure.
                            </p>
                            <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                                        <span className="text-[#5a6065]">Efficient check-in process</span>
                                    </li>
                                   
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                                        <span className="text-[#5a6065]">Avoid eating beforehand</span>
                                    </li>
                                </ul>
                        </div>
                        </div>
                    </div>

                    {/* During Your Treatment */}
                    <div className="bg-white border-none shadow-sm">
                        <div className="flex flex-col gap-6 p-6">
                            <div className="flex items-center justify-center gap-4">
                                <h3 className="text-2xl font-semibold text-[#0a2a54]">During your treatment</h3>
                            </div>
                            <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                                <Image
                                    src={during}
                                    alt="Endodontic treatment process"
                                    fill
                                    className="object-fill"
                                />
                            </div>
                            <div className="flex flex-col items-center gap-8">
                                <p className="text-[#5a6065] text-center">
                                    Your comfort is our priority. Expect a painless procedure with advanced digital imaging and expert
                                    care.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                                        <span className="text-[#5a6065]">Thorough numbing for comfort</span>
                                    </li>
                                   
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                                        <span className="text-[#5a6065]">Typically 60-90 minutes per visit</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Aftercare & Recovery */}
                    <div className="bg-white border-none shadow-sm">
                        <div className="flex flex-col gap-6 p-6">
                            <div className="flex items-center justify-center gap-4">
                                <h3 className="text-2xl font-semibold text-[#0a2a54]">Aftercare & recovery</h3>
                            </div>
                            <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                                <Image
                                    src={after}
                                    alt="Post-treatment care"
                                    fill
                                    className="object-center"
                                />
                            </div>
                            <div className="flex flex-col items-center gap-8">
                                <p className="text-[#5a6065] text-center">
                                    Post-treatment care is simple. Avoid chewing on the treated tooth until fully restored by your general
                                    dentist.
                                </p>
                                <a
                                    href="/Comprehensive Guide-for-Post-Root Canal Care and Pain Management.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=""
                                >
                                    <button className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/90 ease-in duration-300">
                                        View Aftercare Instructions
                                    </button></a>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}

export default Expect