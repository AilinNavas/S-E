"use client"

import { useEffect, useRef, useState } from "react"

import PatientStep from "./steps/PatientStep"
import PaymentStep from "./steps/PaymentStep"
import CardStep from "./steps/CardStep"

import PaymentSuccess from "./PaymentSuccess"
import SecureIndicator from "./SecureIndicator"
import StepProgress from "./StepProgress"

export default function SquarePaymentForm2() {

  const cardContainerRef = useRef(null)
  const cardInstanceRef = useRef(null)

  const [step, setStep] = useState(1)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const [isReady, setIsReady] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState(null)

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    invoiceId: "",
    amount: "",
    description: "",
    zip: "",
  })

  /* -------------------------------
     INIT SQUARE
  --------------------------------*/
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

  /* -------------------------------
     HANDLERS
  --------------------------------*/

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
        throw new Error("Tokenization failed")
      }

      const response = await fetch("/api/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: result.token,
          amount: Number(formData.amount),
          ...formData,
        }),
      })

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error || "Payment failed")
      }

      setPaymentSuccess(true)

    } catch {
      setError("Payment could not be processed. Please try again.")
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

  /* -------------------------------
     SUCCESS SCREEN
  --------------------------------*/

  if (paymentSuccess) {
    return (
      <PaymentSuccess
        formData={formData}
        onReset={resetForm}
      />
    )
  }

  /* -------------------------------
     FORM UI
  --------------------------------*/

  return (

    <div className="rounded-lg border border-gray-200 bg-white p-6 overflow-hidden">

      <StepProgress step={step} />

      <SecureIndicator />

      {step === 1 && (
        <PatientStep
          formData={formData}
          handleChange={handleChange}
        />
      )}

      {step === 2 && (
        <PaymentStep
          formData={formData}
          handleChange={handleChange}
        />
      )}

      {step === 3 && (
        <CardStep
          cardContainerRef={cardContainerRef}
        />
      )}

      {error && (
        <p className="mt-4 text-sm text-red-600 font-inter">
          {error}
        </p>
      )}

      <div className="flex gap-3 mt-6">

        {step > 1 && (
          <button
            onClick={prevStep}
            className="flex-1 text-[#3c8dbc] border-2 border-[#3c8dbc] px-6 py-2 font-inter text-lg font-semibold rounded-md"
          >
            Back
          </button>
        )}

        {step < 3 && (
          <button
            onClick={nextStep}
            className="flex-1 rounded-md px-6 py-2 text-lg font-inter bg-[#3c8dbc] text-white border-[#3c8dbc] border-2 font-semibold"
          >
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
              : `Pay $${Number(formData.amount || 0).toFixed(2)}`
            }
          </button>
        )}

      </div>

    </div>
  )
}
