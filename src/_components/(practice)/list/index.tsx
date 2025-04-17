import Image from "next/image";
import S from "./styles.module.scss";
import Link from "next/link";

const PracticeList = () => {
  return (
    <ul className={S.list}>
      <li className={S.listItemWrap}>
        <Link className={S.listItem} href={`/practice/1`}>
          <div className={S.thumnail}>
            <Image src={"https://picsum.photos/300/300"} alt="썸네일" fill />
          </div>
          <div className={S.content}>
            <h3 className={S.contentTitle}>이음카페</h3>
            <ul className={S.tag}>
              <li>#카페</li>
              <li>#키오스크</li>
            </ul>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default PracticeList;
