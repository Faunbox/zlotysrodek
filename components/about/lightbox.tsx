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
        className={`w-[${width}] h-[${height}] md:w-[${width + width / 2}] md:h-[${height + height / 2}] `}
      />
      {/* {zoom && (
        <FsLightbox
          toggler={toggler}
          sources={[`https:${url}?w=1200&h=2400&fm=webp`]}
        />
      )} */}
    </>
  );
};

export default Lightbox;
