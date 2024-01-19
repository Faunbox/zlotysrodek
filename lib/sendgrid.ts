import sgMail, { MailDataRequired } from "@sendgrid/mail";

type EmailInfoType = {
    to: string,
    from: string,
    subject: string, 
    text: string | null,
    html: string,
    templateId?: string 
}

type ValidEmailType = EmailInfoType & MailDataRequired

sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

export async function sendEmail(params:ValidEmailType) {
    
    const {to, from, subject, text, html, templateId} = params

    const emailBody = {
        to: to, // Change to your recipient
        from: from, // Change to your verified sender
        subject: subject,
        text: text,
        html: html,
      };

      const emailBodyWithTemplateId = {
        to: to, // Change to your recipient
        from: from, // Change to your verified sender
        subject: subject,
        text: text,
        html: html,
        templateId: templateId
      };

      const email = templateId? emailBodyWithTemplateId : emailBody

      await sgMail.send(email!).catch((error) => {
        console.log("Błąd podczas wysyłania maila -> ", error);
      });
}