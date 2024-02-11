import VeryficationButton from "@/components/user/confirmationButton";
import { activateUser, findUserByVeryficationToken } from "@/lib/mongoose";
import { redirect } from "next/navigation";

async function getData(veryficationToken: string) {
  const data = await findUserByVeryficationToken(veryficationToken);
  if (data) return data;
  else redirect("/");
}

const veryfyUser = async function veryficationUser(veryficationToken: string) {
  const user = await getData(veryficationToken);
  let response = {
    isOk: false,
    email: "",
  };

  if (user.resetTokenExpire > Date.now()) {
    const isConfirmed = await activateUser(user.id);
    if (isConfirmed === true) redirect("/");
    response = {
      isOk: true,
      email: user.email,
    };
    return { response };
  } else {
    response = {
      isOk: false,
      email: "",
    };
    return { response };
  }
};

const Page = async ({ params }: { params: { token: string } }) => {
  const veryficationToken = params.token;
  const res = await veryfyUser(veryficationToken);
  const { isOk, email } = res.response;

  return (
    <div className="page m-60">
      {isOk === true ? (
        <h3 className="font-light text-3xl">Dziękujemy za aktywację konta</h3>
      ) : (
        <div className="flex flex-col gap-10">
          <h3 className="font-light text-3xl">
            Twój token wygasł, wyślij nowy token
          </h3>
          <VeryficationButton email={email} >Wyślij nowy token</VeryficationButton>
        </div>
      )}
    </div>
  );
};

export default Page;
