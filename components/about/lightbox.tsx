"use client";
import { useState } from "react";
//@ts-ignore
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const Lightbox = ({
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
        width={300}
        loading="lazy"
        height={300}
        onClick={() => setToggler(!toggler)}
        className="w-[100px] h-[130px] md:w-[300px] md:h-[428px]"
      />
      <FsLightbox
        toggler={toggler}
        sources={[`https:${url}?w=1200&h=2400&fm=webp`]}
      />
    </>
  );
};

export default Lightbox;
