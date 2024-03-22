"use server";

import {
  findUserByEmail,
  getAllUsersFromDb,
  updateUserByEmail,
} from "@/lib/mongoose";
import { sgMailClient } from "@/lib/sendgrid";

export async function getAllUsers(
  page: number | string,
  limit?: number | string
) {
  const users = await getAllUsersFromDb(page, limit!);

  // console.log(users);

  return JSON.parse(JSON.stringify(users));
}

export async function searchUserByEmail(formData: FormData) {
  let response;
  let user;
  const email = formData.get("search");

  try {
    user = await findUserByEmail(email!);
  } catch (error) {
    response = {
      user: null,
      status: "fail",
    };
    return { response };
  } finally {
    response = {
      user: JSON.parse(JSON.stringify(user)),
      status: "success",
    };
  }

  return { response };
}

export async function updateUserData(formData: FormData) {
  const email = formData.get("email");
  const adminDescription = formData.get("adminDescription");
  const freeConsultation = formData.get("freeConsultation");
  const consultations = formData.get("consultations");

  let response;
  let data;

  try {
    data = await updateUserByEmail(email!, {
      adminDescription: adminDescription,
      freeConsultation: Number(freeConsultation),
      consultations: Number(consultations),
    });
  } catch (error) {
    response = {
      user: null,
      status: "fail",
    };
    return { response };
  } finally {
    response = {
      user: JSON.parse(JSON.stringify(data)),
      status: "success",
    };
    return { response };
  }
}

export async function sendEndEmail(formData: FormData) {
  const email = formData.get("email");
  const date = formData.get("date");
  const time = formData.get("time");
  const link = formData.get("link");
  const consultations = formData.get("consultations");
  const name = formData.get("name");

  let response;

  const emailHtml = {
    personalizations: [
      {
        to: "faunbox2@gmail.com",
        dynamic_template_data: {
          link: link,
          name: name,
          date: date,
          time: time,
        },
      },
    ],
    from: { email: process.env.SENDGRID_EMAIL!, name: "Dorota Sojecka" },
    reply_to: { email: process.env.SENDGRID_EMAIL!, name: "Dorota Sojecka" },
    template_id: "d-b048b4389b9a41e5a01e0b9cccd9394f",
  };

  const meetingDate = (date! as string) + " " + time!;

  try {
    await sgMailClient
      //@ts-expect-error
      .send(emailHtml)
      .catch((error: string) => {
        console.log("Błąd podczas wysyłania maila -> ", error);
      });

    console.log(Number(consultations));
    console.log(Number(consultations) - 1);

    await updateUserByEmail(email!, {
      nextMeeting: meetingDate,
      consultations: Number(consultations) - 1,
    });
  } catch (error) {
    response = {
      status: "error",
      message: `Błąd podczas wysyłania emaila -> ${error}`,
    };
    return { response };
  } finally {
    response = {
      status: "success",
      message: "Konto zostało stworzone",
    };
    return { response };
  }
}
