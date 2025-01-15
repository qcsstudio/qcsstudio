import nodemailer from "nodemailer";

export  async function POST(req) {
  if (req.method === "POST") {
    console.log("name" ,process.env.EMAIL )
    console.log("pass" ,process.env.EMAIL_PASSWORD );
    
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587, 
        secure: false, 
        service: "gmail", 
        auth: {
        user: process.env.EMAIL, // your email
        pass: process.env.EMAIL_PASSWORD, // your email password or app-specific password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: "puneet@qcsstudio.com", // recipient email address
      subject: `Contact Form Submission from ${name}`,
      text: `You have received a message from ${name} (${email}):\n\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return  Response.json({ message: "Email sent successfully" } , {status:200});
    } catch (error) {
      console.error(error);
      return  Response.json({ message: "Error sending email" } , {status:500});
    }
  } else {
      return  Response.json({ message: "Only POST Is Allowed" });
  }
}
