import Image from "next/image";
import { MenuItem } from "@/const/(practice)/coffee";
import S from "./styles.module.scss";

type Props = {
  menuList?: MenuItem[];
};

const CoffeeKioskMenuList: React.FC<Props> = ({ menuList }) => {
  if (!menuList?.length) {
    return <div className={S.empty}>해당 메뉴가 없습니다.</div>;
  }

  return (
    <ul className={S.menuList}>
      {menuList.map((item, index) => (
        <li key={item.id} className={S.menuItem}>
          <button type="button" className={S.button}>
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
  );
};

export default CoffeeKioskMenuList;
