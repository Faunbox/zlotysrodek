"use server";

import {
  findUserByEmail,
  getAllUsersFromDb,
  updateUserByEmail,
} from "@/lib/mongoose";
import { sendEmail } from "@/lib/sendgrid";
import sgMail from "@sendgrid/mail";

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

  let response;

  const emailHtml = {
    to: "faunbox2@gmail.com",
    from: process.env.SENDGRID_EMAIL!,
    subject: "Następne spotkanie - Złoty Środek",
    text: "Płatność sfinalizowana",
    html: `<main><h2>Następne spotkanie</h2><div><p>Data: ${date}</p><p>Godzina: ${time}</p><p>Link do spotkania: ${link}</p></div></main>`,
  };

  const meetingDate = (date! as string) + time!;

  try {
    await sendEmail(emailHtml);

    const update = await updateUserByEmail(email!, {
      nextMeeting: meetingDate,
    });
    console.log(update);
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
