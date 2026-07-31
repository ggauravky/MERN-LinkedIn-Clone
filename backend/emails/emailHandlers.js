import { transporter, sender } from "../lib/nodemailer.js";
import { createWelcomeEmailTemplate } from "./emailTemplates.js";

export const sendWelcomeEmail = async (email, name, profileUrl) => {
  try {
    const response = await transporter.sendMail({
      from: sender,
      to: email,
      subject: "Welcome to LinkedIn Clone",
      html: createWelcomeEmailTemplate(name, profileUrl),
    });
    console.log("Welcome email sent successfully:", response.messageId);
  } catch (error) {
    console.error("Error in sending welcome email:", error.message);
  }
};