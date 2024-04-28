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
  const name = formData.get("name");
  const email = formData.get("email");
  const description = formData.get("description");

  let response: ResponseData = {};

  const msgToCompany: mail = {
    to: "faunbox2@gmail.com", // Change to your recipient
    from: process.env.SENDGRID_EMAIL!, // Change to your verified sender
    subject: `Wiadomośc z formularza kontaktowego od ${name}`,
    text: "data?.message",
    html: `<div>
    <h1>Wiadomość od: ${name}</h1>
    <h2>Adres email: ${email}</h2>
    <h2>Wiadomość:${description} </h2>
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

  // const data: any = {
  //   api_token: process.env.FAKTUROWNIA_API_KEY,
  //   invoice: {
  //     kind: "vat",
  //     number: "null",
  //     sell_date: "2013-01-16",
  //     issue_date: "2013-01-16",
  //     payment_to: "2013-01-23",
  //     seller_name: "Wystawca Sp. z o.o.",
  //     seller_tax_no: "5252445767",
  //     buyer_name: "Klient1 Sp. z o.o.",
  //     buyer_email: "buyer@testemail.pl",
  //     buyer_tax_no: "5252445767",
  //     positions: [
  //       { name: "Produkt A1", tax: 23, total_price_gross: 10.23, quantity: 1 },
  //       { name: "Produkt A2", tax: 0, total_price_gross: 50, quantity: 3 },
  //     ],
  //   },
  // };

  // await fetch(`${process.env.FAKTUROWNIA_API_URL}/invoices.json`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   body: JSON.stringify(data),
  // })
  //   .then((response) => console.log(response.body))
  //   .catch((err) => console.log("Błąd", err));

  return { response };
}
