import S from "./styles.module.scss";

const NEW_ITEM = {
  id: "NEW",
  name: "신상품",
};

type MenuCategory<T> = {
  id: T;
  name: string;
};

type Props<T extends "NEW" | number> = {
  categories: MenuCategory<T>[];
  nowMenu: T;
  hasNewMenu: boolean;
  setMenu: (id: T) => void;
};

const CoffeeKioskMenuBar = <T extends "NEW" | number>({
  categories,
  nowMenu,
  setMenu,
}: Props<T>) => {
  return (
    <div className={S.menu}>
      {[NEW_ITEM, ...categories].map((menu) => (
        <button
          key={menu.id}
          className={nowMenu === menu.id ? S.active : ""}
          onClick={() => setMenu(menu.id as T)}
        >
          {menu.name}
        </button>
      ))}
    </div>
  );
};

export default CoffeeKioskMenuBar;
