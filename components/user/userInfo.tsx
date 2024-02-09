import { UserType } from "@/actions/authActions";
import { IoMdPerson } from "react-icons/io";
import FilledButton from "../typography/filledButton";
import Link from "next/link";
import VeryficationButton from "./confirmationButton";
import ResetPasswordButton from "./resetPasswordButton";
import Image from "next/image";

const UserInfo = ({ user }: { user: UserType }) => {
  return (
    <section className="mx-60 flex flex-col w-7/12">
      <div className="flex flex-col relative items-start justify-center text-black bg-ligtherGreen mt-10 mb-10 p-24 rounded-md gap-10 w-full">
        <div className="absolute -top-[0] left-[50%] translate-x-[-50%] translate-y-[-50%]  max-w-[150px] max-h-[150px] rounded-full bg-lightGreen w-full h-full overflow-hidden">
          <Image
            src={"/images/ludzik.svg"}
            alt={"ludzik"}
            width={150}
            height={150}
          />
        </div>
        <ul className="w-full text-large tracking-wide gap-3 flex flex-col">
          <li>Użytkownik: {user.username as string}</li>
          <li>Nr telefonu: {user.phoneNumber as number}</li>
          <li>Email: {user.email as string}</li>
          <li>Konsultacje: {user.consultations as number}</li>
          {/* <li>Zmień dane użytkownika</li> */}
        </ul>
        <div className="flex flex-col items-start justify-center gap-6 text-darkGreen w-full">
          <ResetPasswordButton email={user.email as string} />
          {!user.isConfirmed && (
            <VeryficationButton email={user.email as string} />
          )}
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <Link href={"/oferta"}>
              <FilledButton color="bg-darkGreen" text="white">
                Kup Konsultacje
              </FilledButton>
            </Link>
            <Link href={"/oferta"}>
              <FilledButton color="bg-gold" text="white">
                Kup Konsultacje
              </FilledButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
