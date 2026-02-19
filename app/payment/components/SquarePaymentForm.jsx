"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, ShieldCheck } from "lucide-react"



export default function SquarePaymentForm({ onSuccess }) {
  const cardContainerRef = useRef(null)
  const cardInstanceRef = useRef(null)

  const [step, setStep] = useState(1)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const totalSteps = 3
  const progress = ((step - 1) / (totalSteps - 1)) * 100

  const inputClass =
    "w-full border border-gray-300 focus:border-[#3c8dbc] focus:ring-2 focus:ring-[#3c8dbc]/20 outline-none p-3 rounded-md font-inter transition-all"

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    invoiceId: "",
    amount: "",
    description: "",
    zip: "",
  })

  const [isReady, setIsReady] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (step === 3) {
      loadSquareScript()
    }
  }, [step])

  function loadSquareScript() {
    if (document.getElementById("square-script")) {
      initializeSquare()
      return
    }

    const script = document.createElement("script")
    script.id = "square-script"
    script.src = "https://sandbox.web.squarecdn.com/v1/square.js"
    script.async = true
    script.onload = initializeSquare
    document.body.appendChild(script)
  }

  async function initializeSquare() {
    try {
      const payments = window.Square.payments(
        process.env.NEXT_PUBLIC_SQUARE_APP_ID
      )

      const card = await payments.card()
      await card.attach(cardContainerRef.current)

      cardInstanceRef.current = card
      setIsReady(true)
    } catch {
      setError("Unable to load payment form")
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function nextStep() {
    setError(null)

    if (step === 1 && (!formData.fullName || !formData.email)) {
      setError("Please complete required patient information")
      return
    }

    if (step === 2 && (!formData.amount || formData.amount <= 0)) {
      setError("Please enter a valid payment amount")
      return
    }

    setStep((s) => s + 1)
  }

  function prevStep() {
    setStep((s) => s - 1)
  }

async function handlePayment() {
  setError(null)

  try {
    setIsProcessing(true)

    const result = await cardInstanceRef.current.tokenize()

    if (result.status !== "OK") {
      throw new Error("TOKENIZATION_ERROR")
    }

    const payload = {
      token: result.token,
      amount: Number(formData.amount),
      ...formData,
    }

    console.log("📤 Sending payment payload:", payload)

    const response = await fetch("/api/payments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })

    const data = await response.json()

    if (!data.success) {

      const code = data.errorCode || "UNKNOWN"

      let message = "Payment could not be processed. Please try again or use another card."

      if (code === "INSUFFICIENT_FUNDS") {
        message = "The card has insufficient funds."
      }
      else if (code === "CARD_DECLINED") {
        message = "The card was declined by the bank."
      }
      else if (code === "CVV_FAILURE") {
        message = "Security code verification failed."
      }
      else if (code === "ADDRESS_VERIFICATION_FAILURE") {
        message = "Billing ZIP code could not be verified."
      }
      else if (code === "EXPIRED_CARD") {
        message = "This card has expired."
      }
      else if (code === "PROCESSING_ERROR") {
        message = "A processing error occurred. Please try again."
      }

      throw new Error(message)
    }

    setPaymentSuccess(true)
    onSuccess?.()

  } catch (err) {
    console.log("❌ Frontend error caught:", err)
    setError(err.message || "Payment could not be processed.")
  } finally {
    setIsProcessing(false)
  }
}


  function resetForm() {
    setPaymentSuccess(false)
    setStep(1)
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      invoiceId: "",
      amount: "",
      description: "",
      zip: "",
    })
  }

  if (paymentSuccess) {
    return (
      <div className="rounded-xl border border-[#3c8dbc]/20 bg-white p-10 text-center font-inter">

        <div className="flex flex-col items-center gap-4">

          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#3c8dbc]/10">
            <CheckCircle2
              size={42}
              className="text-[#3c8dbc]"
              strokeWidth={2.5}
            />
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-gray-800">
              Payment Completed Successfully
            </h2>

            <p className="text-gray-500">
              Thank you <span className="font-medium text-gray-700">{formData.fullName}</span>.
              Your transaction has been securely processed.
            </p>
          </div>

          <div className="w-full max-w-md bg-gray-50 border border-gray-200 rounded-lg p-5 text-sm text-left space-y-2 mt-2">

            <div className="flex justify-between">
              <span className="text-gray-500">Amount Paid</span>
              <span className="font-semibold text-gray-800">
                ${Number(formData.amount).toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Receipt Email</span>
              <span className="text-gray-700">
                {formData.email}
              </span>
            </div>

            {formData.invoiceId && (
              <div className="flex justify-between">
                <span className="text-gray-500">Invoice ID</span>
                <span className="text-gray-700">
                  {formData.invoiceId}
                </span>
              </div>
            )}

          </div>

          <button
            onClick={resetForm}
            className="mt-4 bg-[#3c8dbc] hover:bg-[#33789b] transition-colors text-white px-6 py-3 rounded-lg font-semibold"
          >
            Process Another Payment
          </button>

        </div>
      </div>
    )
  }
  function SecurePaymentIndicator() {
    return (
      <div className="mb-6 flex items-center gap-3 rounded-lg border border-[#3c8dbc]/20 bg-[#3c8dbc]/5 px-4 py-3 font-inter transition-all">

        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#3c8dbc]/10">
          <ShieldCheck
            size={18}
            className="text-[#3c8dbc]"
            strokeWidth={2.5}
          />
        </div>

        <div className="text-sm">
          <p className="font-semibold text-[#0a2a54]">
            Secure Payment Powered by <a href="https://squareup.com/" target="_blank" rel="noopener noreferrer" className="underline">Square</a>
          </p>
          <p className="text-gray-500">
            Your card information is encrypted and processed safely.
          </p>
        </div>

      </div>
    )
  }
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 overflow-hidden">

      <div className="mb-6">

        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#0a2a54] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <SecurePaymentIndicator />

      <div className="flex justify-between mb-8 font-inter text-sm">
        {["Patient", "Payment", "Card"].map((label, index) => (
          <div
            key={label}
            className={`flex-1 text-center ${step === index + 1
              ? "text-[#3c8dbc] font-semibold"
              : "text-gray-400"
              }`}
          >
            {label}
          </div>
        ))}
      </div>

      <div className="transition-opacity duration-300">

        {step === 1 && (
          <div className="space-y-4">
            <input name="fullName" value={formData.fullName} placeholder="Full Name *" onChange={handleChange} className={inputClass} />
            <input name="email" value={formData.email} placeholder="Email *" onChange={handleChange} className={inputClass} />
            <input name="phone" value={formData.phone} placeholder="Phone" onChange={handleChange} className={inputClass} />

          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <input name="amount" type="number" value={formData.amount} placeholder="Amount USD *" onChange={handleChange} className={inputClass} />
            <input name="zip" value={formData.zip} placeholder="Billing ZIP Code" onChange={handleChange} className={inputClass} />
            <input name="description" value={formData.description} placeholder="Treatment Description" onChange={handleChange} className={inputClass} />

          </div>
        )}

        {step === 3 && (
          <div>
            <div ref={cardContainerRef} className="mb-6 rounded-md border p-3" />
          </div>
        )}

      </div>

      {error && (
        <p className="mt-4 text-sm text-red-600 font-inter">
          {error}
        </p>
      )}

      <div className="flex gap-3 mt-6">
        {step > 1 && (
          <button onClick={prevStep} className="flex-1 cursor-pointer w-full text-[#3c8dbc] border-2 border-[#3c8dbc] px-6 py-2 font-inter text-lg font-semibold rounded-md ">
            Back
          </button>
        )}

        {step < 3 && (
          <button onClick={nextStep} className="flex-1 rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold ">
            Continue
          </button>
        )}

        {step === 3 && (
          <button
            onClick={handlePayment}
            disabled={!isReady || isProcessing}
            className="flex-1 bg-[#3c8dbc] text-white rounded-md py-3 font-inter font-semibold disabled:opacity-50"
          >
            {isProcessing
              ? "Processing..."
              : `Pay $${Number(formData.amount || 0).toFixed(2)}`}
          </button>
        )}
      </div>

    </div>
  )
}
