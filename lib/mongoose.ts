import User from "@/models/UserModel";
import mongoose from "mongoose";
import { hashPassword } from "./bcript";
import { UserType } from "@/actions/authActions";

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

export const getAllUsersFromDb = async (
  page: number | string,
  limit: number | string
) => {
  let allUsers: string[];
  await mongooseDbConnect();
  allUsers = await User.find({})
    .limit(Number(limit) * 1)
    .skip((Number(page) - 1) * Number(limit!))
    .sort({ email: 1 });

  const totalUsersValue = await User.countDocuments();
  await mongooseDbDisconnect();
  const totalPages = Math.ceil(totalUsersValue / Number(limit));

  return { data: allUsers, totalPages: totalPages };
};

export const findUser = async (username: string | FormDataEntryValue) => {
  let user;
  await mongooseDbConnect();
  const nickname = decodeURIComponent(username as string);

  console.log({ nickname });

  const data = await User.findOne({ username: nickname });
  user = await data;

  await mongooseDbDisconnect();
  console.log({ user });

  return user;
};

export const findUserByEmail = async (email: string | FormDataEntryValue) => {
  let user: UserType;
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

  const data = await User.findOne({ resetToken: token });

  user = await data;
  console.log({ user });
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
  response = await User.findByIdAndUpdate(id, {
    isConfirmed: true,
    confirmedDate: Date.now(),
  });
  await mongooseDbDisconnect();
  return response;
};

export const updateUserByEmail = async (
  email: string | FormDataEntryValue,
  update: any
) => {
  let response;

  await mongooseDbConnect();

  console.log(update);

  response = await User.findOneAndUpdate(
    //@ts-ignore
    { email },
    update,
    { new: true }
  );

  console.log(response);

  await mongooseDbDisconnect();

  return response;
};
export const changePassword = async (
  email: string | FormDataEntryValue,
  newPassword: string | FormDataEntryValue
) => {
  let response;

  const hashedNewPassword = await hashPassword(JSON.stringify(newPassword));
  await mongooseDbConnect();
  response = await User.findOneAndUpdate(
    { email },
    { password: hashedNewPassword }
  );
  await mongooseDbDisconnect();

  return response;
};
