// app/providers.tsx
"use client";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {/* <NextUIProvider> */}
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
        <SessionProvider session={session}>{children}</SessionProvider>
      {/* </NextUIProvider>  */}
    </QueryClientProvider>
  );
}
