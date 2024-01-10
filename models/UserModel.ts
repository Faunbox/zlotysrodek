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
      required: false,
      value: "user",
    },
    newsletter: {
      type: Boolean,
      required: false,
      value: false,
    },
    freeConsultation: {
      type: Boolean,
      required: false,
      value: true,
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
    resetPasswordTokenExpire: {
      type: Date,
      required: false,
    },
    adminDescription: {
      type: String,
      required: false,
      value: "",
    },
  },
  { timestamps: true }
);

export default models.User || model("User", UserSchema);
