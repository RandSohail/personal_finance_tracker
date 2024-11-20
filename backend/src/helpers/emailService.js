import nodemailer from "nodemailer";
import "dotenv/config";

export default async ({ email, link }) => {
  const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
  const EMAIL_SENDER = process.env.EMAIL_SENDER;
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      service: "gmail",
      auth: {
        user: EMAIL_SENDER,
        pass: EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: 'Rand Sohail',
      to: email,
      subject: 'Finance Tracker - Reset your Password',
      html: `
    <h1>Reset your Password</h1>
    <p>Click the link to reset your password:</p>
    <a href="${link}" target="_blank">Reset Password</a>
  `};

    transporter.sendMail(mailOptions, function (error, info) {
      if (!error) {
        console.log('Email sent: ' + info.response);
        return ("Email sent Successfully");
      } else {
        console.log({ error });
      }
    });

  } catch (error) {
    console.log("Mail Error", { error });
  }
};
