"use client"

export default function PaymentStep({ formData, handleChange, inputClass }) {
  return (
    <div className="space-y-4">
      <input name="amount" type="number" value={formData.amount} onChange={handleChange} placeholder="Amount USD *" className={inputClass}/>
      <input name="zip" value={formData.zip} onChange={handleChange} placeholder="Billing ZIP Code" className={inputClass}/>
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Treatment Description" className={inputClass}/>
    </div>
  )
}
