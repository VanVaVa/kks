"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { useVisibility } from "./ScrollTracker";

interface IconButtonProps {
  onClick?: VoidFunction;
  children?: ReactNode;
  label?: string;
  reversed?: boolean;
  href?: string;
  type?: "button" | "submit";
  scrollToId?: string;
  download?: boolean;
  downloadData?: {
    link: string;
    name: string;
  };
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  children,
  label,
  href,
  reversed = false,
  type = "button",
  scrollToId,
  download = false,
  downloadData,
}) => {
  const router = useRouter();
  const { scrollToElement } = useVisibility();

  return (
    <div className={`flex gap-[23px] items-center`}>
      <span className="font-(family-name:--font-sf-ui-display) font-medium">
        {label}
      </span>
      <button
        type={type}
        onClick={() => {
          if (href) router.push(href);
          else if (download && downloadData) {
            const link = document.createElement("a");
            link.href = downloadData.link;
            link.download = downloadData.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } else if (scrollToId) scrollToElement(scrollToId);
          else if (onClick) onClick();
          else if (reversed) router.back();
        }}
        className={`w-[100px] h-[100px] max-[600px]:w-[70px] max-[600px]:h-[70px] rounded-full border relative flex justify-center items-center hover:bg-[#444] active:bg-[#666] transition-[0.3s] ${
          reversed ? "-order-1" : "order-2"
        }`}
      >
        <div
          className={`absolute w-[7px] h-[7px] rounded-full bg-(--color-blue) top-[50%] translate-y-[-4px] ${
            reversed ? "right-[-4px]" : "left-[-4px]"
          }`}
        />
        {children}
      </button>
    </div>
  );
};

export default IconButton;
