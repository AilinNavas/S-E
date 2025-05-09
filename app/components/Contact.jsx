'use client'
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { usePathname } from 'next/navigation'


const Contact = () => {


  const pathname = usePathname()
  const isSpanishPage = pathname.includes('/endodoncista-de-habla-hispana')
  return (

    <div className='w-full '>
      {/* Contact Information */}
      <div className="rounded-lg bg-white font-inter">
        <h3 className="mb-4 text-xl font-bold text-[#0a2a54] uppercase font-zen">{isSpanishPage ? 'Información de contacto' : 'Contact Information'}</h3>
        <div className="space-y-4 text-lg">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
            <div>
              <h4 className="font-medium text-[#0a2a54]">{isSpanishPage ? 'Dirección' : 'Address'}</h4>
              <a href="https://maps.app.goo.gl/xx2i9XrdQaAjtDbW7" target="_blank"><p className="text-[#5a6065]">1307 8th Avenue, Suite 303</p>
                <p className="text-[#5a6065]">Fort Worth, Texas 76104</p></a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
            <div>
              <h4 className="font-medium text-[#0a2a54]">{isSpanishPage ? 'Teléfono' : 'Phone'}</h4>
              <a href="tel:+8173869007"><p className="text-[#5a6065]">817-386-9007</p></a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
            <div>
              <h4 className="font-medium text-[#0a2a54]">{isSpanishPage ? 'Correo electrónico' : 'Email'}</h4>
              <a href="mailto:office@southsideendodontics.com"><p className="text-[#5a6065]">office@southsideendodontics.com
              </p></a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-[#3c8dbc]" />
            <div>
              <h4 className="font-medium text-[#0a2a54]">{isSpanishPage ? 'Horario de oficina' : 'Office Hours'}</h4>
              <p className="text-[#5a6065]">{isSpanishPage ? 'Lunes - Jueves : 8h - 17h' : 'Monday - Thursday: 8am - 5pm'}</p>
              <p className="text-[#5a6065]">{isSpanishPage ? 'Viernes - Sábado : Cerrado' : 'Friday - Saturday: Closed'}</p>
            </div>
          </div>
     
        </div>
      </div>
    </div>

  )
}

export default Contact