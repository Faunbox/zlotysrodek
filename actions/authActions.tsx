"use server";

import { hashPassword, isSamePassword } from "@/lib/bcript";
import { findUser } from "@/lib/mongoose";
import User from "@/models/UserModel";
import sgMail from "@sendgrid/mail";
import mongoose from "mongoose";

type UserType = {
  username: FormDataEntryValue;
  password: FormDataEntryValue;
  email: FormDataEntryValue;
  phoneNumber: FormDataEntryValue;
  isConfirmed?: boolean;
  name: FormDataEntryValue;
  surname: FormDataEntryValue;
  role?: string;
  consultations?: number;
  newsletter?: boolean;
};

type ResponseData = {
  status?: string;
  message?: string;
};

const uri = process.env.MONGODB_URI as string;
let newUser: UserType;
let response: ResponseData = {};

export async function registerUser(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");
  const name = formData.get("name");
  const surname = formData.get("surname");

  try {
    const isUserExist = await findUser(email!);
    let newUserEmail: string;

    if (isUserExist === null) {
      await hashPassword(password!)
        .then((hashedPassword: string) => {
          const password = hashedPassword;
          newUser = {
            username: username!,
            password: password,
            email: email!,
            phoneNumber: phoneNumber!,
            isConfirmed: false,
            name: name!,
            surname: surname!,
            role: "user",
            consultations: 0,
            newsletter: false,
          };

          const registerUser = new User(newUser);
          return registerUser;
        })
        .then(async (user) => {
          newUserEmail = user.email;
          await mongoose.connect(uri);
          await user.save();
          await mongoose.disconnect();
        })
        .then(
          () =>
            (response = {
              status: "success",
              message: "Konto zostało stworzone",
            })
        )
        .finally(() => sendEmailWhenCreateUser(newUserEmail));
    } else {
      response = {
        status: "error",
        message: "Konto o podanym adresie email już istnieje!",
      };
    }
    return { response };
  } catch (error) {
    response = {
      status: "error",
      message: `Wstąpił błąd podczas tworzenia konta. Spróbuj ponownie później lub skontaktuj się z administratorem`,
    };
    return { response };
  }
}

export async function checkForUserFromDb(email: string, password: string) {
  let isOk: boolean;
  try {
    const checkUser = await findUser(email);
    if (checkUser === null) {
      isOk = false;
      return isOk;
    }
    if (checkUser !== null) {
      const isPasswordOk = await isSamePassword(password, checkUser.password);
      isPasswordOk ? (isOk = true) : (isOk = false);
      return isOk;
    }
  } catch (error) {
    throw new Error("Błąd logowania");
  }
}



export async function sendEmailWhenCreateUser(email: string) {

  sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

  const msgToCompany = {
    to: "faunbox2@gmail.com", // Change to your recipient
    from: process.env.SENDGRID_EMAIL!, // Change to your verified sender
    subject: `Wiadomośc z formularza kontaktowego od ${email}`,
    text: "data?.message",
    html: `<div>
    <h1>Wiadomość od: </h1>
    <h2>Adres email:</h2>
    <h2>Wiadomość: </h2>
    </div>`,
  };

  await sgMail
    .send(msgToCompany)
    .catch((error) => {
      console.log("Błąd podczas wysyłania maila -> ", error);
    });
}
