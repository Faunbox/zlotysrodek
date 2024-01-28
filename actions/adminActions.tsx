"use server";

import {
  findUserByEmail,
  getAllUsersFromDb,
  updateUserByEmail,
} from "@/lib/mongoose";

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
  const freeConsultation = formData.get("freeConsultationail");
  const consultations = formData.get("consultations");

  let response;
  let data;

  try {
    data = await updateUserByEmail(email!, {
      adminDescription: adminDescription,
      freeConsultation: freeConsultation,
      consultations: consultations,
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
