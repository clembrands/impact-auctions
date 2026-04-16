import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(1),
  organization: z.string().min(1),
  email: z.string().email(),
  telephone: z.string().min(1),
  eventDate: z.string().min(1),
  message: z.string().min(10),
  honeypot: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot check - if filled, it's spam
    if (body.honeypot && body.honeypot.trim() !== "") {
      console.log("[v0] Honeypot triggered - likely spam");
      // Return success to prevent reconnaissance
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Validate form data
    const formData = schema.parse(body);

    // Send email via Resend
    const response = await resend.emails.send({
      from: "Impact Auctions <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO || "contact@impactauctions.com",
      replyTo: formData.email,
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
        <p><strong>Organization:</strong> ${escapeHtml(formData.organization)}</p>
        <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
        <p><strong>Telephone:</strong> ${escapeHtml(formData.telephone)}</p>
        <p><strong>Event Date:</strong> ${escapeHtml(formData.eventDate)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(formData.message).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (response.error) {
      console.error("[v0] Resend error:", response.error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    console.log("[v0] Email sent successfully:", response.data?.id);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[v0] Form submission error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
