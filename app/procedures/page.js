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
import InsuranceSection from "../components/home/InsuranceSection"
import Insurance from "../for-patients/components/Insurance"

const ProceduresPage = () => {
  return (
    <>
      <Hero
        title="Endodontic Care for a Healthier, Pain-Free Smile"
        subtitle="Endodontic treatments delivered with precision, and care."
        primaryButtonText="Book An Appointment"
        primaryButtonLink="/contact"
        secondaryButtonText="Refer Now"
        secondaryButtonLink="https://securesite1246.tdo4endo.com/RefDocsLogin.aspx"
        imageSrc={DrHorn}
        imageAlt="Dr. Neal Horn at Southside Endodontics"
      />
      <Services
        title="Endodontic care designed for your comfort"
        subtitle="We offer endodontic treatments to save your natural teeth and relieve pain."
        services={services}
        showButton={false} // o false si no quieres mostrar el botón
        buttonText="" // opcional, puedes personalizarlo
        buttonLink="" // opcional, puedes cambiar el link
      />
      <InsuranceSection />
      <WhyTrustUs cards={trustServices}
        title="Why Patients & Dentists Trust Us"
        subtitle="We combine advanced technology with compassionate endodontics care."
        bgColor="bg-white"
        mdCols={3} />
      <Testimonials Testimonials data={testimonialsMain}
        title="Real Stories, Real Smiles"
        subtitle="Real experiences from our patients and dentists."
        showCTA={false} />
      <YourJourney />
      <Insurance title={'Affordable Care for Everyone'}
        subtitle={'Our team will help verify your insurance coverage and answer any questions you have.'} 
        showCTA={true}/>
      <ParallaxSection imageSrc={smile}
        title="Endodontic Care for a Healthier, Pain-Free Smile"
        description="Schedule your consultation and transform your dental health."
        buttonText="Book an Appointment" 
        buttonLink={"/contact"}/>
       
      <Faqs title="Have Questions? We Have Answers."
        description="Find answers to common endodontic questions."
        items={faqsForPatients} />

    </>
  )
}

export default ProceduresPage