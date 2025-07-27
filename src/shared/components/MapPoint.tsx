import Link from "next/link";
import MapIcon from "../icons/MapIcon";

const MapPoint = ({
  text,
  left,
  top,
  href,
}: {
  text?: string;
  left: number;
  top: number;
  href: string;
}) => (
  <Link
    href={href}
    style={{ left, top }}
    className="absolute flex items-center flex-col hover:text-(--color-blue) transition-all duration-300 max-[1080px]:ml-[-180px] max-[870px]:ml-[-260px] max-[790]:static max-[790px]:ml-0 max-w-screen max-[790px]:flex-row max-[790px]:gap-[10px]"
  >
    <MapIcon className="fill-current" />
    <span className="font-bold fill-current z-1000 relative max-[790px]:text-[14px]">
      {text}
    </span>
  </Link>
);

export default MapPoint;
