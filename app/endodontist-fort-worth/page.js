import Hero from '../components/Hero'
import DrHorn from '@/public/images/about-us/DrHorn.webp'
import { trustAboutUs } from '../data/TrustData'
import Testimonials from '../components/Testimonials'
import { testimonialsMain } from '../data/testimonials'
import Faqs from '../components/Faqs'
import { faqsAboutUs } from '../data/faqsHome'
import ParallaxSection from '../components/ParallaxSection'
import drHorn from '@/public/images/about-us/Neal.webp'
import WhyTrustUs from '../procedures/components/WhyTrustUs'
import Services from '../components/home/Services'
import { services } from '../data/services'




const EndodontistFortWorthPage = () => {
    return (
        <>
            <Hero title="Trusted Endodontist in Fort Worth"
                subtitle="Advanced care for tooth pain, infections, and root canal treatment"
                primaryButtonText="Book An Appointment"
                primaryButtonLink="/appointments"
                secondaryButtonText="Refer Now"
                secondaryButtonLink="/referrals"
                imageSrc={DrHorn}
                imageAlt="Dr. Neal Horn at Southside Endodontics" />
            <Services title="Our Endodontic Procedures"
                subtitle="We offer a comprehensive range of endodontic treatments."
                services={services}
                showButton={true} // o false si no quieres mostrar el botón
                buttonText="See All Procedures" // opcional, puedes personalizarlo
                buttonLink="/procedures" // opcional, puedes cambiar el link
            />
            <WhyTrustUs cards={trustAboutUs}
                title="Why Trust Southside Endodontics"
                subtitle="Dr. Horn combines clinical expertise with a compassionate approach."
                bgColor="bg-[#3c8dbc]/5"
                mdCols={4} />
            <Testimonials data={testimonialsMain}
                title="What Our Patients and Referring Doctors Say"
                subtitle="We are proud to have earned the trust of our patients and referring doctors."
                showCTA={false} />

            <Faqs title="Frequently Asked Questions"
                description="What referring dentists need to know."
                items={faqsAboutUs} />
            <ParallaxSection imageSrc={drHorn}
                title="Trusted Endodontist in Fort Worth"
                description="Advanced care for tooth pain, infections, and root canal treatment"
                buttonText="Book an Appoinment" />

        </>



    )
}

export default EndodontistFortWorthPage