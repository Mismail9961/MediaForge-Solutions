import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, message } = body;

    // Setup transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.ADMIN_EMAIL,
      subject: '📩 New Contact Form Submission',
      text: `
You have a new message from your website contact form:

🔹 Name: ${name}
🔹 Email: ${email}
🔹 Phone: ${phone}
🔹 Company: ${company}
🔹 Service Interested In: ${service}
📝 Message:
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Error sending mail:', error);
    return NextResponse.json({ message: 'Failed to send message.' }, { status: 500 });
  }
}
