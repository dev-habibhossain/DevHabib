import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: "Habib Portfolio <onboarding@resend.dev>",
        to: ["habibfahim71@gmail.com"],
        subject: `New Portfolio Inquiry from ${name}`,
        html: `
          <h3>New Message from ${name}</h3>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
    } else {
      console.log("[MOCK EMAIL SENT]", { name, email, message });
    }

    return NextResponse.json(
      { success: true, message: "Message received successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
