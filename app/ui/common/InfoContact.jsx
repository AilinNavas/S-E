import Contact from "./Contact"
import Maps from "./Maps"

const InfoContact = () => {
    return (
        <section className='bg-white'>
            <div className='mx-auto max-w-7xl py-16 lg:py-32  px-4 flex flex-col justify-center items-center'>
                <header className='pb-8'>
                    <h2 className='text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl '>Find Us</h2>
                </header>

                <div className="md:w-3xl md:p-4 ld:p-0 lg:w-7xl flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-16 ">

                    <div className="lg:w-1/2">
                        <Maps />
                    </div>

                    <div className="lg:w-1/2 ">
                        <Contact />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default InfoContact