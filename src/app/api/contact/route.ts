import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { site } from "@/lib/site-data";
import { writeClient } from "@/sanity/lib/client";

const requestSchema = z.object({
  requestType: z.enum(["home", "business", "product", "po", "support", "general"]),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  message: z.string().optional().default(""),
  company_website: z.string().optional().default(""),
}).catchall(z.union([z.string(), z.number(), z.boolean(), z.null()]));

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const data = parsed.data;

  if (data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const canEmail = Boolean(process.env.RESEND_API_KEY);
  const canWriteSanity = Boolean(
    process.env.SANITY_API_WRITE_TOKEN && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  );
  const preview = !canEmail || !canWriteSanity;

  if (canWriteSanity) {
    await writeClient.create({
      _type: "leadSubmission",
      requestType: data.requestType,
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      payload: { raw: JSON.stringify(data, null, 2) },
      submittedAt: new Date().toISOString(),
    });
  }

  if (canEmail && process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Adion Solar <onboarding@resend.dev>",
      to: process.env.ADION_LEAD_EMAIL || site.email,
      subject: `Adion ${data.requestType} request from ${data.name}`,
      text: [
        `Request type: ${data.requestType}`,
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Message: ${data.message || "No message provided"}`,
        "",
        "Payload:",
        JSON.stringify(data, null, 2),
      ].join("\n"),
    });
  }

  return NextResponse.json({ ok: true, preview });
}
