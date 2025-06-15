import Image from "next/image";
import Link from "next/link";
import HeaderNavigation from "./HeaderNavigation";

const Header = () => (
  <header className="w-full px-[45px] pt-[20px] flex justify-between items-center fixed z-1">
    <Link href="/">
      <Image src="/images/logo.png" alt="" width={155} height={100} />
    </Link>
    <HeaderNavigation />
    <Link
      href="tel:89883888185"
      className="text-(--color-text-dark) text-[25px]"
    >
      8 (988)
      <span className="text-(--color-text-light) text-[35px]"> 388-81-85</span>
    </Link>
  </header>
);

export default Header;
