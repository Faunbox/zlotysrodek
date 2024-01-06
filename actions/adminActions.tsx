'use server'

import { getAllUsersFromDb } from "@/lib/mongoose"

export async function getAllUsers() {
const users = await getAllUsersFromDb()
return users
}