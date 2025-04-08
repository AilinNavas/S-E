import Image from "next/image"
import office from "@/public/office.webp"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const Contact = () => {
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-7xl py-16 lg:py-32  px-4 flex flex-col justify-center items-center'>
        <header className='pb-8'>
          <h2 className='text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl'>Find Us</h2>
        </header>
        <div className="flex flex-col lg:flex-row">
          <div className='lg:w-1/2 p-2 '>
            <Image src={office} alt="office-manager" className="rounded-md" />

          </div>
          <div className='lg:w-1/2 lg:ml-8'>

            {/* Contact Information */}
            <div className="rounded-lg bg-white p-6 shadow-sm font-inter">
              <h3 className="mb-4 text-xl font-bold text-[#0a2a54] uppercase">Contact Information</h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                  <div>
                    <h4 className="font-medium text-[#0a2a54]">Address</h4>
                    <p className="text-[#5a6065]">123 Main Street, Fort Worth, TX 76104</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                  <div>
                    <h4 className="font-medium text-[#0a2a54]">Phone</h4>
                    <p className="text-[#5a6065]">(817) 555-1234</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                  <div>
                    <h4 className="font-medium text-[#0a2a54]">Email</h4>
                    <p className="text-[#5a6065]">info@southsideendo.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                  <div>
                    <h4 className="font-medium text-[#0a2a54]">Office Hours</h4>
                    <p className="text-[#5a6065]">Monday - Thursday: 8am - 5pm</p>
                    <p className="text-[#5a6065]">Friday: 8am - 2pm</p>
                    <p className="text-[#5a6065]">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>


          </div>


        </div>
      </div>
    </section>
  )
}

export default Contact