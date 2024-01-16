"use server";

import { getAllUsersFromDb } from "@/lib/mongoose";

export async function getAllUsers(page: number | string, limit?: number | string) {
  
  const users = await getAllUsersFromDb(page, limit!);

  // console.log(users);

  return JSON.parse(JSON.stringify(users));
}

export async function updateUserData() {}
