import sgMail, { MailDataRequired } from "@sendgrid/mail";

type EmailInfoType = {
  to: string;
  from: string;
  subject: string;
  text: string | null;
  html: string;
  template_id?: string;
};

export type TemplateIdEmail = {
  personalizations: {
    to: string | string[];
    dynamic_template_data: any;
  };
  from: {
    email: string | string[];
    name: string;
  };
  reply_to: { email: string | string[]; name: string };
  template_id: string;
};

type ValidEmailType = EmailInfoType & MailDataRequired;
type Template = MailDataRequired | MailDataRequired[];

export const sgMailClient = sgMail.setApiKey(
  process.env.SENDGRID_API_KEY || ""
);

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

export async function sendEmailWithTemplateId(data: Template) {
  await sgMail.send(data!).catch((error) => {
    console.log("Błąd podczas wysyłania maila -> ", error.response.body.errors);
  });
}
