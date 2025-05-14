import Image from "next/image";
import { MenuItem } from "@/const/(practice)/coffee";
import S from "./styles.module.scss";
import useCoffeKioskStore from "@/stores/(practice)/coffeeKioskStore";

type Props = {
  menuList?: MenuItem[];
};

const CoffeeKioskMenuList: React.FC<Props> = ({ menuList }) => {
  const addCart = useCoffeKioskStore((state) => state.addCart);

  if (!menuList?.length) {
    return <div className={S.empty}>해당 메뉴가 없습니다.</div>;
  }

  return (
    <div className={S.container}>
      <ul className={S.menuList}>
        {menuList.map((item, index) => (
          <li key={item.id} className={S.menuItem}>
            <button
              type="button"
              className={S.button}
              onClick={() => addCart(item)}
            >
              <div className={S.thumbnail}>
                {item.isNew && <span className={S.new}>NEW</span>}
                <Image src={item.image + "?" + index} alt={item.name} fill />
              </div>
              <div className={S.info}>
                <strong className={S.name}>{item.name}</strong>
                <p className={S.description}>{item.description}</p>
                <span className={S.price}>{item.price.toLocaleString()}원</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoffeeKioskMenuList;
