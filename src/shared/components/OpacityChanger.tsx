"use client";

import { FC, ReactNode } from "react";
import { useVisibility } from "./ScrollTracker";

interface OpacityChangerProps {
  children: ReactNode;
  targetId?: string;
  zIndex?: number;
  targetScrollOffset?: number;
}

const OpacityChanger: FC<OpacityChangerProps> = ({
  children,
  targetId,
  zIndex,
  targetScrollOffset,
}) => {
  const { visibleElementId, scrollOffset } = useVisibility();

  return (
    <div
      className="duration-700 relative"
      style={{
        opacity: targetScrollOffset
          ? targetScrollOffset < Number(scrollOffset)
            ? 1
            : 0
          : Number(targetId) === Number(visibleElementId)
          ? 1
          : 0,
        zIndex: zIndex || (6 - Number(targetId)) * -1 - 10 || "auto",
      }}
    >
      {children}
    </div>
  );
};

export default OpacityChanger;
