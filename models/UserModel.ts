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
      required: true,
      value: false,
    },
    veryficationToken: {
      type: String,
      required: false,
    },
    resetTokenExpire: {
      type: Date,
      required: false,
    },
    role: {
      type: String,
      required: true,
      value: "user",
    },
    newsletter: {
      type: Boolean,
      required: true,
      value: false,
    },
    freeConsultation: {
      type: Number,
      required: true,
      value: 1,
    },
    consultations: {
      type: Number,
      required: true,
      value: 0,
    },
    resetToken: {
      type: String,
      required: false,
    },
    resetPasswordTokenExpire: {
      type: Date,
      required: false,
    },
    adminDescription: {
      type: String,
      required: true,
      value: "",
    },
  },
  { timestamps: true }
);

export default models.User || model("User", UserSchema);
