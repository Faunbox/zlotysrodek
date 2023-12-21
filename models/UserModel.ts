import { Schema, models, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      requried: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    isConfirmed: {
      type: Boolean,
      required: false,
      value: false,
    },
    role: {
      type: String,
      required: false,
      value: "user",
    },
    newsletter: {
      type: Boolean,
      required: false,
      value: false,
    },
    consultations: {
      type: Number,
      required: false,
      value: 0,
    },
    resetToken: {
      type: String,
      required: false,
    },
    resetTokenExpire: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true }
);

export default models.User || model("User", UserSchema);
