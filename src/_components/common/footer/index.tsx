import Link from "next/link";
import S from "./styles.module.scss";
import { FOOTER_LINK } from "@/const/common";

const Footer = () => {
  return (
    <footer className={S.footer}>
      <div className={S.logo}>
        <span className={S.desc}>알쓸신잡 매거진</span>
        <h2 className={S.name}>이음노리</h2>
      </div>
      <div className={S.linkList}>
        {FOOTER_LINK.map(({ name, href }) => (
          <Link key={name} href={href} className={S.linkBtn}>
            {name}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
