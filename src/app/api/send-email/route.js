import nodemailer from "nodemailer";

export async function POST(req) {
  if (req.method === "POST") {

    const { name, email, message,phoneNumber,dateOfBirth,program,preferredStartDate,motivation,careerGoal, source,toMail , formType} = await req.json();
    

    const transporter = nodemailer.createTransport({
      host: 'smtpout.secureserver.net',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    let mailOptions = {};
    {formType == "NewsLetters" && (mailOptions = {
      from: `${toMail == "company" ? email : process.env.EMAIL}`,
      to: `${toMail == "company" ? process.env.EMAIL : email}`,
      subject: `Contact Form Submission from ${name}`,
      text: `You have received a message from ${name} (${email}):\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">NewsLetters Form Submission</h2>
          <p><strong>Name:</strong> ${toMail == "company" ? name : "QuantumCrafters Studio"}</p>
          <p><strong>Email:</strong> ${toMail == "company" ? email : process.env.EMAIL}</p>
          <p><strong>Message:</strong></p>
          <p style="border-left: 4px solid #ccc; padding-left: 8px; color: #555;">${toMail == "company" ? ` ${name} Subscribed your NewsLetters` : `${message}`}</p>
          <hr>
          <p style="font-size: 0.9em; color: #888;">This is an automated message. Please do not reply.</p>
        </div>
      `,
    })}

    {formType == "Contact Us" && (mailOptions = {
      from: `${toMail == "company" ? email : process.env.EMAIL}`,
      to: `${toMail == "company" ? process.env.EMAIL : email}`,
      subject: `Contact Form Submission from ${name}`,
      text: `You have received a message from ${name} (${email}):\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">Contact Form Submission</h2>
          <p><strong>Name:</strong> ${toMail == "user" ? "QuantumCrafters Studio" : name}</p>
          <p><strong>Email:</strong> ${toMail == "user" ? process.env.EMAIL : email}</p>
          <p><strong>Message:</strong></p>
          <p style="border-left: 4px solid #ccc; padding-left: 8px; color: #555;">${message}</p>
          <hr>
          <p style="font-size: 0.9em; color: #888;">This is an automated message. Please do not reply.</p>
        </div>
      `,
    })}

    // Enroll Now Handled
    {formType == "Enroll Now" && (mailOptions = {
      from: `${toMail == "company" ? email : process.env.EMAIL}`,
      to: `${toMail == "company" ? process.env.EMAIL : email}`,
      subject: `Enroll Form Submission from ${name}`,
      text: `You have received a message from ${name} (${email})`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">Enroll Form Submission</h2>
          <p><strong>Name:</strong> ${toMail == "company" ? name : "QuantumCrafters Studio"}</p>
          <p><strong>Email:</strong> ${toMail == "company" ? email : process.env.EMAIL}</p>
          ${toMail=="company" ?(`
          <p><strong>Phone No.:</strong> ${phoneNumber}</p>
          <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
          <p><strong>Program:</strong> ${program}</p>
          <p><strong>Preferred Start Date:</strong> ${preferredStartDate}</p>
          <p><strong>Motivation:</strong> ${motivation}</p>
          <p><strong>Career Goal:</strong> ${careerGoal}</p>
          <p><strong>Sourse:</strong> ${source}</p>`
        ):(`
          <p><strong>Message:</strong></p>
          <p style="border-left: 4px solid #ccc; padding-left: 8px; color: #555;">${message}</p>
          <hr>`)}
          <p style="font-size: 0.9em; color: #888;">This is an automated message. Please do not reply.</p>
        </div>
      `,
    })}

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("mail response data = ====> ",info)
      return Response.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
      console.error(error);
      return Response.json({ message: "Error sending email" }, { status: 500 });
    }
  } else {
    return Response.json({ message: "Only POST Is Allowed" });
  }
}
