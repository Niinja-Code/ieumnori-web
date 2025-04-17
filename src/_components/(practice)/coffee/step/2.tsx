import {
  CATEGORY_LIST,
  MENU_DATA,
  MenuCategory,
  NEW_MENU_DATA,
} from "@/const/(practice)/coffee";
import CoffeeKioskMenuBar from "../menuBar";
import CoffeeKioskMenuList from "../menuList";
import useCoffeKioskStore from "@/stores/(practice)/coffeeKioskStore";

const CoffeeStep2 = () => {
  const category = useCoffeKioskStore((state) => state.category);
  const setCategory = useCoffeKioskStore((state) => state.setCategory);

  const currentCategory = MENU_DATA.find(
    (data): data is MenuCategory => data.id === category
  );

  return (
    <div>
      <CoffeeKioskMenuBar
        hasNewMenu={!!NEW_MENU_DATA.length}
        categories={CATEGORY_LIST}
        nowMenu={category}
        setMenu={setCategory}
      />
      <CoffeeKioskMenuList
        menuList={category === "NEW" ? NEW_MENU_DATA : currentCategory?.items}
      />
    </div>
  );
};

export default CoffeeStep2;
