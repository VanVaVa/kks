import { services } from "@/widgets/serviceCarousel/constants";
import Link from "next/link";

const ServiceList = ({ currentService }: { currentService: number }) => {
  return (
    <div className="max-w-[458px] mb-[50px] overflow-hidden flex flex-col gap-[50px] transition duration-300">
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
