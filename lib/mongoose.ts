import User from "@/models/UserModel";
import mongoose from "mongoose";
import { hashPassword } from "./bcript";

export const mongooseDbConnect = async () => {
  const uri = process.env.MONGODB_URI as string;

  try {
    mongoose.connections[0].readyState === 0
      ? await mongoose.connect(uri).then(() => console.log("Połączono"))
      : null;
  } catch (error) {
    throw new Error(
      ("Błąd podczas połączenia do bazy danych -> " + error) as string
    );
  }
};

export const mongooseDbDisconnect = async () => {
  mongoose.connections[0].readyState === 1 &&
    (await mongoose.disconnect().then(() => console.log("disconnected")));
};

export const getAllUsersFromDb = async () => {
  let allUsers: string[];
  await mongooseDbConnect();
  allUsers = await User.find({});
  await mongooseDbDisconnect();
  return allUsers;
};

export const findUser = async (username: string | FormDataEntryValue) => {
  let user;
  await mongooseDbConnect();
  const data = await User.findOne({ username });
  user = await data;

  await mongooseDbDisconnect();
  return user;
};

export const findUserByEmail = async (email: string | FormDataEntryValue) => {
  let user;
  await mongooseDbConnect();
  const data = await User.findOne({ email });
  user = await data;
  await mongooseDbDisconnect();
  return user;
};

export const findUserByResetToken = async (
  token: string | FormDataEntryValue
) => {
  let user;
  await mongooseDbConnect();
  console.log(token);

  const data = await User.findOne({ resetToken: token });
  console.log(data);

  user = await data;
  await mongooseDbDisconnect();
  return user;
};

export const findUserById = async (id: string | FormDataEntryValue) => {
  let user;
  await mongooseDbConnect();
  const data = await User.findOne({ id });
  user = await data;
  await mongooseDbDisconnect();
  return user;
};

export const findUserByVeryficationToken = async (
  veryficationToken: string | FormDataEntryValue
) => {
  let user;
  await mongooseDbConnect();
  const data = await User.findOne({ veryficationToken: veryficationToken });
  user = await data;
  await mongooseDbDisconnect();

  return user;
};

export const activateUser = async (id: string) => {
  let response;
  await mongooseDbConnect();
  response = await User.findByIdAndUpdate(id, { isConfirmed: true });
  await mongooseDbDisconnect();
  return response;
};

export const updateUserByEmail = async (
  email: string | FormDataEntryValue,
  update: any
) => {
  let response;
  await mongooseDbConnect();
  response = await User.findOneAndUpdate({ email }, update);
  await mongooseDbDisconnect();
  return response;
};
export const changePassword = async (
  email: string | FormDataEntryValue,
  newPassword: string | FormDataEntryValue
) => {
  let response;
  const hashedNewPassword = await hashPassword(newPassword);
  await mongooseDbConnect();
  response = await User.findOneAndUpdate(
    { email },
    { password: hashedNewPassword }
  );
  await mongooseDbDisconnect();
  return response;
};
