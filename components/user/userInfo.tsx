import { UserType } from "@/actions/authActions";
import Image from "next/image";
import FilledButton from "../typography/filledButton";
import Link from "next/link";
import VeryficationButton from "./confirmationButton";
import ResetPasswordButton from "./resetPasswordButton";

const UserInfo = ({ user }: { user: UserType }) => {
  return (
    <section className="mx-60 flex flex-row">
      <div className="flex flex-col items-center justify-center w-7/12 text-green">
        <ul className="w-full text-large tracking-wide gap-5 flex flex-col">
          <li>Użytkownik: {user.username as string}</li>
          <li>Nr telefonu: {user.phoneNumber as number}</li>
          <li>Email: {user.email as string}</li>
          <li>Konsultacje: {user.consultations as number}</li>
          {/* <li>Zmień dane użytkownika</li> */}
          <ResetPasswordButton email={user.email as string} />
          {!user.isConfirmed && (
            <VeryficationButton email={user.email as string} />
          )}
        </ul>
        <Link href={"/oferta"}>
          <FilledButton color="bg-darkGreen" text="white">
            Kup Konsultacje
          </FilledButton>
        </Link>
      </div>
      <div className="w-5/12">
        <Image
          src="/images/armchair.webp"
          alt="Złoty fotel"
          width={350}
          height={600}
          // className="absolute top-32"
        />
      </div>
    </section>
  );
};

export default UserInfo;
