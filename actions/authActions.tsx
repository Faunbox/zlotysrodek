"use server";

import { hashPassword, isSamePassword } from "@/lib/bcript";
import {
  changePassword,
  findUserByEmail,
  findUserByResetToken,
  mongooseDbConnect,
  mongooseDbDisconnect,
  updateUserByEmail,
} from "@/lib/mongoose";
import { sendEmailWithTemplateId } from "@/lib/sendgrid";
import User from "@/models/UserModel";
import sgMail from "@sendgrid/mail";
import crypto, { BinaryLike } from "crypto";
import { ReactNode } from "react";

export type UserType = {
  _id?: string;
  username: FormDataEntryValue | string;
  password: FormDataEntryValue | string;
  email: FormDataEntryValue | string;
  phoneNumber: FormDataEntryValue | string | number;
  isConfirmed?: boolean;
  veryficationToken?: string;
  resetTokenExpire: Date | number;
  name: FormDataEntryValue | ReactNode;
  surname: FormDataEntryValue | string;
  role?: string;
  consultations?: number | string;
  newsletter?: boolean;
  adminDescription?: string;
  freeConsultation?: boolean | number | string;
  nextMeeting?: string;
  confirmedDate?: Date;
};

type ResponseData = {
  status?: string;
  message?: string;
};

let newUser: UserType;
let response: ResponseData = {};

const createVeryficationToken = () => {
  return crypto.randomBytes(128).toString("hex");
};

const encodePasswordToken = (token: string | FormDataEntryValue) => {
  return crypto
    .createHash("sha256")
    .update(token as BinaryLike)
    .digest("hex");
};

export async function registerUser(formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");
  const confirmedPassword = formData.get("confirmedPassword");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");
  const name = formData.get("name");
  const surname = formData.get("surname");

  if (password !== confirmedPassword) {
    response = {
      status: "error",
      message: "Hasła nie są takie same",
    };
    return { response };
  }

  try {
    const isUserExist = await findUserByEmail(JSON.parse(email! as string));
    let newUserEmail: string;

    if (isUserExist === null && password === confirmedPassword) {
      const veryficationToken = createVeryficationToken();
      await hashPassword(password!)
        .then((hashedPassword: string) => {
          const password = hashedPassword;

          newUser = {
            username: JSON.parse(username! as string),
            password: password!,
            email: JSON.parse(email! as string),
            phoneNumber: JSON.parse(phoneNumber! as string)!,
            isConfirmed: false,
            veryficationToken: veryficationToken,
            resetTokenExpire: Date.now() + 360000,
            name: JSON.parse(name! as string),
            surname: JSON.parse(surname! as string),
            role: "user",
            consultations: 0,
            freeConsultation: 1,
            newsletter: false,
          };

          const registerUser = new User(newUser);
          return registerUser;
        })
        .then(async (user) => {
          newUserEmail = user.email;

          try {
            await mongooseDbConnect();
            const newUser = await user.save();

            await mongooseDbDisconnect();
          } catch (error) {
            return (response = {
              status: "error",
              message: "Błąd poczas tworzenia konta",
            });
          }
        })
        .then(
          () =>
            (response = {
              status: "success",
              message: "Konto zostało stworzone",
            })
        )
        .finally(() =>
          sendEmailWhenCreateUser(newUserEmail, veryficationToken)
        );
    } else {
      response = {
        status: "error",
        message: "Konto o podanym adresie email już istnieje!",
      };
    }
    return { response };
  } catch (error) {
    console.log(error);

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
      const isPasswordOk = await isSamePassword(
        JSON.stringify(password),
        checkUser.password as string
      );
      console.log({ isPasswordOk });

      (await isPasswordOk) ? (isOk = true) : (isOk = false);
      return isOk;
    }
  } catch (error) {
    throw new Error("Błąd logowania");
  }
}

export async function sendEmailWhenCreateUser(
  email: string,
  veryficationToken: string
) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");

  const msgToCompany = {
    personalizations: [
      {
        to: "faunbox2@gmail.com",
        dynamic_template_data: {
          url: `${process.env.NEXTAUTH_URL}/user/auth/${veryficationToken}`,
        },
      },
    ],
    from: { email: process.env.SENDGRID_EMAIL!, name: "Dorota Sojecka" },
    reply_to: { email: process.env.SENDGRID_EMAIL!, name: "Dorota Sojecka" },
    template_id: "d-c8ded498821d40038603eb165006d6a3",
  };
  //@ts-expect-error
  await sendEmailWithTemplateId(msgToCompany).catch((error) => {
    console.log("Błąd podczas wysyłania maila -> ", error);
  });
}

export async function sendResetPasswordToken(
  formData: FormData | null,
  userEmail?: string
) {
  const email = formData?.get("email") || userEmail;
  const user = await findUserByEmail(JSON.parse(email as string));

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
    const data = await updateUserByEmail(email!, {
      resetToken: passwordResetToken,
      resetPasswordTokenExpire: resetTokenExpire,
    });
    console.log({ data });
  } catch (error) {
    response = {
      status: "error",
      message: "Błąd bazy danych!",
    };
    return { response };
  } finally {
    const msgToResetPassword = {
      personalizations: [
        {
          to: "faunbox2@gmail.com",
          dynamic_template_data: {
            url: passwordResetLink,
          },
        },
      ],
      from: { email: process.env.SENDGRID_EMAIL!, name: "Dorota Sojecka" },
      reply_to: { email: process.env.SENDGRID_EMAIL!, name: "Dorota Sojecka" },
      template_id: "d-d7c4b1c77f504149a58a0f56a8765acd",
    };
    //@ts-expect-error
    await sendEmailWithTemplateId(msgToResetPassword).catch((error) => {
      response = {
        status: "error",
        message: "Błąd w trakcie wysyłania maila!",
      };
      console.log("Błąd podczas wysyłania maila -> ", error.response.body);
      return { response };
    });

    response = {
      status: "success",
      message: "Sprawdz skrzynkę mailową!",
    };
    return { response };
  }
}

export async function resetUserPassword(formData: FormData) {
  const token = formData.get("token");
  const newPassword = formData.get("password");
  const confirmedPassword = formData.get("confirmedPassword");

  if (newPassword !== confirmedPassword) {
    response = {
      status: "error",
      message: "Hasła nie są takie same",
    };
    return { response };
  }

  const dbToken = encodePasswordToken(token!);

  const user = await findUserByResetToken(dbToken!);

  if (user === null) {
    response = {
      status: "error",
      message: "Błąd podczas zmiany hasła. Spróbuj ponownie później",
    };
    return { response };
  }

  if (Date.now() > user?.resetPasswordTokenExpire) {
    response = {
      status: "error",
      message: "Twój token wygasł",
    };
    return { response };
  }

  await changePassword(user.email, newPassword!).then(
    () =>
      (response = {
        status: "success",
        message: "Hasło zostało zmienione",
      })
  );

  return { response };
}

export async function sendVeryfiactionToken(email: string) {
  let response;
  const newToken = createVeryficationToken();
  const resetTokenExpire = Date.now() + 3600000;
  // const resetTokenExpire = Date.now()

  const user = await updateUserByEmail(email, {
    veryficationToken: newToken,
    resetTokenExpire: resetTokenExpire,
  })
    .then(
      () =>
        (response = {
          status: "success",
          message: "Wysłano nowy link do aktywacji konta",
        })
    )
    .catch((err) => {
      response = {
        status: "error",
        message: "Błąd podczas tworzenia nowego tokenu",
      };
    });
  //@ts-ignore
  sendEmailWhenCreateUser(user?.email!, newToken);
  return response;
}
