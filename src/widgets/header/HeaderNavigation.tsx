"use client";

import HeaderNavigationElement from "@/shared/components/HeaderNavigationElement";
import { useVisibility } from "@/shared/components/ScrollTracker";
import { useEffect } from "react";

const HeaderNavigation = ({ elements }: { elements: string[] }) => {
  const { visibleElementId, scrollToElement } = useVisibility();

  useEffect(() => console.log(visibleElementId), [visibleElementId]);

  return (
    <div className="mt-[19px] relative flex items-center max-[1350px]:hidden">
      <div className="w-[150%] h-[1px] absolute top-[3px] left-[-25%] bg-gradient-to-r from-transparent from-10% via-[#404040] via-25% to-transparent to-100%" />
      <nav className="flex gap-[35px]">
        {elements.map((tab, index) => (
          <HeaderNavigationElement
            key={index}
            text={tab}
            selected={Number(visibleElementId) === index + 1}
            onClick={() => scrollToElement(String(index + 1))}
          />
        ))}
      </nav>
    </div>
  );
};

export default HeaderNavigation;
