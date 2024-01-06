import { getAllUsers } from "@/actions/adminActions";
import UserElement from "@/components/admin/user";

const Page = async () => {
  const getUsers = await getAllUsers();

  return (
    <div>
      <h1>Admin dashboard</h1>
      <h2>Wszyscy uzytkownicy</h2>
      <ul className="md:w-1/4 border-black border-2">
        {getUsers.map((user) => (
            //@ts-ignore
          <UserElement key={user?._id! as any} user={JSON.parse(JSON.stringify(user))} />
        ))}
      </ul>
    </div>
  );
};

export default Page;
