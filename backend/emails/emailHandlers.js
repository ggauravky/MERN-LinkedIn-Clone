import { transporter, sender } from "../lib/nodemailer.js";
import { createWelcomeEmailTemplate ,createCommentNotificationEmailTemplate,sendConnectionAcceptedEmail} from "./emailTemplates.js";

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

export const sendCommentNotificationEmail = async (
  recipientEmail,
  recipientName,
  commenterName,
  postUrl,
  commentContent,
) => {
  const  recipient=[{ email:recipientEmail }];

  try {
  const response = await transporter.sendMail({
    from: sender,
    to: email,
    subject: "New Comment on Your Post",
      html: createCommentNotificationEmailTemplate(
        recipientName,
        commenterName,
        postUrl,
        commentContent,
      ),
      category: "comment_notification",
    });
    console.log(
      "Comment notification email sent successfully:",
      recipient.messageId,
    );
  } catch (error) {
    console.error(
      "Error in sending comment notification email:",
      error.message,
    );
  }
};


export const sendConnectionAcceptedEmail = async (
  senderEmail,
  senderName,
  recipientName,
  profileUrl,
)=>{
  const recipient = [{ email: senderEmail }];
  try{
    const response = await transporter.sendMail({
      from: sender,
      to: senderEmail,
      subject: `${recipientName} accepted your connection request`,
      html: createConnectionAcceptedEmailTemplate(senderName, recipientName, profileUrl),
      category: "connection_accepted",
    });
  }catch(error){

  }
}