import Contact from "./ui/common/Contact";
import Faqs from "./ui/common/Faqs";
import Maps from "./ui/common/Maps";
import NavbarPC from "./ui/layout/NavbarPC";
import Referring from "./ui/sections/Referring";
import Services from "./ui/sections/Services";
import Technology from "./ui/sections/Technology";
import Testimonials from "./ui/common/Testimonials";
import WhyUs from "./ui/sections/WhyUs";
import Hero from "./ui/sections/Hero";
import AboutUs from "./ui/sections/AboutUs";
import Footer from "./ui/layout/Footer";

export default function Home() {
  return (
    <>
      {/* <InfoTop /> */}
      <NavbarPC />
      <Hero />
      <AboutUs />
      <Services />
      <Technology />
      <WhyUs />
      <Referring />
      <Faqs />
      <Testimonials />
      <Contact />
      <Maps />
      <Footer />

    </>
  );
}
