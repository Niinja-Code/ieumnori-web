"use client";

import Link from "next/link";
import { LogoIcon } from "../../../../public/assets/icon";
import S from "./styles.module.scss";
import { NAV } from "@/const/common";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={S.header}>
      <div className={S.max}>
        <Link href="/">
          <LogoIcon />
        </Link>
        <div className={S.navibar}>
          {NAV.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`${S.menu} ${pathname === href ? S.active : ""}`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
