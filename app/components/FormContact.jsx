import Image from "next/image"
import office from "@/public/images/about-us/office.webp"

const FormContact = () => {
    return (
        <section className='bg-[#3c8dbc]/40'>
            <div className='mx-auto max-w-7xl py-16 lg:py-32 px-4 flex flex-col justify-center items-center'>
            <header className='pb-8'>
                    <h2 className='text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl '>Contact Us</h2>
                </header>

                <div className="lg:w-7xl flex flex-col-reverse lg:space-y-0 lg:flex-row lg:items-center lg:space-x-16">

                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <div id="appointment" className="rounded-lg bg-white p-6 shadow-sm">
                            <h3 className="mb-4 text-xl font-zen font-bold text-[#0a2a54] uppercase">Request an Appointment</h3>
                            <p className="mb-4 text-[#5a6065] font-inter text-lg">
                                Fill out the form below and we'll contact you to schedule your appointment.
                            </p>
                            <form className="space-y-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">

                                        <input
                                            id="first-name"
                                            className="w-full font-inter rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:border-[#3c8dbc] focus:outline-none focus:ring-1 focus:ring-[#3c8dbc]"
                                            placeholder="Enter your first name"
                                        />
                                    </div>
                                    <div className="space-y-2">

                                        <input
                                            id="last-name"
                                            className="w-full font-inter rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:border-[#3c8dbc] focus:outline-none focus:ring-1 focus:ring-[#3c8dbc]"
                                            placeholder="Enter your last name"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">

                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full font-inter rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:border-[#3c8dbc] focus:outline-none focus:ring-1 focus:ring-[#3c8dbc]"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="space-y-2">

                                    <input
                                        id="phone"
                                        type="tel"
                                        className="w-full font-inter rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:border-[#3c8dbc] focus:outline-none focus:ring-1 focus:ring-[#3c8dbc]"
                                        placeholder="Enter your phone number"
                                    />
                                </div>

                                {/* Best Time of Day */}
                                <div className="space-y-2">
                                    <label className="text-sm font-inter text-[#0a2a54]">Best Time of Day</label>
                                    <div className="flex gap-4">
                                        <div className="flex items-center">
                                            <input
                                                id="morning"
                                                type="checkbox"
                                                className="h-4 w-4 rounded font-inter border-gray-300 text-[#3c8dbc] focus:ring-[#3c8dbc]"
                                            />
                                            <label htmlFor="morning" className="ml-2 font-inter text-sm text-[#5a6065]">
                                                Morning
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="afternoon"
                                                type="checkbox"
                                                className="h-4 w-4 font-inter rounded border-gray-300 text-[#3c8dbc] focus:ring-[#3c8dbc]"
                                            />
                                            <label htmlFor="afternoon" className="ml-2 font-inter text-sm text-[#5a6065]">
                                                Afternoon
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Preferred Day(s) of Week */}
                                <div className="space-y-2">
                                    <label className="text-sm text-[#0a2a54] font-inter">Preferred Day(s) of Week</label>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="flex items-center">
                                            <input
                                                id="monday"
                                                type="checkbox"
                                                className="h-4 w-4 rounded font-inter border-gray-300 text-[#3c8dbc] focus:ring-[#3c8dbc]"
                                            />
                                            <label htmlFor="monday" className="ml-2 font-inter text-sm text-[#5a6065]">
                                                M
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="tuesday"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300  text-[#3c8dbc] focus:ring-[#3c8dbc]"
                                            />
                                            <label htmlFor="tuesday" className="ml-2 font-inter text-sm text-[#5a6065]">
                                                T
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="wednesday"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300  text-[#3c8dbc] focus:ring-[#3c8dbc]"
                                            />
                                            <label htmlFor="wednesday" className="ml-2 font-inter text-sm text-[#5a6065]">
                                                W
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="thursday"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-brand-accent focus:ring-brand-accent"
                                            />
                                            <label htmlFor="thursday" className="ml-2 font-inter text-sm text-[#5a6065]">
                                                Th
                                            </label>
                                        </div>
                                        <div className="flex items-center">
                                            <input
                                                id="friday"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-brand-accent focus:ring-brand-accent"
                                            />
                                            <label htmlFor="friday" className="ml-2 font-inter text-sm text-[#5a6065]">
                                                F
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">

                                    <textarea
                                        id="message"
                                        className="w-full font-inter rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent"
                                        placeholder="Tell us about your dental concerns"
                                        rows={3}
                                    ></textarea>
                                </div>

                                <p className="text-sm text-[#5a6065] italic font-inter">
                                    We will reply within one business day regarding your appointment.
                                </p>

                                <button className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/90 ease-in duration-300">Submit Request</button>
                            </form>
                        </div>

                    </div>

                    <div className="lg:w-1/2">
                        <Image src={office} alt="office" className="rounded-t-md" />

                        <div className="bg-white p-6 rounded-b-md font-inter text-[#0a2a54] text-lg"> 
                            <p>Leslie Horn, our Office Manager will contact you to answer your questions and schedule an appointment.</p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default FormContact