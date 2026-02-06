"use client"

import { usePathname } from "next/navigation"
import FormContact from "./FormContact"

const ConditionalFormContact = () => {
  const pathname = usePathname()

  // Evita renderizar el formulario en /for-doctors
  if (pathname.startsWith("/for-doctors") || pathname.startsWith("/secure-pay")) return null

  return <FormContact />
}

export default ConditionalFormContact
