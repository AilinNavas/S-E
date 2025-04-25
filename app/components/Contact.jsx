import { MapPin, Phone, Mail, Clock } from "lucide-react"


const Contact = () => {
  return (
  
          <div className='w-full '>  
            {/* Contact Information */}
            <div className="rounded-lg bg-white font-inter">
              <h3 className="mb-4 text-xl font-bold text-[#0a2a54] uppercase font-zen">Contact Information</h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                  <div>
                    <h4 className="font-medium text-[#0a2a54]">Address</h4>
                    <a href="https://maps.app.goo.gl/xx2i9XrdQaAjtDbW7" target="_blank"><p className="text-[#5a6065]">1307 8th Avenue, Suite 303</p>
                    <p className="text-[#5a6065]">Fort Worth, Texas 76104</p></a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                  <div>
                    <h4 className="font-medium text-[#0a2a54]">Phone</h4>
                    <a href="tel:+8173869007"><p className="text-[#5a6065]">817-386-9007</p></a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                  <div>
                    <h4 className="font-medium text-[#0a2a54]">Email</h4>
                    <a href="mailto:office@southsideendodontics.com"><p className="text-[#5a6065]">office@southsideendodontics.com
                    </p></a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
                  <div>
                    <h4 className="font-medium text-[#0a2a54]">Office Hours</h4>
                    <p className="text-[#5a6065]">Monday - Thursday : 8am - 5pm</p>
                    <p className="text-[#5a6065]">Friday - Saturday - Sunday : Closed</p>
                  </div>
                </div>
                <button className="cursor-pointer rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold hover:bg-[#3c8dbc]/90 ease-in duration-300">Book an Appoinment</button>
              </div>
            </div>
          </div>
    
  )
}

export default Contact