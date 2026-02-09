"use client"

export default function CardStep({ cardContainerRef }) {
  return (
    <div>
      <div ref={cardContainerRef} className="mb-6 rounded-md border p-3" />
    </div>
  )
}
