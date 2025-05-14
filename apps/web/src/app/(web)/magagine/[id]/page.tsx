import ContentWithFontsize from "@/_components/magagine/contentWithFontsize";
import S from "./styles.module.scss";
import CardList from "@/_components/magagine/cardSlide";

const CHIP = ["카테고리1", "카테고리2"];

const MagagineDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <>
      <div className={S.thumbnail}>{id}</div>
      <div className={S.card}>
        <CardList />
      </div>
      <div className={S.pageContainer}>
        <div className={S.info}>
          <div className={S.txtWrap}>
            <h2 className={S.title}>메인 타이틀 노출 영역</h2>
            <p className={S.desc}>
              서브 타이틀 노출 영역서브 타이틀 노출 영역서브 타이틀 노출 영역
            </p>
            <ul className={S.category}>
              {CHIP.map((chip) => (
                <li key={chip} className={S.chip}>
                  # {chip}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ContentWithFontsize />
      </div>
    </>
  );
};

export default MagagineDetail;
