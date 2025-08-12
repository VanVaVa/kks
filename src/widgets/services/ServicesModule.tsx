"use client";

import ServiceCarousel from "../serviceCarousel/ServiceCarousel";
import useCarousel from "@/shared/hooks/useCarousel";

const ServiceModule = () => {
  const { handleElementChange, currentElement } = useCarousel(6, true);

  return (
    <div className="flex flex-wrap w-full justify-center pr-[200px] max-[1000px]:pr-0 max-[1620px]:pr-[100px]">
      <ServiceCarousel
        currentElement={currentElement}
        handleElementChange={handleElementChange}
      />
    </div>
  );
};

export default ServiceModule;
