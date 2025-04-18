import React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from "lucide-react"


const Footer = () => {
  return (
    <footer className="w-full bg-[#0a2a54] pt-12 text-white ">
      <div className="max-w-7xl mx-auto px-4 md:px-6 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className=''>
            <h3 className="mb-4 text-xl font-bold font-zen">SOUTHSIDE ENDODONTICS</h3>
            <p className="mb-2 flex items-center gap-2 "> <MapPin className="h-5 w-5 flex-shrink-0 text-white" />1307 8th Avenue, Suite 303</p>
            <p className="mb-2">Fort Worth, TX 76104</p>
            <p className="mb-2 flex items-center gap-2"><Phone className="h-5 w-5 flex-shrink-0 text-white" /> 817-386-9007</p>
            <p className='flex items-center gap-2'>  <Mail className="h-5 w-5 flex-shrink-0 text-white" />office@southsideendodontics.com
            </p>



          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Information</h3>
            <p className="mb-2 flex items-center gap-2 "> <Clock className="h-5 w-5 flex-shrink-0 text-white" />Office Hours</p>
            <p className="mb-2">Monday - Thursday: 8am - 5pm</p>
            <p className="mb-2">Friday - Saturday - Sunday: Closed</p>


          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:underline">
                  Procedures
                </Link>
              </li>
              <li>
                <Link href="#patients" className="hover:underline">
                  For Patients
                </Link>
              </li>
              <li>
                <Link href="#doctors" className="hover:underline">
                  For Doctors
                </Link>
              </li>

              <li>
                <Link href="#contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>
        </div>








      </div>

      <div className='bg-[#0a2a54] pb-12'>
        <div className="mt-8 flex justify-center space-x-6 border-t border-white/20 pt-8">

          <Link href="#" aria-label="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-white"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </Link>
          <Link href="#" aria-label="Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-white"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </Link>
          <Link href="#" aria-label="Google My Business">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-white"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v8" />
              <path d="M8 12h8" />
            </svg>
          </Link>
        </div>
        <div className="mt-8 text-center text-sm text-white">
          <p>&copy; {new Date().getFullYear()} Southside Endodontics. All rights reserved.</p>
          <p className="mt-2">
            <span className="font-medium text-white">Tagline:</span> Trusted, Community-Oriented Care for Every Patient.
          </p>

          {/* Hidden structured data for SEO */}
          <div className="hidden" aria-hidden="true">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: `
           {
             "@context": "https://schema.org",
             "@type": "Dentist",
             "name": "Southside Endodontics",
             "image": "https://southsideendo.com/logo.png",
             "address": {
               "@type": "PostalAddress",
               "streetAddress": "123 Main Street",
               "addressLocality": "Fort Worth",
               "addressRegion": "TX",
               "postalCode": "76104",
               "addressCountry": "US"
             },
             "geo": {
               "@type": "GeoCoordinates",
               "latitude": 32.7555,
               "longitude": -97.3308
             },
             "url": "https://southsideendo.com",
             "telephone": "(817) 555-1234",
             "priceRange": "$$",
             "openingHoursSpecification": [
               {
                 "@type": "OpeningHoursSpecification",
                 "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                 "opens": "08:00",
                 "closes": "17:00"
               },
               {
                 "@type": "OpeningHoursSpecification",
                 "dayOfWeek": "Friday",
                 "opens": "08:00",
                 "closes": "14:00"
               }
             ],
             "sameAs": [
               "https://www.facebook.com/southsideendodontics",
               "https://www.instagram.com/southsideendo"
             ]
           }
         `,
              }}
            />
          </div>
        </div>
      </div>


    </footer>
  )
}

export default Footer