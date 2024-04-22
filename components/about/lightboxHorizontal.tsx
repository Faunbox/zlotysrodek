"use client";
import { useState } from "react";
//@ts-ignore
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const LightboxHorizontal = ({
  title,
  url,
  alt,
}: {
  title?: string;
  url: string;
  alt: string;
}) => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <Image
        src={`https:${url}?w=300&h=428&fm=webp`}
        alt={alt}
        width={450}
        loading="lazy"
        height={150}
        onClick={() => setToggler(!toggler)}
        className="h-[100px] w-[130px] md:h-[300px] md:w-[428px]"
      />
      <FsLightbox
        toggler={toggler}
        sources={[`https:${url}?w=1200&h=2400&fm=webp`]}
      />
    </>
  );
};

export default LightboxHorizontal;
