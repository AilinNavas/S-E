
 
import { NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(req) {
  console.log("📩 /api/payments HIT")

  try {
    const body = await req.json()
    const { token, amount } = body

    // 🔐 Validaciones básicas
    if (!token) {
      return NextResponse.json(
        { success: false, error: "Missing payment token" },
        { status: 400 }
      )
    }

    const amountInCents = Math.round(Number(amount) * 100)

    if (!amountInCents || amountInCents <= 0) {
      return NextResponse.json(
        { success: false, error: "Invalid amount" },
        { status: 400 }
      )
    }

    console.log("➡️ Enviando pago a Square:", {
      token,
      amountInCents,
    })

    const response = await fetch(
      "https://connect.squareupsandbox.com/v2/payments",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.SQUARE_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source_id: token,
          idempotency_key: crypto.randomUUID(),
          amount_money: {
            amount: amountInCents, // USD en centavos
            currency: "USD",
          },
        }),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      console.error("❌ Square API error:", data)

      return NextResponse.json(
        {
          success: false,
          error: data.errors?.[0]?.detail || "Payment failed",
        },
        { status: 500 }
      )
    }

    console.log("✅ Pago aprobado:", data.payment?.id)

    return NextResponse.json({
      success: true,
      payment: data.payment,
    })
  } catch (error) {
    console.error("❌ Server error:", error)

    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    )
  }
}
