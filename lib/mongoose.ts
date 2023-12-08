import User from "@/models/UserModel";
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;

export const findUser = async (email: string | FormDataEntryValue) => {
  let user;
  await mongoose.connect(uri);
  const data = await User.findOne({ email });
  user = await data;
  await mongoose.disconnect();
  return user;
};

export const activateUser = async (id: string) => {
  let response
  await mongoose.connect(uri);
  response = await User.findByIdAndUpdate(id, {isConfirmed: true}) 
  await mongoose.disconnect()
  return response
}
