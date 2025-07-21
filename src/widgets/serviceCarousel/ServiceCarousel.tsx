"use client";

import IconButton from "@/shared/components/IconButton";
import useCarousel from "@/shared/hooks/useCarousel";
import Image from "next/image";
import { services } from "./constants";

const ServiceCarousel = () => {
  const { handleElementChange, currentElement } = useCarousel(6, true);

  return (
    <div className="w-[915px] flex flex-col items-center">
      <Image
        src="/images/services/diagnostics.png"
        alt=""
        width={713}
        height={696}
      />
      <div className="w-full">
        <div className="flex w-full justify-between mt-[70px] items-start">
          <span className="font-(family-name:--font-sf-ui-display) text-[50px] font-bold max-w-(--title-width) transition-all duration-300">
            {services[currentElement].name}
          </span>
          <div className="flex gap-[35px]">
            <button
              className="bg-[#323232] p-[12px] rounded-full cursor-pointer disabled:bg-[#212121] hover:bg-[#3A3A3A] duration-300"
              onClick={() => handleElementChange("left")}
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
        <div className="w-full h-[3px] bg-[#1f1f1f] mt-[10px] mb-[35px]" />
        <IconButton
          label="Узнать подробнее"
          href={services[currentElement].link}
        >
          <Image src="images/forward.svg" width={40} height={40} alt="" />
        </IconButton>
      </div>
    </div>
  );
};

export default ServiceCarousel;
