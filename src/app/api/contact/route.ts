import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Ad, e-posta, telefon ve mesaj alanları zorunludur." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Geçerli bir e-posta adresi giriniz." },
        { status: 400 }
      );
    }

    // Nodemailer transporter - hosting alınca .env'den okunacak
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subjectMap: Record<string, string> = {
      teklif: "Teklif Talebi",
      bilgi: "Bilgi Alma",
      destek: "Teknik Destek",
      diger: "Diğer",
    };

    await transporter.sendMail({
      from: `"ABM Enerji Web" <${process.env.SMTP_USER}>`,
      to: "info@abmenerji.com",
      subject: `İletişim Formu: ${subjectMap[subject] || "Genel"} - ${name}`,
      html: `
        <h2>Yeni İletişim Formu Mesajı</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Ad Soyad</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">E-posta</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Telefon</td><td style="padding:8px;border:1px solid #ddd;">${phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Konu</td><td style="padding:8px;border:1px solid #ddd;">${subjectMap[subject] || "Belirtilmedi"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Mesaj</td><td style="padding:8px;border:1px solid #ddd;">${message}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true, message: "Mesajınız başarıyla gönderildi." });
  } catch {
    console.error("Mail gönderme hatası");
    return NextResponse.json(
      { error: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyiniz." },
      { status: 500 }
    );
  }
}
