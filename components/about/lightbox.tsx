"use client";
import { useState } from "react";
//@ts-ignore
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const Lightbox = ({
  title,
  url,
  alt,
  zoom = true,
  width = 300,
  height = 300,
}: {
  title?: string;
  url: string;
  alt: string;
  zoom?: boolean;
  width?: number;
  height?: number;
}) => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <Image
        src={`https:${url}?w=300&h=428&fm=webp`}
        alt={alt}
        width={width}
        loading="lazy"
        height={height}
        onClick={() => {
          setToggler(!toggler);
        }}
        className={`h-[300px] w-[350px] md:h-[350px] md:w-[428px] hover:scale-105 duration-300`}
      />
      {zoom && (
        <FsLightbox
          toggler={toggler}
          sources={[`https:${url}?w=1200&h=2400&fm=webp`]}
        />
      )}
    </>
  );
};

export default Lightbox;
