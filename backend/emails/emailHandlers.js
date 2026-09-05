import { transporter, sender } from "../lib/nodemailer.js";
import {
  createWelcomeEmailTemplate,
  createCommentNotificationEmailTemplate,
  createConnectionAcceptedEmailTemplate,
  createConnectionRequestEmailTemplate,
} from "./emailTemplates.js";

export const sendWelcomeEmail = async (email, name, profileUrl) => {
  try {
    const response = await transporter.sendMail({
      from: sender,
      to: email,
      subject: "Welcome to LinkedIn Clone",
      html: createWelcomeEmailTemplate(name, profileUrl),
    });
    console.log("Welcome email sent successfully:", response.messageId);
    return response;
  } catch (error) {
    console.error("Error in sending welcome email:", error.message);
  }
};

export const sendCommentNotificationEmail = async (
  recipientEmail,
  recipientName,
  commenterName,
  postUrl,
  commentContent,
) => {
  try {
    const response = await transporter.sendMail({
      from: sender,
      to: recipientEmail,
      subject: `${commenterName} commented on your post`,
      html: createCommentNotificationEmailTemplate(
        recipientName,
        commenterName,
        postUrl,
        commentContent,
      ),
    });
    console.log(
      "Comment notification email sent successfully:",
      response.messageId,
    );
    return response;
  } catch (error) {
    console.error(
      "Error in sending comment notification email:",
      error.message,
    );
  }
};

export const sendConnectionRequestEmail = async (
  recipientEmail,
  recipientName,
  senderName,
  senderHeadline,
  profileUrl,
) => {
  try {
    const response = await transporter.sendMail({
      from: sender,
      to: recipientEmail,
      subject: `${senderName} wants to connect with you on LinkedIn`,
      html: createConnectionRequestEmailTemplate(
        recipientName,
        senderName,
        senderHeadline,
        profileUrl,
      ),
    });
    console.log(
      "Connection request email sent successfully:",
      response.messageId,
    );
    return response;
  } catch (error) {
    console.error(
      "Error in sending connection request email:",
      error.message,
    );
  }
};

export const sendConnectionAcceptedEmail = async (
  senderEmail,
  senderName,
  recipientName,
  profileUrl,
) => {
  try {
    const response = await transporter.sendMail({
      from: sender,
      to: senderEmail,
      subject: `${recipientName} accepted your connection request`,
      html: createConnectionAcceptedEmailTemplate(senderName, recipientName, profileUrl),
    });
    console.log(
      "Connection accepted email sent successfully:",
      response.messageId,
    );
    return response;
  } catch (error) {
    console.error(
      "Error in sending connection accepted email:",
      error.message,
    );
  }
};