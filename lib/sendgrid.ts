import sgMail, { MailDataRequired } from "@sendgrid/mail";


type EmailInfoType = {
  to: string;
  from: string;
  subject: string;
  text: string | null;
  html: string;
  template_id?: string;
};

type ValidEmailType = EmailInfoType & MailDataRequired;

 export const sgMailClient = sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function sendEmail(params: ValidEmailType) {
  const { to, from, subject, text, html, template_id } = params;

  const emailBody = {
    to: to, // Change to your recipient
    from: from, // Change to your verified sender
    subject: subject,
    text: text,
    html: html,
  };



  

  await sgMail.send(emailBody!).catch((error) => {
    console.log("Błąd podczas wysyłania maila -> ", error);
  });
}
