"use client"

export default function PatientStep({ formData, handleChange, inputClass }) {
  return (
    <div className="space-y-4">
      <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name *" className={inputClass}/>
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email *" className={inputClass}/>
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className={inputClass}/>
      <input name="invoiceId" value={formData.invoiceId} onChange={handleChange} placeholder="Invoice / Treatment ID" className={inputClass}/>
    </div>
  )
}
