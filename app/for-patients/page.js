import Hero from "../components/Hero"
import DrHorn from '@/public/images/about-us/DrHorn.webp'
import Expect from "./components/Expect"
import Testimonials from "../components/Testimonials"
import { testimonialsForDPatients3 } from "../data/testimonials";
import Insurance from "./components/Insurance"
import ParallaxSection from "../components/ParallaxSection"
import office from "@/public/images/about-us/before.webp"
import Faqs from "../components/Faqs"
import { faqsForPatients } from "../data/faqsHome"
import { trustPatients } from "../data/TrustData"
import WhyTrustUs from "../procedures/components/WhyTrustUs"


const PatientsPage = () => {
    return (
        <>
            <Hero
                title="Compassionate Endodontic Care"
                subtitle="Everything you need to know before, during, and after your visit."
                primaryButtonText="Book An Appointment"
                primaryButtonLink="/appointments"
                secondaryButtonText="Emergency Care"
                secondaryButtonLink="tel:+8173869007"
                imageSrc={DrHorn}
                imageAlt="Dr. Neal Horn at Southside Endodontics" />
            <WhyTrustUs cards={trustPatients}
                title="Why Patients Choose Southside Endodontics"
                subtitle="Dr. Horn combines clinical expertise with a compassionate approach."
                bgColor="bg-white"
                mdCols={4} />
            <Expect />
            <Testimonials data={testimonialsForDPatients3}
                title="What Patients & Doctors Say About Dr. Horn"
                showCTA={false} />

            <Insurance />

            <ParallaxSection
                imageSrc={office}
                title="Compassionate Endodontic Care You Can Trust"
                description="Call our office for immediate assistance or to schedule an appointment."
                buttonText="Call Us: (817) 386-9007" 
                buttonLink={"tel:+8173869007"}/>
            <Faqs title="Have Questions? We Have Answers."
                description="Find answers to common endodontic questions."
                items={faqsForPatients} />
        </>
    )
}

export default PatientsPage