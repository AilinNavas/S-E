

// import { NextResponse } from "next/server"
// import crypto from "crypto"

// export async function POST(req) {
//   console.log("📩 /api/payments HIT")

//   try {
//     const body = await req.json()
//     const { token, amount } = body

//     // 🔐 Validaciones básicas
//     if (!token) {
//       return NextResponse.json(
//         { success: false, error: "Missing payment token" },
//         { status: 400 }
//       )
//     }

//     const amountInCents = Math.round(Number(amount) * 100)

//     if (!amountInCents || amountInCents <= 0) {
//       return NextResponse.json(
//         { success: false, error: "Invalid amount" },
//         { status: 400 }
//       )
//     }

//     console.log("➡️ Enviando pago a Square:", {
//       token,
//       amountInCents,
//     })

//     const response = await fetch(
//       "https://connect.squareupsandbox.com/v2/payments",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${process.env.SQUARE_ACCESS_TOKEN}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           source_id: token,
//           idempotency_key: crypto.randomUUID(),
//           amount_money: {
//             amount: amountInCents, // USD en centavos
//             currency: "USD",
//           },
//         }),
//       }
//     )

//     const data = await response.json()

//     if (!response.ok) {
//       console.error("❌ Square API error:", data)

//       return NextResponse.json(
//         {
//           success: false,
//           error: data.errors?.[0]?.detail || "Payment failed",
//         },
//         { status: 500 }
//       )
//     }

//     console.log("✅ Pago aprobado:", data.payment?.id)

//     return NextResponse.json({
//       success: true,
//       payment: data.payment,
//     })
//   } catch (error) {
//     console.error("❌ Server error:", error)

//     return NextResponse.json(
//       { success: false, error: "Server error" },
//       { status: 500 }
//     )
//   }
// }
import { NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(req) {
  console.log("\n==============================")
  console.log("📩 /api/payments HIT")

  try {
    const body = await req.json()

    console.log("📦 Incoming frontend payload:")
    console.log(JSON.stringify({
      ...body,
      token: body.token ? body.token.slice(0, 12) + "..." : null // 🔐 no mostrar token completo
    }, null, 2))

    const { token, amount } = body

    // 🔐 Validaciones básicas
    if (!token) {
      console.log("❌ Missing token")
      return NextResponse.json(
        { success: false, error: "Missing payment token" },
        { status: 400 }
      )
    }

    const amountInCents = Math.round(Number(amount) * 100)

    if (!amountInCents || amountInCents <= 0) {
      console.log("❌ Invalid amount:", amount)
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


    console.log("➡️ Square request payload:")
    console.log(JSON.stringify({
      ...squarePayload,
      source_id: token.slice(0, 12) + "..."
    }, null, 2))

    const response = await fetch(
      "https://connect.squareupsandbox.com/v2/payments",
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

    console.log("📨 Square raw response:")
    console.log(JSON.stringify(data, null, 2))

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

    console.log("✅ Payment approved ID:", data.payment?.id)
    console.log("==============================\n")

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
