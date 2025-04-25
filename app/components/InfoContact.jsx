import Contact from "./Contact"
import DentalClinicMap from "./home/DentalClinicMap"
import Map2 from "./Map2"

const InfoContact = () => {
    return (
        <section className='bg-[#f7f7f7]]'>
            <div className='mx-auto max-w-7xl py-16 lg:py-32  px-4 flex flex-col justify-center items-center'>
                <header className='pb-8 space-y-8'>
                    <h2 className='text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl text-center'>Find Us</h2>
                    <p className='text-xl font-semibold font-inter text-[#5a6065] md:text-2xl text-center'>
                    We're conveniently located in Fort Worth to serve you and your family.
          </p>
                </header>

                <div className=" md:w-3xl md:p-4 lg:p-0 lg:w-7xl flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:items-start lg:space-x-16 ">

                    <div className="lg:w-1/2">
                        {/* <Map2 /> */}
                        <DentalClinicMap />
                    </div>

                    <div className="lg:w-1/2">
                        <Contact />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default InfoContact