import { Clipboard, CheckCircle, Lock } from "lucide-react"
import Link from "next/link"

const Referring2 = () => {

    const benefits = [
        {
          
            title: "Timely, Custom Reports",
            subtitle: "Tailored reports for each patient with quick updates.",
        },
        {
            
            title: "Seamless Communication",
            subtitle: "We ensure that you are always up-to-date with your patient's treatment progress.",
        },
        {
            
            title: "Efficient, HIPAA-Compliant Process",
            subtitle: "Minimize paperwork and administrative overhead.",
        },

    ]

    return (
        <section className="relative py-16 md:py-24">
            {/* Imagen de fondo con overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{
                    backgroundImage: "url('/images/refer-section/refering-1.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/80"></div>
            </div>

            {/* Contenido */}
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Título y subtítulo dinámicos */}
                <div className="text-center mb-8 space-y-8">
                    <h2 className="text-white font-zen font-bold uppercase text-3xl md:text-5xl text-center">For Referring Doctors</h2>
                    <p className="text-xl font-semibold font-inter text-center text-white md:text-2xl">Let us help your patients get the best care possible.</p>
                </div>

                {/* Síntomas dinámicos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-inter">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="backdrop-blur-sm border border-white/20 rounded-lg p-6 transition-all duration-300 hover:bg-white/25 hover:transform hover:-translate-y-1 hover:shadow-lg"
                        >
                            <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                            <p className="text-gray-200">{benefit.subtitle}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center my-8">
                    <Link href="/appointments">
                    <button className=" cursor-pointer text-[#3c8dbc] border-2 border-[#3c8dbc] px-6 py-2 font-inter text-lg font-semibold rounded-md hover:bg-[#3c8dbc]/20 ease-in-out duration-300">
          Refer a Patient
        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Referring2