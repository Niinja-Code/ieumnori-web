import { NAV } from "@/const/common";
import Link from "next/link";
import S from "./styles.module.scss";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={S.navbar}>
      {NAV.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className={`${S.menu} ${pathname === href ? S.active : ""}`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
