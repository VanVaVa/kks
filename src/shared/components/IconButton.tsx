import React, { ReactNode } from "react";

interface IconButtonProps {
  onClick?: VoidFunction;
  children?: ReactNode;
  label?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  children,
  label,
}) => (
  <div className="flex gap-[23px] items-center">
    <span className="font-(family-name:--font-sf-ui-display) font-medium">
      {label}
    </span>
    <button
      onClick={onClick}
      className="w-[100px] h-[100px] rounded-full border relative flex justify-center items-center hover:bg-[#444] active:bg-[#666] transition-[0.3s]"
    >
      <div className="absolute w-[7px] h-[7px] rounded-full bg-(--color-blue) top-[46.5px] left-[-4px]" />
      {children}
    </button>
  </div>
);

export default IconButton;
