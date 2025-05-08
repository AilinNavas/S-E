
import { Zen_Maru_Gothic, Inter } from "next/font/google"
import "./globals.css";
import NavbarMobile from "./components/NavbarMobile";
import NavbarPC from "./components/NavbarPC";
import Footer from "./components/Footer";
import ConditionalFormContact from "./components/CondicionalFormContact";
import InfoContact from "./components/InfoContact";
import InfoTop from "./components/InfoTop";

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-zen",
  display: "swap",
})
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata = {
  title: "Southside Endodontics | Fort Worth Endodontist | Root Canal Specialist",
  description:
    "Southside Endodontics provides expert root canal therapy and endodontic care in Fort Worth, TX. Family-owned practice accepting most major insurance plans. Call (817) 555-1234 today!",
  keywords:
    "endodontist Fort Worth, root canal Fort Worth, endodontic treatment, emergency root canal, Fort Worth endodontist that accepts insurance, Dr. Neal Horn",
  openGraph: {
    title: "Southside Endodontics | Fort Worth's Trusted Endodontist Practice",
    description:
      "Expert root canal therapy and endodontic care in Fort Worth, TX. Family-owned practice with 231 5-star reviews.",
    url: "",
    siteName: "Southside Endodontics",
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${inter.variable} ${zenMaruGothic.variable} font-sans`}>
        <InfoTop />
        <NavbarMobile />
        <NavbarPC />
        {children}
        <ConditionalFormContact />
        <InfoContact />
        <Footer />
      </body>
    </html>
  );
}
