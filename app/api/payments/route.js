import { NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(req) {
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

    const squarePayload = {
      source_id: token,
      idempotency_key: crypto.randomUUID(),

      amount_money: {
        amount: amountInCents,
        currency: "USD",
      },

      buyer_email_address: body.email || undefined,

      reference_id: body.invoiceId || undefined,

      note: `
Patient: ${body.fullName || ""}
Phone: ${body.phone || ""}
Description: ${body.description || ""}
`.trim(),

      billing_address: {
        postal_code: body.zip || undefined,
        first_name: body.fullName?.split(" ")[0] || undefined,
        last_name: body.fullName?.split(" ").slice(1).join(" ") || undefined,
      },
    }


    const response = await fetch(
      "https://connect.squareup.com/v2/payments",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.SQUARE_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(squarePayload),
      }
    )

    const data = await response.json()


    // ⛔ ERROR HTTP
    if (!response.ok) {
      const err = data.errors?.[0] || {}

      return NextResponse.json(
        {
          success: false,
          error: err.detail || "Payment failed",
          errorCode: err.code || "UNKNOWN",
          errorCategory: err.category || "UNKNOWN",
        },
        { status: 400 }
      )
    }

    // ⛔ PAGO FALLIDO (MUY IMPORTANTE)
    if (data.payment?.status !== "COMPLETED") {
      const err = data.payment?.card_details?.errors?.[0] || {}

      return NextResponse.json(
        {
          success: false,
          error: err.detail || "Payment was not approved",
          errorCode: err.code || "CARD_DECLINED",
          errorCategory: err.category || "PAYMENT_METHOD_ERROR",
        },
        { status: 402 }
      )
    }

    return NextResponse.json({
      success: true,
      payment: data.payment,
    })
  } catch (error) {

    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    )
  }
}
