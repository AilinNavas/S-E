"use client"

import { CheckCircle2 } from "lucide-react"

export default function PaymentSuccess({ formData, onReset }) {
  return (
    <div className="rounded-xl border border-[#3c8dbc]/20 bg-white p-10 text-center font-inter">

      <div className="flex flex-col items-center gap-4">

        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#3c8dbc]/10">
          <CheckCircle2 size={42} className="text-[#3c8dbc]" strokeWidth={2.5}/>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800">
          Payment Completed Successfully
        </h2>

        <p className="text-gray-500">
          Thank you <span className="font-medium text-gray-700">{formData.fullName}</span>.
        </p>

        <button
          onClick={onReset}
          className="mt-4 bg-[#3c8dbc] text-white px-6 py-3 rounded-lg font-semibold"
        >
          Process Another Payment
        </button>

      </div>

    </div>
  )
}
