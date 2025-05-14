"use client";

import Link from "next/link";
import S from "./styles.module.scss";
import { usePathname } from "next/navigation";
import { NAV } from "@/const/common";
import { LogoIcon } from "@icons/index";
import Nav from "./nav";
import NavMobile from "./navMobile";

const Header = () => {
  return (
    <header className={S.header}>
      <div className={S.max}>
        <Link href="/">
          <LogoIcon className={S.logo} />
        </Link>
        <Nav />
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
