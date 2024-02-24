import { getAllUsers } from "@/actions/adminActions";
import UserElements from "@/components/admin/user";
import BackgroundedHeader from "@/components/typography/backgroundedHeader";
import { queryClient } from "@/lib/react-query";
import {
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";

const Page = async () => {
  const userLimit = process.env.WEBSITE_DEFAULT_USER_PAGE_LIMIT || 1;

  ;
  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: async () => await getAllUsers(10, userLimit),
  });

  return (
    <div className="page">
      <BackgroundedHeader>Panel administratora</BackgroundedHeader>      

      <HydrationBoundary state={dehydrate(queryClient)}>
        <UserElements />
      </HydrationBoundary>
    </div>
  );
};

export default Page;
