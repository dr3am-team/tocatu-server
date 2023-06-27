import nodemailer from "nodemailer";
import dotenv from 'dotenv'

dotenv.config()

async function useNodemailer(options = { sender: "Tocatu<tocatu98@gmail.com>" }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `${options.sender}`,
    to: options?.receiver,
    subject: "Bienvenido a Tocatu",
    text: `${options?.username}, gracias por registrarte en Tocatu 😀`,
  };

  const result = await transporter.sendMail(mailOptions);

  console.log('mail', result.response);

  return result
}

export default { useNodemailer };
