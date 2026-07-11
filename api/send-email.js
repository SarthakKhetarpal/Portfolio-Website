// Vercel Serverless Function — contact-form mailer.
// Replaces the old Express endpoint POST /user/send-email from the separate backend.
// Requires env vars on Vercel: EMAIL_USER, EMAIL_PASS (Gmail app password).
const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { to, subject, text, user_subject, user_msg } = req.body || {};

  if (!to || !subject) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // 1) Acknowledgement to the visitor (BCC to me)
  const visitorMail = {
    from: process.env.EMAIL_USER,
    to,
    bcc: "sarthakkhetarpal2000@icloud.com",
    subject,
    text,
  };

  // 2) The visitor's message forwarded to me
  const ownerMail = {
    from: process.env.EMAIL_USER,
    to: "sarthakkhetarpal2000@icloud.com",
    subject: user_subject,
    text: user_msg,
  };

  try {
    await Promise.all([
      transporter.sendMail(visitorMail),
      transporter.sendMail(ownerMail),
    ]);
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Mail send failed:", error);
    return res.status(500).json({ error: "Error sending email" });
  }
};
