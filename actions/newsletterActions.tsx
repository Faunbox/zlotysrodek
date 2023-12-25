"use server";

const sendgridApiKey = process.env.SENDGRID_API_KEY;

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
      console.log(response.statusCode);
      console.log(response.body);
    })
    //@ts-ignore
    .catch((error) => {
      console.error(error.response.body);
      response = {
        status: "error",
        message: "Nie dodano!",
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
