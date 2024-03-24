"use client"; // Error components must be Client Components

import FilledButton from "@/components/typography/filledButton";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="page h-[70vh] w-full gap-20 relative">
      <Image
        src={"/images/plama.svg"}
        alt="plama"
        width={900}
        height={900}
        className="absolute top-[50%} left-[50%] translate-x-[-50%] -z-10"
      />
      <div className="flex flex-col gap-5 text-right font-abhaya text-offertGreen font-semibold leading-loose">
        <h2 className="text-2xl">Coś poszło nie tak...</h2>
        <h2 className="text-4xl">Spróbuj ponownie później</h2>
      </div>
      <div className="flex flex-row justify-between gap-20">
        <Link href="/">
          <FilledButton color="bg-darkGreen" text="white">
            Strona główna
          </FilledButton>
        </Link>
        <Link href="/kontakt">
          <FilledButton color="bg-darkGreen" text="white">
            Kontakt
          </FilledButton>
        </Link>
      </div>
    </div>
  );
}
