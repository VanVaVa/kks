"use client";

import { useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import { services } from "@/widgets/serviceCarousel/constants";
import Link from "next/link";

const ServiceList = ({ currentService }: { currentService: number }) => {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <div
      style={{ transition: "max-height .3s ease-in-out" }}
      className={`max-w-[458px] mb-[50px] overflow-hidden flex flex-col gap-[50px] transition duration-300 ${
        isOpened ? "max-h-[540px]" : "max-h-[40px]"
      }`}
    >
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setIsOpened(!isOpened)}
      >
        <span
          className={`font-(family-name:--font-sf-ui-display) font-medium text-[25px] transition duration-300 ${
            !isOpened && "text-(color:--color-text-dark)"
          }`}
        >
          Показать все услуги
        </span>
        <PlusIcon
          fill={isOpened ? "#fff" : null}
          className={`${isOpened && "rotate-45"} transition duration-300`}
        />
      </div>
      <div className="w-[25px] min-h-[7px] bg-(--color-blue) min-w-[7px]" />
      <ul className="text-(--color-text-dark) flex flex-col">
        {services.map((el, idx) => (
          <li
            key={idx}
            className="hover:text-[#fff] transition duration-300 cursor-pointer"
            style={{ color: idx === currentService ? "#fff" : "currentcolor" }}
          >
            <Link href={el.link}>{el.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
