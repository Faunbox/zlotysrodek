"use server";

import { hashPassword, isSamePassword } from "@/lib/bcript";
import {
  findUserByEmail,
  findUserByResetToken,
  updateUserByEmail,
} from "@/lib/mongoose";
import User from "@/models/UserModel";
import sgMail from "@sendgrid/mail";
import mongoose from "mongoose";
import crypto from "crypto";

export type UserType = {
  username: FormDataEntryValue;
  password: FormDataEntryValue;
  email: FormDataEntryValue;
  phoneNumber: FormDataEntryValue | string;
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
    const isUserExist = await findUserByEmail(email!);
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
    const checkUser = await findUserByEmail(email);
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
    subject: `Stworzenie nowego konta dla adresu ${email}`,
    text: "data?.message",
    html: `<div>
    <h1>Wiadomość od: </h1>
    <h2>Adres email:</h2>
    <h2>Wiadomość: </h2>
    </div>`,
  };

  await sgMail.send(msgToCompany).catch((error) => {
    console.log("Błąd podczas wysyłania maila -> ", error);
  });
}

export async function sendResetPasswordToken(formData: FormData) {
  const email = formData.get("email");
  const user = await findUserByEmail(email!);
  // console.log(user);

  if (!user) {
    console.log("Brak użytkownika o podanym adresie email");

    response = {
      status: "error",
      message: "Konto o podanym adresie email nie istnieje!",
    };
    return { response };
  }

  const resetToken = crypto.randomBytes(20).toString("hex");
  const passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  const passwordResetLink = `${process.env.NEXTAUTH_URL}/user/resetowanie-hasla/${resetToken}`;

  const resetTokenExpire = Date.now() + 3600000;

  try {
    await updateUserByEmail(email!, {
      resetToken: passwordResetToken,
      resetTokenExpire: resetTokenExpire,
    });
  } catch (error) {
    response = {
      status: "error",
      message: "Błąd bazy danych!",
    };
    return { response };
  } finally {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

    const msgToResetPassword = {
      to: "faunbox2@gmail.com", // Change to your recipient
      from: process.env.SENDGRID_EMAIL!, // Change to your verified sender
      subject: `Resetowanie hasla dla konta - ${email}`,
      text: "data?.message",
      html: `<div>
      <a href=${passwordResetLink}>Zresetuj hasło</a>
      </div>`,
    };

    await sgMail.send(msgToResetPassword).catch((error) => {
      console.log("Błąd podczas wysyłania maila -> ", error);
    });
    response = {
      status: "success",
      message: "Sprawdz skrzynkę mailową!",
    };
    return { response };
  }
}

export async function resetUserPassword(formData: FormData) {
  console.log(formData);
  const token = formData.get("token");
  const user = await findUserByResetToken(token!);
  console.log(user);
  const [resetToken, resetTokenExpire] = await user;

  if (Date.now() > resetTokenExpire) {
    response = {
      status: "error",
      message: "Twój token wygasł",
    };
    return { response };
  }

  console.log("token jest ok");

  return { response };

  //TODO: porównać token z tym w bazie, porównać hasła czy są takie same oraz zmienic pw w bazie danych
}
