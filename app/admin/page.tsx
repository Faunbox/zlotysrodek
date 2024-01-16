import { getAllUsers } from "@/actions/adminActions";
import UserElements from "@/components/admin/user";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

const Page = async () => {
  const userLimit = process.env.WEBSITE_DEFAULT_USER_PAGE_LIMIT;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: async () => await getAllUsers(1, userLimit),
  });

  return (
    <div>
      <h1>Admin dashboard</h1>
      <h2>Wszyscy uzytkownicy</h2>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <UserElements />
      </HydrationBoundary>
    </div>
  );
};

export default Page;
