"use client";

import { FC, ReactNode } from "react";
import { useVisibility } from "./ScrollTracker";

interface OpacityChangerProps {
  children: ReactNode;
  targetScroll: number;
}

const OpacityChanger: FC<OpacityChangerProps> = ({
  children,
  targetScroll,
}) => {
  const { scrollOffset } = useVisibility();

  return (
    <div
      className="duration-700"
      style={{
        opacity: Math.max(0, Number(scrollOffset) / targetScroll > 0.9 ? 1 : 0),
      }}
    >
      {children}
    </div>
  );
};

export default OpacityChanger;
