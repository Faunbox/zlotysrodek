import { findUserById } from "@/lib/mongoose";
import { redirect } from "next/navigation";

async function getData(id: string) {
  const data = await findUserById(id);
  console.log(data);

  if (data) return data;
  else redirect("/");
}

const Page = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const data = await getData(id);

  return (
    <div>
      <input
        type="password"
        name="password"
        id="password"
        className="border-black border-1"
      />
    </div>
  );
};

export default Page;
