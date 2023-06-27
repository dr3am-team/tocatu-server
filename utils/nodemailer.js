import nodemailer from "nodemailer";
import { EMAIL_REGEX } from "./constants.js";

async function useNodemailer(
  options = { sender: "Tocatu<tocatu98@gmail.com>" }
) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: `${options.sender}`,
    to: options?.receiver,
    subject: "Bienvenido a Tocatu",
    text: `${options?.username}, gracias por registrarte en Tocatu 😀`
  };

  let result = null;

  if (EMAIL_REGEX.test(options.receiver)) {
    result = await transporter.sendMail(mailOptions);
    console.log("mail", result.response);
  } else {
    console.log("Destinatario inválido");
  }

  return result;
}

export default { useNodemailer };
