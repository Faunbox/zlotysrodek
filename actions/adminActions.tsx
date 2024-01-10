"use server";

import { getAllUsersFromDb } from "@/lib/mongoose";

export async function getAllUsers() {
  const users = await getAllUsersFromDb();

  return JSON.parse(JSON.stringify(users));
}

export async function updateUserData() {
  
}
