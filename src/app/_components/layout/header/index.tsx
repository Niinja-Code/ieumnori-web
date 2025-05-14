import Link from "next/link";
import S from "./styles.module.scss";
import { Logo } from "public/assets/icons";
import { headers } from "next/headers";

const MENU = [
  {
    name: "메거진",
    path: "/magagine",
  },
  {
    name: "베너",
    path: "/banner",
  },
  {
    name: "문의 관리",
    path: "/inquire",
  },
];

const Header = async () => {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";

  return (
    <header className={S.container}>
      <nav className={S.navigation}>
        {MENU.map(({ name, path }) => (
          <Link
            href={path}
            className={`${S.menu} ${pathname.startsWith(path)}`}
          >
            {name}
          </Link>
        ))}
      </nav>
      <Logo />
      <div className={S.user}>
        <p>id</p>
        <button>로그아웃</button>
      </div>
    </header>
  );
};

export default Header;
