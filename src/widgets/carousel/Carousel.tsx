"use client";

import Image from "next/image";
import { FC, ReactNode, useState } from "react";

interface CarouselProps {
  data: {
    imageUrl?: string;
    alt?: string;
    title: ReactNode;
  }[];
  showNext?: boolean;
}

const Carousel: FC<CarouselProps> = ({ data, showNext = false }) => {
  const [currentElement, setCurrentElement] = useState(0);

  const handleElementChange = (direction: "left" | "right") => {
    if (direction === "left" && currentElement >= 1)
      setCurrentElement(currentElement - 1);
    else if (direction === "right" && currentElement < data.length - 1)
      setCurrentElement(currentElement + 1);
  };

  return (
    <div className="flex grow-1 mr-[200px]">
      {data.map((el, idx) => {
        if (currentElement === idx) {
          return (
            <div
              key={idx}
              className="inline-flex w-full gap-[35px] items-end justify-between"
            >
              <div>
                <div>{el.title}</div>
                <div className="flex gap-[35px] mt-[90px]">
                  <button
                    className="bg-[#323232] p-[12px] rounded-full cursor-pointer disabled:bg-[#212121] hover:bg-[#3A3A3A] duration-300"
                    onClick={() => handleElementChange("left")}
                    disabled={currentElement === 0}
                  >
                    <Image
                      src="images/left_arrow.svg"
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
                      src="images/right_arrow.svg"
                      width={40}
                      height={40}
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="flex items-end gap-[35px]">
                <Image
                  src={el.imageUrl || ""}
                  alt={el.alt || ""}
                  width={537}
                  height={760}
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
                    <div className="w-[188px] h-[266px]" />
                  ))}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Carousel;
