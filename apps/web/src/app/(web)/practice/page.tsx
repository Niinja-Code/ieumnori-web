import S from "./styles.module.scss";
import PracticeList from "@/_components/(practice)/list";

const Practice = () => {
  return (
    <div className={S.pageContainer}>
      <h2 className={S.pageTitle}>연습</h2>
      <PracticeList />
    </div>
  );
};

export default Practice;
