"use server";

import User from "@/models/UserModel";
import mongoose from "mongoose";

const sendgridApiKey = process.env.SENDGRID_API_KEY;

async function addNewsletterInDb(email: FormDataEntryValue) {
  await mongoose.connect(process.env.MONGODB_URI as string);
  const isUserInDb = await User.findOne({ email });
  if (isUserInDb) {
    await User.findOneAndUpdate({ email }, { newsletter: true });
  } else {
    console.log("Brak uzytkownika w bazie danych");
  }

  await mongoose.disconnect();
}

export async function addToContact(formData: FormData) {
  let response;
  const client = require("@sendgrid/client");
  client.setApiKey(sendgridApiKey);

  const email = formData.get("email");
  const name = formData.get("name");

  const data = {
    contacts: [
      {
        email: email,
        first_name: name,
      },
    ],
    list_ids: [process.env.SENDGRID_CONTACT_ID],
  };

  const request = {
    url: `/v3/marketing/contacts`,
    method: "PUT",
    body: data,
    headers: { Authorization: `Bearer ${sendgridApiKey}` },
  };

  await client
    .request(request)
    //@ts-ignore
    .then(([response, body]) => {
      try {
        if (response.statusCode === 202) {
          addNewsletterInDb(email!);
        }
      } catch (error) {
        console.log("Nie dodano newslettera do bazy danych");
      }
    })
    //@ts-ignore
    .catch((error) => {
      console.error(error.response.body);
      response = {
        status: "error",
        message: "Ups, wystąpił jakiś błąd.",
      };
    })
    .finally(() => {
      response = {
        status: "success",
        message: "Dodano!",
      };
    });

  return { response };
}
