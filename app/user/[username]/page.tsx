import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import VeryficationButton from "@/components/user/confirmationButton";
import ResetPasswordButton from "@/components/user/resetPasswordButton";
import UserInfo from "@/components/user/userInfo";
import { findUser } from "@/lib/mongoose";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getData(email: string) {
  const data = await findUser(email);

  if (data) return data;
  else redirect("/");
}

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  // const userEmail = params.username;
  // const splitEmail = userEmail.split(/[%40]/)
  // const email = `${splitEmail[0]}@${splitEmail[3]}`

  const username = params.username;

  const user = await getData(username);

  return (
    <main className="page">
      <BackgroundedHeader>Konto</BackgroundedHeader>
      <UserInfo user={user} />
    </main>
  );
}
