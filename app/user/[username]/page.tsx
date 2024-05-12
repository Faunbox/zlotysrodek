import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import UserInfo from "@/components/user/userInfo";
import { findUser } from "@/lib/mongoose";
import { redirect } from "next/navigation";

async function getData(email: string) {
  console.log(email);

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
      <BackgroundedHeader>Twój profil</BackgroundedHeader>
      <UserInfo user={user} />
    </main>
  );
}
