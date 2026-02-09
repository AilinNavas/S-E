"use client"

import { ShieldCheck } from "lucide-react"

export default function SecureIndicator() {
  return (
    <div className="mb-6 flex items-center gap-3 rounded-lg border border-[#3c8dbc]/20 bg-[#3c8dbc]/5 px-4 py-3 font-inter">

      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#3c8dbc]/10">
        <ShieldCheck size={18} className="text-[#3c8dbc]" strokeWidth={2.5}/>
      </div>

      <div className="text-sm">
        <p className="font-semibold text-[#0a2a54]">
          Secure Payment Powered by Square
        </p>
        <p className="text-gray-500">
          Your card information is encrypted and processed safely.
        </p>
      </div>

    </div>
  )
}
