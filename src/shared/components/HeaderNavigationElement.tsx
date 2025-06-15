import React from "react";

interface ElementProps {
  selected?: boolean;
  text: string;
}

const HeaderNavigationElement: React.FC<ElementProps> = ({
  selected = false,
  text,
}) => {
  return (
    <div className="flex flex-col items-center relative">
      <div
        className={`${
          !selected ? "bg-(--color-text-dark)" : "bg-white"
        } w-[7px] h-[7px] rounded-full`}
      />
      {selected && (
        <div className="w-[21px] h-[21px] rounded-full border absolute top-[-7px]" />
      )}
      <div
        className={`
        ${
          !selected
            ? "text-(--color-text-dark) text-(length:--main-text-size) mt-[27px]"
            : "text-white text-[25px] mt-[22px]"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default HeaderNavigationElement;
