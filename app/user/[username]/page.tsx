import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import UserInfo from "@/components/user/userInfo";
import { findUser } from "@/lib/mongoose";
import { redirect } from "next/navigation";

async function getData(email: string) {
  const data = await findUser(email);
  console.log({ data });

  if (data) return data;
  else redirect("/");
}

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const user = await getData(params.username);

  return (
    <main className="page">
      <BackgroundedHeader>Twój profil</BackgroundedHeader>
      <UserInfo user={user} />
    </main>
  );
}
