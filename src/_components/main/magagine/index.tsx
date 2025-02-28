import { format } from "date-fns";
import S from "./styles.module.scss";
import Image from "next/image";
import { Thumbnail } from "@images/index";

const MAGAGINE_LIST = [
  {
    id: 1,
    thumbnail: Thumbnail.src,
    category: [
      { id: 101, name: "카테고리1" },
      { id: 102, name: "카테고리2" },
    ],
    title: "1 타이틀 영역입니다.",
    content:
      "서브 타이틀 노출 영역서브 타이틀 노출 영역서브 타이틀 노출 영역서브 타이틀 노출 영역서브 타이틀 노출 영역",
    createDate: format(new Date(), "yyyy.MM.dd"),
  },
  {
    id: 2,
    thumbnail: Thumbnail.src,
    category: [{ id: 102, name: "카테고리2" }],
    title: "2 타이틀 영역입니다.",
    content:
      "서브 타이틀 노출 영역서브 타이틀 노출 영역서브 타이틀 노출 영역서브 타이틀 노출 영역서브 타이틀 노출 영역",
    createDate: format(new Date(), "yyyy.MM.dd"),
  },
  {
    id: 3,
    thumbnail: Thumbnail.src,
    category: [{ id: 101, name: "카테고리1" }],
    title: "3 타이틀 영역입니다.",
    content:
      "서브 타이틀 노출 영역서브 타이틀 노출 영역서브 타이틀 노출 영역서브 타이틀 노출 영역서브 타이틀 노출 영역",
    createDate: format(new Date(), "yyyy.MM.dd"),
  },
  {
    id: 4,
    thumbnail: Thumbnail.src,
    category: [{ id: 101, name: "카테고리1" }],
    title: "4 타이틀 영역입니다.",
    content:
      "서브 타이틀 노출 영역서브 타이틀 노출 영역서브 타이틀 노출 영역서브 타이틀 노출 영역서브 타이틀 노출 영역",
    createDate: format(new Date(), "yyyy.MM.dd"),
  },
  {
    id: 5,
    thumbnail: Thumbnail.src,
    category: [
      { id: 101, name: "카테고리1" },
      { id: 102, name: "카테고리2" },
    ],
    title: "5 타이틀 영역입니다.",
    content:
      "서브 타이틀 노출 영역서브 타이틀 노출 영역서브 타이틀 노출 영역서브 타이틀 노출 영역서브 타이틀 노출 영역",
    createDate: format(new Date(), "yyyy.MM.dd"),
  },
  {
    id: 6,
    thumbnail: Thumbnail.src,
    category: [{ id: 103, name: "카테고리3" }],
    title: "6 타이틀 영역입니다.",
    content:
      "서브 타이틀 노출 영역서브 타이틀 노출 영역서브 타이틀 노출 영역서브 타이틀 노출 영역서브 타이틀 노출 영역",
    createDate: format(new Date(), "yyyy.MM.dd"),
  },
];

const Magagine = () => {
  return (
    <section className={S.container}>
      <h2 className={S.sectionTitle}>새로 등록된 매거진</h2>
      <div className={S.maganineList}>
        {MAGAGINE_LIST.map((magagine) => (
          <article key={magagine.id} className={S.magagineCard}>
            <div className={S.thumbnail}>
              <Image src={magagine.thumbnail} alt="thumbnail image" fill />
            </div>
            <ul className={S.category}>
              {magagine.category.map((category, index) => (
                <li key={`${category.id}_${index}`} className={S.chip}>
                  # {category.name}
                </li>
              ))}
            </ul>
            <div className={S.content}>
              <h3 className={S.title}>{magagine.title}</h3>
              <p className={S.desc}>{magagine.content}</p>
              <p className={S.date}>{magagine.createDate}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Magagine;
