"use server";
import sgMail from "@sendgrid/mail";

interface mail {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

type ResponseData = {
  status?: string;
  message?: string;
};

export async function sendContactEmail(formData: FormData) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
  const email = formData.get("email");

  let response: ResponseData = {};

  const msgToCompany: mail = {
    to: "faunbox2@gmail.com", // Change to your recipient
    from: process.env.SENDGRID_EMAIL!, // Change to your verified sender
    subject: `Wiadomośc z formularza kontaktowego od ${email}`,
    text: "data?.message",
    html: `<div>
    <h1>Wiadomość od: </h1>
    <h2>Adres email:</h2>
    <h2>Wiadomość: </h2>
    </div>`,
  };

  await sgMail
    .send(msgToCompany)
    .then(() => {
      response = {
        status: "success",
        message: "Wiadomość wysłana",
      };
    })
    .catch((error) => {
      response = {
        status: "error",
        message: `Wstąpił błąd podczas wysyłania. Spróbuj ponownie później`,
      };
    });

  return { response };
}
