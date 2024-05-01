"use client";
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { MutableRefObject, useState } from "react";
import Lightbox from "./lightbox";

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add("active");
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on("created", () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const CertyficateCarusel = ({
  verticalCertyficates,
  horizontalCertyficates,
}: {
  verticalCertyficates: { url: string; title: string; alt: string }[];
  horizontalCertyficates: { url: string; title: string; alt: string }[];
}) => {

  const [isClick, setIsClick] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    mode:"free-snap",
    slides: {
      origin: "center",
      perView: 4,
      spacing: 4,
    },
  });
  // const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
  //   {
  //     // initial: 0,
  //     mode:"free-snap",
  //     breakpoints: {
  //       "(min-width: 320px)": {
  //         slides: { perView: 2, spacing: 5 },
  //       },
  //       "(min-width: 600px)": {
  //         slides: { perView: 3, spacing: 5 },
  //       },
  //       "(min-width: 768px)": {
  //         slides: { perView: 3, spacing: 5 },
  //       },
  //       "(min-width: 1024px)": {
  //         slides: { perView: 4, spacing: 5, origin:"center" },
  //       },
  //       "(min-width: 1536px)": {
  //         slides: { perView: 5, spacing: 5, origin:"center" },
  //       },
  //     },
  //   },
  //   [ThumbnailPlugin(instanceRef)]
  // );

  return (
    <>
      {/* Image */}
      <div ref={sliderRef} className="keen-slider container">
        {verticalCertyficates.map((certyficate, index) => {
          return (
            <div
              className={`keen-slider__slide number-slide${index + 1} flex justify-center `}
              key={certyficate.title}
            >
              
            </div>
          );
        })}

      </div>
    </>
  );
};

export default CertyficateCarusel;
