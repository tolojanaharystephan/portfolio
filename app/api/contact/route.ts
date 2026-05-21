import { NextResponse } from "next/server";
import { personalInfo } from "@/data/portfolio";

interface ContactBody {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendViaWeb3Forms(payload: ContactBody) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return null;

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      name: payload.name,
      email: payload.email,
      subject:
        payload.subject ??
        `[Portfolio] Message de ${payload.name}`,
      message: payload.message,
      from_name: payload.name,
      replyto: payload.email,
    }),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.message ?? "Web3Forms error");
  }
  return data;
}

async function sendViaResend(payload: ContactBody) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO ?? personalInfo.email;
  const from =
    process.env.CONTACT_EMAIL_FROM ?? "Portfolio <onboarding@resend.dev>";

  if (!apiKey) return null;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject:
        payload.subject ??
        `[Portfolio] ${payload.name} souhaite vous contacter`,
      html: `
        <h2>Nouveau message portfolio</h2>
        <p><strong>Nom:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <hr />
        <p>${payload.message.replace(/\n/g, "<br />")}</p>
      `,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message ?? "Resend error");
  }
  return res.json();
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;

    if (!body.name?.trim() || body.name.length < 2) {
      return NextResponse.json(
        { error: "Nom invalide (minimum 2 caractères)." },
        { status: 400 }
      );
    }
    if (!body.email?.trim() || !isValidEmail(body.email)) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      );
    }
    if (!body.message?.trim() || body.message.length < 10) {
      return NextResponse.json(
        { error: "Message trop court (minimum 10 caractères)." },
        { status: 400 }
      );
    }

    const payload: ContactBody = {
      name: body.name.trim(),
      email: body.email.trim(),
      subject: body.subject?.trim(),
      message: body.message.trim(),
    };

    try {
      const resendResult = await sendViaResend(payload);
      if (resendResult) {
        return NextResponse.json({
          success: true,
          provider: "resend",
          message: "Message envoyé avec succès.",
        });
      }
    } catch (e) {
      console.error("Resend:", e);
    }

    try {
      const web3Result = await sendViaWeb3Forms(payload);
      if (web3Result) {
        return NextResponse.json({
          success: true,
          provider: "web3forms",
          message: "Message envoyé avec succès.",
        });
      }
    } catch (e) {
      console.error("Web3Forms:", e);
    }

    return NextResponse.json(
      {
        error:
          "Service email non configuré. Ajoutez WEB3FORMS_ACCESS_KEY ou RESEND_API_KEY dans .env.local",
        fallbackMailto: `mailto:${personalInfo.email}`,
      },
      { status: 503 }
    );
  } catch {
    return NextResponse.json(
      { error: "Requête invalide." },
      { status: 400 }
    );
  }
}
