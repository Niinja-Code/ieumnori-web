import useCoffeKioskStore from "@/stores/(practice)/coffeeKioskStore";
import S from "./styles.module.scss";

const CoffeeKioskHeader = () => {
  const reset = useCoffeKioskStore((state) => state.reset);
  return (
    <div className={S.header}>
      <button className={S.home} onClick={() => reset()}>
        처음으로
      </button>
      <div className={S.logo}>로고</div>
      <button className={S.hint}>흰트보기</button>
    </div>
  );
};

export default CoffeeKioskHeader;
