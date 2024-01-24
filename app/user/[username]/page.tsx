import VeryficationButton from "@/components/user/confirmationButton";
import ResetPasswordButton from "@/components/user/resetPasswordButton";
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
    <div className="m-10">
      <ul>
        {/* <li>My profile: {userEmail.substring(0, userEmail.indexOf("%"))}</li> */}
        <li>My profile: {username}</li>
        <li>{user.phoneNumber}</li>
        <li>{user.email}</li>
        <li>
          {user.role === "admin" ? (
            <Link href={"/admin"}>Admin panel</Link>
          ) : (
            user.role
          )}
        </li>
        <ResetPasswordButton email={user?.email} />
        <li>Twoje konsultacje: {user?.consultations}</li>
        <li>Confirmed: {user?.isConfirmed ? "true" : "false"}</li>
        {!user?.isConfirmed && <VeryficationButton email={user?.email} />}
        {user?.consultations <= 3 && (
          <Link href={"/konsultacje"}>Dokup konsultacje</Link>
        )}
        <li>{user?.adminDescription}</li>
      </ul>
    </div>
  );
}
