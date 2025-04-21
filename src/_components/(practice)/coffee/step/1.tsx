import useCoffeKioskStore from "@/stores/(practice)/coffeeKioskStore";
import S from "./styles.module.scss";
import Image from "next/image";
import { CoffeBanner } from "@images/practice/coffee";

const CoffeeStep1 = () => {
  const setType = useCoffeKioskStore((state) => state.setType);
  return (
    <div className={S.pageContainer}>
      <div className={S.banner}>
        <Image src={CoffeBanner} alt="banner" fill />
      </div>
      <div className={S.handler}>
        <button onClick={() => setType("IN")}>매장에서 먹기</button>
        <button onClick={() => setType("TOGO")}>포장하기</button>
      </div>
    </div>
  );
};

export default CoffeeStep1;
