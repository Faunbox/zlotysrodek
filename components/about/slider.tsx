"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { useState } from "react";

const SwiperSlider = ({
  slides,
  horizontal = false,
}: {
  slides: any[];
  horizontal: boolean;
}) => {
  const [toggler, setToggler] = useState(false);

  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      grabCursor={true}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: horizontal ? 3 : 4,
          spaceBetween: 40,
        },
      }}
      spaceBetween={30}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
        type: "fraction",
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper -z-10"
    >
      {slides?.map((slide) => {
        const { url, alt, title } = slide;
        return (
          <SwiperSlide key={title} className="mb-20">
            <Image
              src={`${horizontal ? `https:${url}?w=500&h=350&fm=webp` : `https:${url}?w=300&h=428&fm=webp`}`}
              alt={alt}
              width={500}
              loading="lazy"
              height={500}
              onClick={() => {
                setToggler(!toggler);
              }}
              className={`${horizontal ? "w-[500px] h-[350px] md:w-[${500 + 500 / 2}px] md:h-[${350 + 350 / 2}px]" : "w-[350px] h-[500px] md:w-[${600 / 2}px] md:h-[${1000 / 2}px]"} hover:scale-110 duration-300 -z-10`}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperSlider;
