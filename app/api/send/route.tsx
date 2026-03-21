import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    console.log(process.env.EMAIL_USER)
    console.log(process.env.EMAIL_PASS)

    // Konfiguration des Transporters (Beispiel mit Gmail)
    // Für Produktion: Nutze Umgebungsvariablen (.env.local)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true für Port 465
      auth: {
        // FEHLERBEHEBUNG: Der Fehler "534-5.7.9 Application-specific password required"
        // tritt auf, weil Google ein App-Passwort erzwingt.
        // 1. Aktiviere 2FA in deinem Google-Konto.
        // 2. Erstelle ein App-Passwort unter: https://myaccount.google.com/apppasswords
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: 'nilsmay1103@gmail.com',
      subject: `Portfolio Kontakt: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nNachricht:\n${message}`,
      html: `
        <h3>Neue Nachricht von deinem Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Betreff:</strong> ${subject}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email erfolgreich gesendet' }, { status: 200 });
  } catch (error) {
    console.error('Fehler beim Senden der Email:', error);
    return NextResponse.json({ error: 'Fehler beim Senden der Email' }, { status: 500 });
  }
}
