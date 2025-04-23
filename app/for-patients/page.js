import Hero from "../components/Hero"
import DrHorn from '@/public/images/about-us/DrHorn.webp'
import TrustPatients from "./components/TrustPatients"
import Expect from "./components/Expect"
import Testimonials from "../components/Testimonials"
import { testimonialsMain } from "../data/testimonials";
import Insurance from "./components/Insurance"
import ParallaxSection from "../components/ParallaxSection"
import office from '@/public/images/about-us/during.webp'
import Faqs from "../components/Faqs"
import { faqsForPatients } from "../data/faqsHome"


const PatientsPage = () => {
    return (
        <>
            <Hero
                title="Compassionate Endodontic Care You Can Trust"
                subtitle="Everything You Need to Know Before, During, and After Your Visit. At Southside Endodontics, we make your treatment experience as smooth and stress-free as possible. Here's what to expect and how to prepare for your visit."
                primaryButtonText="Book An Appointment"
                primaryButtonLink="/appointments"
                secondaryButtonText="Insurance"
                secondaryButtonLink="/"
                imageSrc={DrHorn}
                imageAlt="Dr. Neal Horn at Southside Endodontics" />
            <TrustPatients />
            <Expect />
            <Testimonials data={testimonialsMain}
                title="What Patients & Doctors Say About Dr. Horn"
                showCTA={false} />

            <Insurance />
           
            <ParallaxSection
                imageSrc={office}
                title="Need Help?"
                description="Call our office for immediate assistance or to schedule an appointment."
                buttonText="Call Us: (817) 555-1234" />
            <Faqs title="Have Questions? We Have Answers."
                description=""
                items={faqsForPatients} />
        </>
    )
}

export default PatientsPage