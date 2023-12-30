import VeryficationButton from "@/components/user/confirmationButton";
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
    <div>
      <ul>
        {/* <li>My profile: {userEmail.substring(0, userEmail.indexOf("%"))}</li> */}
        <li>My profile: {username}</li>
        <li>{user.phoneNumber}</li>
        <li>{user.email}</li>
        <li>Twoje konsultacje: {user?.consultations}</li>
        <li>Confirmed: {user?.isConfirmed ? "true" : "false"}</li>
        {!user?.isConfirmed && (
          //@ts-expect-error
          <VeryficationButton email={user?.email} />
        )}
        {user?.consultations <= 3 && (
          <Link href={"/konsultacje"}>Dokup konsultacje</Link>
        )}
      </ul>
    </div>
  );
}
