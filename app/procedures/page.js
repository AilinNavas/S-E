import Hero from "../components/Hero"
import DrHorn from '@/public/images/about-us/DrHorn.webp'
import Services from "../components/home/Services"
import { services } from "../data/services"
import YourJourney from "./components/YourJourney"
import WhyTrustUs from "./components/WhyTrustUs"
import { trustServices } from "../data/TrustData"
import Testimonials from "../components/Testimonials"
import { testimonialsMain } from "../data/testimonials"
import Faqs from "../components/Faqs"
import { faqsForPatients } from "../data/faqsHome"
import ParallaxSection from "../components/ParallaxSection"
import smile from '@/public/images/smile.webp'

const ProceduresPage = () => {
  return (
    <>
      <Hero
        title="Endodontic Care for a Healthier, Pain-Free Smile"
        subtitle="Advanced root canal therapy and endodontic treatments delivered with precision, comfort, and care."
        primaryButtonText="Book An Appointment"
        primaryButtonLink="/appointments"
        secondaryButtonText="Refer Now"
        secondaryButtonLink="/referrals"
        imageSrc={DrHorn}
        imageAlt="Dr. Neal Horn at Southside Endodontics"
      />
      <Services
        title="Endodontic Care Designed for Your Comfort"
        subtitle="We offer endodontic treatments to save your natural teeth and relieve pain."
        services={services}
        showButton={false} // o false si no quieres mostrar el botón
        buttonText="" // opcional, puedes personalizarlo
        buttonLink="" // opcional, puedes cambiar el link
      />
      <WhyTrustUs cards={trustServices}/>
      <Testimonials Testimonials data={testimonialsMain}
        title="Real Stories, Real Smiles"
        subtitle="Real experiences from our patients and dentists."
        showCTA={false} />
      <YourJourney />
      <ParallaxSection imageSrc={smile}
            title="Save Your Teeth"
            description="Schedule your consultation and transform your dental health."
            buttonText="Book an Appointment" />
      <Faqs title="Have Questions? We Have Answers."
        description="Find answers to common endodontic questions."
        items={faqsForPatients} />

    </>
  )
}

export default ProceduresPage