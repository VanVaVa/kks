"use client";

import useCarousel from "@/shared/hooks/useCarousel";
import Image from "next/image";
import { FC, ReactNode } from "react";

interface CarouselProps {
  data: {
    imageUrl?: string;
    alt?: string;
    title?: string;
    subtitle?: string;
  }[];
  showNext?: boolean;
  children?: ReactNode;
  extra?: ReactNode;
  imageSize?: {
    width: number;
    height: number;
  };
}

const Carousel: FC<CarouselProps> = ({
  data,
  children,
  extra,
  imageSize,
  showNext = false,
}) => {
  const { handleElementChange, currentElement } = useCarousel(data.length);

  return (
    <div className="w-full max-w-full">
      <div className="min-[1320px]:hidden mb-[90px]">{children}</div>
      <div className="flex grow-1 max-[920px]:justify-center">
        {data.map((el, idx) => {
          if (currentElement === idx) {
            return (
              <div
                key={idx}
                className="inline-flex w-full gap-[35px] items-end justify-between max-[980px]:flex-col-reverse max-[980px]:items-start"
              >
                <div className="flex flex-col justify-between max-[1320px]:justify-end h-full">
                  <div className="max-[1320px]:hidden">{children}</div>
                  <div>
                    {extra}
                    <div className="max-w-[620px]">
                      <span className="font-(family-name:--font-sf-ui-display) font-bold text-[25px] leading-[0.9]">
                        {el.title}
                      </span>
                      <div className="w-[25px] h-[7px] bg-(--color-blue) mt-[35px]" />
                      <span className="text-(--color-text-dark) max-w-[250px] mt-[35px] inline-block">
                        {el.subtitle}
                      </span>
                    </div>
                    <div className="flex gap-[35px] mt-[90px] max-[930px]:mt-[40px]">
                      <button
                        className="bg-[#323232] p-[12px] rounded-full cursor-pointer disabled:bg-[#212121] hover:bg-[#3A3A3A] duration-300"
                        onClick={() => handleElementChange("left")}
                        disabled={currentElement === 0}
                      >
                        <Image
                          src="/images/left_arrow.svg"
                          width={40}
                          height={40}
                          alt=""
                        />
                      </button>
                      <button
                        className="bg-[#323232] p-[12px] rounded-full cursor-pointer disabled:bg-[#212121] hover:bg-[#3A3A3A] duration-300"
                        onClick={() => handleElementChange("right")}
                        disabled={currentElement === data.length - 1}
                      >
                        <Image
                          src="/images/right_arrow.svg"
                          width={40}
                          height={40}
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-end gap-[35px]">
                  <Image
                    src={el.imageUrl || ""}
                    alt={el.alt || ""}
                    width={imageSize?.width || 537}
                    height={imageSize?.height || 760}
                  />
                  {showNext &&
                    (idx < data.length - 1 ? (
                      <Image
                        src={data[idx + 1].imageUrl || ""}
                        alt={data[idx + 1].alt || ""}
                        width={188}
                        height={266}
                        className="max-[1700px]:hidden"
                      />
                    ) : (
                      <div className="w-[188px] h-[266px] max-[1700px]:hidden" />
                    ))}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Carousel;
