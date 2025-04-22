

import { GraduationCap, School, Briefcase } from 'lucide-react'

const timeline = [
    {
        icon: <School className="w-8 h-8 text-[#3c8dbc]" />,
        title: 'Education & Early Years',
        description:
            'Born in Alexandria, Louisiana, Dr. Horn later moved to Tyler, Texas, where he attended middle and high school. He pursued a degree in molecular biology at Brigham Young University. During his studies, he spent two years in Argentina as a missionary, becoming fluent in Spanish.',
    },
    {
        icon: <GraduationCap className="w-8 h-8 text-[#3c8dbc]" />,
        title: 'Dental School & Specialization',
        description:
            'Dr. Horn earned his Doctor of Dental Surgery (DDS) degree from the University of Texas Health Science Center at Houston School of Dentistry. He then completed a General Practice Residency at UCLA, gaining advanced training in complex dental cases. His passion for endodontics led him to specialize further, completing a residency in Endodontics at UT Houston.',
    },
    {
        icon: <Briefcase className="w-8 h-8 text-[#3c8dbc]" />,
        title: 'Professional Experience',
        description:
            'For 15 years, Dr. Horn practiced endodontics in the Mid-Cities area before moving to Fort Worth. He is excited to serve the Southside community and collaborate with other healthcare professionals in the Medical District.',
    },
]

const Journey = () => {
    return (
     
        <section className="bg-[#ffffff]">
            <div className=" mx-auto max-w-7xl py-16 lg:py-32 px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a2a54] text-center font-zen mb-4 uppercase"
                >  Dr. Horn's Journey in Dentistry
                </h2>
                <p  className="text-[#5a6065] text-lg md:text-xl text-center font-inter mb-8 mx-auto"
                >
                    From his early education to his specialized training in endodontics, Dr. Horn has dedicated his career to excellence in dental care.
                </p>

                <div className="relative mx-auto">
                    <div className="absolute left-[50%] top-0 bottom-0 hidden w-0.5 -translate-x-1/2 bg-[#3c8dbc]/40 md:block"></div>

                    <div className="space-y-8">
                        {timeline.map((step, i) => (
                            <div key={i} className="relative">
                                <div
                                    className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                        } items-center gap-8`}
                                >
                                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#3c8dbc]/10 text-xl font-bold text-white shadow-lg md:mx-8">
                                        {step.icon}
                                    </div>
                                    <div
                                        className={`rounded-lg border border-gray-200 shadow-[0px_2px_10px_0px_rgba(60,_141,_188,_0.5)] bg-white p-6  md:w-[calc(50%-4rem)] ${i % 2 === 0 ? "md:text-left" : "md:text-right"
                                            }`}
                                    >
                                        <h3 className="mb-2 text-xl font-inter text-[#1D3557]">{step.title}
                                        </h3>
                                        <p className="text-[#5a6065] font-inter">{step.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Journey
