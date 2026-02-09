"use client"

export default function StepProgress({ step, progress }) {
  const steps = ["Patient", "Payment", "Card"]

  return (
    <>
      <div className="mb-6">
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#0a2a54] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex justify-between mb-8 font-inter text-sm">
        {steps.map((label, index) => (
          <div
            key={label}
            className={`flex-1 text-center ${
              step === index + 1
                ? "text-[#3c8dbc] font-semibold"
                : "text-gray-400"
            }`}
          >
            {label}
          </div>
        ))}
      </div>
    </>
  )
}
