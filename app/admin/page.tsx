import { getAllUsers } from "@/actions/adminActions";
import UserElements from "@/components/admin/user";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

const Page = async () => {
  // const getUsers = await getAllUsers();

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  return (
    <div>
      <h1>Admin dashboard</h1>
      <h2>Wszyscy uzytkownicy</h2>
      
        {/* <label htmlFor="search">Znajdz uzytkownika po </label>
        <select name="filter" id="filter" ref={selectRef}>
          <option value="name">Imieniu</option>
          <option value="surname">Nazwisku</option>
          <option value="email">Emailu</option>
          <option value="phone">Nr. telefonu</option>
        </select>
        <input
          ref={inputRef}
          type="text"
          id="search"
          className="border-black border-1"
        /> */}
        <HydrationBoundary state={dehydrate(queryClient)}>
          <UserElements />
        </HydrationBoundary>
    </div>
  );
};

export default Page;
