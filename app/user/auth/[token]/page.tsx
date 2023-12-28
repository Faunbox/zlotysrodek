import { activateUser, findUserByVeryficationToken } from "@/lib/mongoose";
import { redirect } from "next/navigation";

async function getData(veryficationToken: string) {
  const data = await findUserByVeryficationToken(veryficationToken);
  console.log(data);

  if (data) return data;
  else redirect("/");
}

const veryfyUser = async function veryficationUser(veryficationToken: string) {
  const user = await getData(veryficationToken);
  const isConfirmed = await activateUser(user.id);
  if (isConfirmed === null) redirect("/");
  return true;
};

const Page = async ({ params }: { params: { token: string } }) => {
  const veryficationToken = params.token;
  const res = await veryfyUser(veryficationToken);

  return <div>{res && <h3>Dziękujemy za aktywację konta</h3>}</div>;
};

export default Page;
