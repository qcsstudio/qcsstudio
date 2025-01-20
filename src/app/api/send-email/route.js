import nodemailer from "nodemailer";

export async function POST(req) {
  if (req.method === "POST") {

    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL_TO,
      subject: `Contact Form Submission from ${name}`,
      text: `You have received a message from ${name} (${email}):\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="border-left: 4px solid #ccc; padding-left: 8px; color: #555;">${message}</p>
          <hr>
          <p style="font-size: 0.9em; color: #888;">This is an automated message. Please do not reply.</p>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return Response.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
      console.error(error);
      return Response.json({ message: "Error sending email" }, { status: 500 });
    }
  } else {
    return Response.json({ message: "Only POST Is Allowed" });
  }
}
