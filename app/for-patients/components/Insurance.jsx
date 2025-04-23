
import { CreditCard, FileText, Calendar } from 'lucide-react'
import DoubleCrrousel from './DoubleCrrousel'

const Insurance = () => {


    return (
        <section className="bg-white">
            <div className="mx-auto max-w-7xl py-16 lg:py-32 px-4">
                <div className="mb-8 text-center">
                    <h2 className="text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl mb-8">
                        Affordable Care with Flexible Payment Options
                    </h2>
                    <p className="text-[#5a6065] text-lg md:text-xl text-center font-inter mb-8 mx-auto">
                        We accept most insurance plans and offer flexible payment options. Our team will help verify your coverage
                        and discuss financing options.
                    </p>
                </div>

                {/* <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6 font-zen uppercase">
                    <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                        <span className="text-xl font-bold text-[#0a2a54]">Aetna</span>
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                        <span className="text-xl font-bold text-[#0a2a54]">Cigna</span>
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                        <span className="text-xl font-bold text-[#0a2a54]">Geha</span>
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                        <span className="text-xl font-bold text-[#0a2a54]">Humana</span>
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                        <span className="text-xl font-bold text-[#0a2a54]">DeltaDental</span>
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                        <span className="text-xl font-bold text-[#0a2a54]">DeltaCare</span>
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                        <span className="text-xl font-bold text-[#0a2a54]">Unicare</span>
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                        <span className="text-xl font-bold text-[#0a2a54]">Ameritas</span>
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                        <span className="text-xl font-bold text-[#0a2a54]">AlwaysCare</span>
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                        <span className="text-xl font-bold text-[#0a2a54]">MetLife</span>
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                        <span className="text-xl font-bold text-[#0a2a54]">Unum</span>
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                        <span className="text-xl font-bold text-[#0a2a54]">Guardian</span>
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                        <span className="text-xl font-bold text-[#0a2a54]">Careington</span>
                    </div>
                    <div className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm">
                        <span className="text-xl font-bold text-[#0a2a54]">United Healthcare</span>
                    </div>
                </div> */}
                <DoubleCrrousel />

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 font-inter">
                    <div className="bg-white border-none shadow-sm">
                        <div className="flex flex-col items-center gap-4 p-6 text-center">
                            <div className="rounded-full bg-[#3c8dbc]/10 p-4">
                                <CreditCard className="h-8 w-8 text-[#3c8dbc]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#0a2a54]">Insurance Accepted</h3>
                            <p className="text-[#5a6065]">
                                We work with most major insurance providers to ensure you get the maximum benefits.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white border-none shadow-sm">
                        <div className="flex flex-col items-center gap-4 p-6 text-center">
                            <div className="rounded-full bg-[#3c8dbc]/10 p-4">
                                <FileText className="h-8 w-8 text-[#3c8dbc]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#0a2a54]">Transparent Pricing</h3>
                            <p className="text-[#5a6065]">
                                We provide clear cost estimates before treatment so there are no surprises.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white border-none shadow-sm">
                        <div className="flex flex-col items-center gap-4 p-6 text-center">
                            <div className="rounded-full bg-[#3c8dbc]/10 p-4">
                                <Calendar className="h-8 w-8 text-[#3c8dbc]" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#0a2a54]">Flexible Payment Plans</h3>
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