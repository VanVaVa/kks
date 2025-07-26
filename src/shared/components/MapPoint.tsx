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
    style={{ left, top, position: "absolute" }}
    className="flex items-center flex-col hover:text-(--color-blue) transition-all duration-300"
  >
    <MapIcon className="fill-current" />
    <span className="font-bold fill-current z-1000 relative">{text}</span>
  </Link>
);

export default MapPoint;
