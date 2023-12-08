import { findUser } from "@/lib/mongoose";
import { useParams, useSearchParams } from "next/navigation";

async function getData(email: string) {
  const data = await findUser(email);
  console.log(data);

  return data;
}

export default async function Page({ params }: { params: { id: string } }) {
  const userEmail = params.id;
  const splitEmail = userEmail.split(/[%40]/)
  const email = `${splitEmail[0]}@${splitEmail[3]}`
  console.log(email);
  
  
  const user = await getData(email);


  return (
    <div>
      <ul>
        <li>My profile: {userEmail.substring(0, userEmail.indexOf("%"))}</li>
          <li>{user.role}</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
