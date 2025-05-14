import { NAV } from "@/const/common";
import S from "./styles.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NavMobile = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const handleClose = () => setOpen(false);

  useEffect(() => {
    handleClose();
  }, [pathname]);
  return (
    <>
      <button className={S.hamBtn} onClick={() => setOpen(true)}>
        ❀
      </button>
      <div className={`${S.navbar} ${open ? S.open : ""}`}>
        <button className={S.close} onClick={handleClose}>
          X
        </button>
        <nav className={`${S.nav} ${open ? S.open : ""}`}>
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
      </div>
      {/* {open && (
      )} */}
    </>
  );
};

export default NavMobile;
