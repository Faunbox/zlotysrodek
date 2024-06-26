import { UserType } from "@/actions/authActions";
import FilledButton from "../typography/filledButton";
import Link from "next/link";
import VeryficationButton from "./confirmationButton";
import ResetPasswordButton from "./resetPasswordButton";
import Image from "next/image";

const UserInfo = ({ user }: { user: UserType }) => {
  return (
    <section className="lg:mx-60 flex flex-col w-full lg:w-7/12">
      <div className="flex flex-col relative items-start font-montserrat justify-center text-black bg-white border-2 border-green mt-24 mb-10 p-10 pt-24   lg:p-24 gap-10 w-full shadow-large">
        <div className="absolute -top-[0] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[150px] max-h-[150px] rounded-full bg-lightGreen w-full h-full overflow-hidden">
          <Image
            src={"/images/ludzik.svg"}
            alt={"ludzik"}
            width={150}
            height={150}
            className="border-2 border-green shadow-lg shadow-black"
          />
        </div>
        <ul className="w-full text-large tracking-wide gap-3 flex flex-col">
          <li>Użytkownik: {user.username as string}</li>
          <li>
            Nr telefonu:{" "}
            <a
              href={`tel:${user.phoneNumber}`}
              className="hover:underline underline-offset-4"
            >
              {user.phoneNumber as number}
            </a>
          </li>
          <li>
            Email:{" "}
            <a
              href={`mailto:${user.email}`}
              className="hover:underline underline-offset-4"
            >
              {user.email as string}
            </a>
          </li>
          <li>Konsultacje: {user.consultations as number}</li>
          {user?.nextMeeting && (
            <li>Następna konsultacja: {user.nextMeeting as string}</li>
          )}
          {/* <li>Zmień dane użytkownika</li> */}
        </ul>
        <div className="flex flex-col items-center justify-center gap-6 text-darkGreen w-full">
          <ResetPasswordButton email={user.email as string} />
          {!user.isConfirmed && (
            <VeryficationButton email={user.email as string}>
              Potwierdź konto
            </VeryficationButton>
          )}
          {user.role === "admin" && (
            <Link href={"/admin"}>
              <FilledButton>Panel administratora</FilledButton>
            </Link>
          )}
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 w-full">
            <Link href={"/oferta"}>
              <FilledButton color="bg-darkGreen" text="white">
                Kup Konsultacje
              </FilledButton>
            </Link>
            <Link href={"/kontakt"}>
              <FilledButton color="bg-darkGreen" text="white">
                Kontakt
              </FilledButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
