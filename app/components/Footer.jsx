// import React from 'react'
// import Link from 'next/link'
// import { MapPin, Phone, Mail, Clock } from "lucide-react"


// const Footer = () => {
//   return (
//     <footer className="w-full bg-[#0a2a54] pt-12 text-white ">
//       <div className="max-w-7xl mx-auto px-4 md:px-6 ">
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">


//           <div className=''>
//             <h3 className="mb-4 text-xl font-bold font-zen">SOUTHSIDE ENDODONTICS</h3>
//             <a href="https://maps.app.goo.gl/xx2i9XrdQaAjtDbW7" target="_blank">
//               <p className="mb-2 flex items-center gap-2 cursor-pointer">
//                 <MapPin className="h-5 w-5 flex-shrink-0 text-white" />
//                 1307 8th Avenue, Suite 303
//               </p>
//               <p className="mb-2">
//                 Fort Worth, TX 76104
//               </p>
//             </a>
//             <a href="tel:+8173869007">
//               <p className="mb-2 flex items-center gap-2 cursor-pointer">
//                 <Phone className="h-5 w-5 flex-shrink-0 text-white" />
//                 817-386-9007
//               </p>
//             </a>
//             <a href="mailto:office@southsideendodontics.com">
//               <p className='flex items-center gap-2 cursor-pointer'>
//                 <Mail className="h-5 w-5 flex-shrink-0 text-white" />
//                 office@southsideendodontics.com
//               </p>
//             </a>
//           </div>



//           <div>
//             <h3 className="mb-4 text-xl font-bold">Information</h3>
//             <p className="mb-2 flex items-center gap-2 "> <Clock className="h-5 w-5 flex-shrink-0 text-white" />Office Hours</p>
//             <p className="mb-2">Monday - Thursday: 8am - 5pm</p>
//             <p className="mb-2">Friday - Saturday - Sunday: Closed</p>


//           </div>
//           <div className='hidden lg:block'>
//             <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/about-us" className="hover:underline">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/procedures" className="hover:underline">
//                   Procedures
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/for-patients" className="hover:underline">
//                   For Patients
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/for-doctors" className="hover:underline">
//                   For Doctors
//                 </Link>
//               </li>

//               <li>
//                 <Link href="/contact" className="hover:underline">
//                   Contact Us
//                 </Link>
//               </li>

//             </ul>
//           </div>
//         </div>

//       </div>

//       <div className='bg-[#0a2a54] pb-12'>
//         <div className="mt-8 flex justify-center space-x-6 border-t border-white/20 pt-8">

//           <Link href="#" aria-label="Facebook">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="h-6 w-6 text-white"
//             >
//               <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
//             </svg>
//           </Link>

//         </div>
//         <div className="mt-8 text-center text-sm text-white">
//           <p>&copy; {new Date().getFullYear()} Southside Endodontics. All rights reserved.</p>

//           {/* Hidden structured data for SEO */}
//           <div className="hidden" aria-hidden="true">
//             <script
//               type="application/ld+json"
//               dangerouslySetInnerHTML={{
//                 __html: `
//            {
//              "@context": "https://schema.org",
//              "@type": "Dentist",
//              "name": "Southside Endodontics",
//              "image": "https://southsideendo.com/logo.png",
//              "address": {
//                "@type": "PostalAddress",
//                "streetAddress": "1307 8th Avenue, Suite 303",
//                "addressLocality": "Fort Worth",
//                "addressRegion": "TX",
//                "postalCode": "76104",
//                "addressCountry": "US"
//              },
//              "geo": {
//                "@type": "GeoCoordinates",
//                "latitude": 32.7555,
//                "longitude": -97.3308
//              },
//              "url": "https://southsideendo.com",
//              "telephone": "(817) 3869007",
//              "priceRange": "$$",
//              "openingHoursSpecification": [
//                {
//                  "@type": "OpeningHoursSpecification",
//                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
//                  "opens": "08:00",
//                  "closes": "17:00"
//                },
//                {
//                  "@type": "OpeningHoursSpecification",
//                  "dayOfWeek": "Friday",
//                  "opens": "08:00",
//                  "closes": "14:00"
//                }
//              ],
//              "sameAs": [
//                "https://www.facebook.com/southsideendodontics",
//                "https://www.instagram.com/southsideendo"
//              ]
//            }
//          `,
//               }}
//             />
//           </div>
//         </div>
//       </div>


//     </footer>
//   )
// }

// export default Footer

import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a2a54] pt-12 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* First Column - Contact Info */}
          <div className="text-center lg:text-left">
            <h3 className="mb-4 text-2xl font-bold font-zen">SOUTHSIDE ENDODONTICS</h3>
            <a href="https://maps.app.goo.gl/xx2i9XrdQaAjtDbW7" target="_blank" rel="noopener noreferrer">
              <p className="mb-2 flex flex-col lg:flex-row items-center lg:items-start gap-2 cursor-pointer">
                <span className="flex items-center mb-1 lg:mb-0">
                  <MapPin className="h-5 w-5 flex-shrink-0 text-white mr-1" />
                1307 8th Avenue, Suite 303</span>
              </p>
              <p className="mb-2">Fort Worth, TX 76104</p>
            </a>
            <a href="tel:+8173869007">
              <p className="mb-2 flex flex-col lg:flex-row items-center lg:items-start gap-2 cursor-pointer">
                <span className="flex items-center mb-1 lg:mb-0">
                  <Phone className="h-5 w-5 flex-shrink-0 text-white mr-1" />
                  817-386-9007
                </span>

              </p>
            </a>
            <a href="mailto:office@southsideendodontics.com">
              <p className="flex flex-col lg:flex-row items-center lg:items-start gap-2 cursor-pointer">
                <span className="flex items-center mb-1 lg:mb-0">
                  <Mail className="h-5 w-5 flex-shrink-0 text-white mr-1" />
                  office@southsideendodontics.com</span>
              </p>
            </a>
          </div>

          {/* Second Column - Office Hours */}
          <div className="text-center lg:text-left">
            <h3 className="mb-4 text-xl font-bold">Information</h3>
            <p className="mb-2 flex flex-col lg:flex-row items-center lg:items-start gap-2">
              <span className="flex items-center mb-1 lg:mb-0">
                <Clock className="h-5 w-5 flex-shrink-0 text-whit mr-1" />
                Office Hours
              </span>

            </p>
            <p className="mb-2">Monday - Thursday: 8am - 5pm</p>
            <p className="mb-2">Friday - Saturday - Sunday: Closed</p>
          </div>

          {/* Third Column - Quick Links (Desktop Only) */}
          <div className="hidden lg:block">
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/procedures" className="hover:underline">
                  Procedures
                </Link>
              </li>
              <li>
                <Link href="/for-patients" className="hover:underline">
                  For Patients
                </Link>
              </li>
              <li>
                <Link href="/for-doctors" className="hover:underline">
                  For Doctors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>


        </div>
      </div>

      <div className="bg-[#0a2a54] pb-12">
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
        </div>
        <div className="mt-8 text-center text-sm text-white">
          <p>&copy; {new Date().getFullYear()} Southside Endodontics. All rights reserved.</p>

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
               "streetAddress": "1307 8th Avenue, Suite 303",
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
             "telephone": "(817) 3869007",
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
