import Hero from "../components/Hero"
import DrHorn from '@/public/images/about-us/DrHorn.webp'
import TrustPatients from "./components/TrustPatients"
import Expect from "./components/Expect"
import Testimonials from "../components/Testimonials"
import { testimonialsMain } from "../data/testimonials";
import Insurance from "./components/Insurance"
import ParallaxSection from "../components/ParallaxSection"
import men from '@/public/images/men.webp'
import Faqs from "../components/Faqs"
import { faqsForPatients } from "../data/faqsHome"
import { trustPatients } from "../data/TrustData"


const PatientsPage = () => {
    return (
        <>
            <Hero
                title="Compassionate Endodontic Care You Can Trust"
                subtitle="Everything You Need to Know Before, During, and After Your Visit."
                primaryButtonText="Book An Appointment"
                primaryButtonLink="/appointments"
                secondaryButtonText="Insurance"
                secondaryButtonLink="/"
                imageSrc={DrHorn}
                imageAlt="Dr. Neal Horn at Southside Endodontics" />
            <TrustPatients cards={trustPatients} />
            <Expect />
            <Testimonials data={testimonialsMain}
                title="What Patients & Doctors Say About Dr. Horn"
                showCTA={false} />

            <Insurance />

            <ParallaxSection
                imageSrc={men}
                title="Need Help?"
                description="Call our office for immediate assistance or to schedule an appointment."
                buttonText="Call Us: (817) 555-1234" />
            <Faqs title="Have Questions? We Have Answers."
                description="Find answers to common endodontic questions."
                items={faqsForPatients} />
        </>
    )
}

export default PatientsPage