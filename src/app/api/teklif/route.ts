import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, aboneType, consumption, message } = body;

    // Validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Ad, telefon ve e-posta alanları zorunludur." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Geçerli bir e-posta adresi giriniz." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const aboneMap: Record<string, string> = {
      mesken: "Mesken",
      ticarethane: "Ticarethane",
      sanayi: "Sanayi",
      tarimsal: "Tarımsal Faaliyet",
    };

    await transporter.sendMail({
      from: `"ABM Enerji Web" <${process.env.SMTP_USER}>`,
      to: "info@abmenergy.com.tr",
      subject: `Teklif Talebi - ${name}`,
      html: `
        <h2>Yeni Teklif Talebi</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Ad Soyad</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Telefon</td><td style="padding:8px;border:1px solid #ddd;">${phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">E-posta</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Abone Türü</td><td style="padding:8px;border:1px solid #ddd;">${aboneMap[aboneType] || "Belirtilmedi"}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Tahmini Tüketim</td><td style="padding:8px;border:1px solid #ddd;">${consumption || "Belirtilmedi"} kWh</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Mesaj</td><td style="padding:8px;border:1px solid #ddd;">${message || "Yok"}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true, message: "Teklif talebiniz başarıyla gönderildi." });
  } catch {
    console.error("Teklif mail gönderme hatası");
    return NextResponse.json(
      { error: "Teklif talebiniz gönderilemedi. Lütfen daha sonra tekrar deneyiniz." },
      { status: 500 }
    );
  }
}
