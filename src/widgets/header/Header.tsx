import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const Header = ({ children }: { children?: ReactNode }) => (
  <header className="max-[840px]:justify-center w-full px-[45px] pt-[20px] pb-[40px] flex justify-between items-center fixed z-1 bg-gradient-to-b from-10% from-(--color-background) to-90% to-transparent">
    <Link href="/">
      <Image src="/images/logo.png" alt="" width={155} height={100} />
    </Link>
    {children}
    <Link
      href="tel:89883888185"
      className="text-(--color-text-dark) text-[25px] font-(family-name:--font-sf-ui-display) font-medium max-[840px]:hidden"
    >
      8 (988)
      <span className="text-(--color-text-light) text-[35px]"> 388-81-85</span>
    </Link>
  </header>
);

export default Header;
