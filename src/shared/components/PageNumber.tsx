"use client";

import { FC } from "react";
import { useVisibility } from "./ScrollTracker";

interface PageNumberProps {
  pagesCount?: number;
}

const PageNumber: FC<PageNumberProps> = ({ pagesCount }) => {
  const { visibleElementId } = useVisibility();

  return (
    <div className="fixed bottom-[90px] left-[45px] max-[920px]:hidden">
      <span className="text-[50px] font-medium font-(family-name:--font-sf-ui-display)">
        0{Number(visibleElementId)}{" "}
      </span>
      <span className="text-[35px] text-(--color-text-dark) font-medium font-(family-name:--font-sf-ui-display)">
        {"/ 0"}
        {pagesCount}
      </span>
    </div>
  );
};

export default PageNumber;
