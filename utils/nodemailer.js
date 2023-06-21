import nodemailer from 'nodemailer'
//https://nodemailer.com/about/
function useNodemailer(options = {sender: "Tocatu<tocatu98@gmail.com>"}) {
  
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
    subject: 'Bienvenido a Tocatu',
    text: `${options?.username}, gracias por registrarte en Tocatu 😀`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
     
      console.log(err)
    } else {
      console.log("Email sent" + info.response);
    }
  });
}



export default {useNodemailer}