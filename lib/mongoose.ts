import User from "@/models/UserModel";
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;

export const findUser = async (username: string | FormDataEntryValue) => {
  let user;
  await mongoose.connect(uri);
  const data = await User.findOne({ username });
  user = await data;

  await mongoose.disconnect();
  return user;
};

export const findUserByEmail = async (email: string | FormDataEntryValue) => {
  let user;
  await mongoose.connect(uri);
  const data = await User.findOne({ email });
  user = await data;
  await mongoose.disconnect();
  return user;
};

export const findUserByResetToken = async (
  token: string | FormDataEntryValue
) => {
  let user;
  await mongoose.connect(uri);
  console.log(token);

  const data = await User.findOne({ resetToken: token });
  console.log(data);

  user = await data;
  await mongoose.disconnect();
  return user;
};

export const findUserById = async (id: string | FormDataEntryValue) => {
  let user;
  await mongoose.connect(uri);
  const data = await User.findOne({ id });
  user = await data;
  await mongoose.disconnect();
  return user;
};

export const activateUser = async (id: string) => {
  let response;
  await mongoose.connect(uri);
  response = await User.findByIdAndUpdate(id, { isConfirmed: true });
  await mongoose.disconnect();
  return response;
};

export const updateUserByEmail = async (
  email: string | FormDataEntryValue,
  update: any
) => {
  let response;
  await mongoose.connect(uri);
  response = await User.findOneAndUpdate({ email }, update);
  await mongoose.disconnect();
  return response;
};
