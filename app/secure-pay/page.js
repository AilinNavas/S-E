
"use client"

import SquarePaymentForm from "./components/SquarePaymentForm"

export default function PaymentsPage() {
  return (
    <section className="relative bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-5xl px-4 py-16">

        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-[#0a2a54] font-zen font-bold uppercase text-3xl md:text-5xl mb-8 flex items-center justify-center gap-4">
            
            Make a Payment - Process your dental treatment payment securely and conveniently online.
          </h2>
          <h3 className="text-xl font-semibold font-inter text-[#0a2a54] md:text-2xl text-center ">
            Secure online payment for your dental treatment.
          </h3>
        </div>

        {/* Payment Container */}
        <div className="max-w-2xl mx-auto">
          <SquarePaymentForm />
        </div>

      </div>
    </section>
  )
}
