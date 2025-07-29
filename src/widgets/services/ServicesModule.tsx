"use client";

import ServiceList from "@/shared/components/ServiceList";
import ServiceCarousel from "../serviceCarousel/ServiceCarousel";
import useCarousel from "@/shared/hooks/useCarousel";

const ServiceModule = () => {
  const { handleElementChange, currentElement } = useCarousel(6, true);

  return (
    <div className="flex flex-wrap">
      <ServiceList currentService={currentElement} />
      <ServiceCarousel
        currentElement={currentElement}
        handleElementChange={handleElementChange}
      />
    </div>
  );
};

export default ServiceModule;
