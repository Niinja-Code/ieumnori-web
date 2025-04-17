import useCoffeKioskStore from "@/stores/(practice)/coffeeKioskStore";
import S from "./styles.module.scss";

const CoffeeStep1 = () => {
  const setType = useCoffeKioskStore((state) => state.setType);
  return (
    <div className={S.pageContainer}>
      <div className={S.banner}>배너</div>
      <div className={S.handler}>
        <button onClick={() => setType("IN")}>매장에서 먹기</button>
        <button onClick={() => setType("TOGO")}>포장하기</button>
      </div>
    </div>
  );
};

export default CoffeeStep1;
