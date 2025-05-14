import { MenuItem } from "@/const/(practice)/coffee";
import { create } from "zustand";

type item = {
  quantity: number;
} & MenuItem;
interface State {
  intro: boolean;
  step: number;
  type: "IN" | "TOGO" | null;
  category: number | "NEW";
  cart: item[];
}
interface Action {
  toggleIntro: () => void;
  prevStep: () => void;
  nextStep: () => void;
  setType: (type: State["type"]) => void;
  setCategory: (id: State["category"]) => void;
  addCart: (item: MenuItem) => void;
  deleteCart: (item: MenuItem) => void;
  reset: () => void;
}

const LAST_STEP = 4;
const INIT_VALUE = {
  intro: true,
  step: 1,
  type: null,
  category: "NEW" as State["category"],
  cart: [],
};
const useCoffeKioskStore = create<State & Action>((set, get) => ({
  ...INIT_VALUE,
  toggleIntro: () => set((state) => ({ intro: !state.intro })),
  prevStep: () =>
    set((state) => ({ step: 1 < state.step ? state.step - 1 : 1 })),
  nextStep: () =>
    set((state) => ({
      step: state.step < LAST_STEP ? state.step + 1 : LAST_STEP,
    })),
  setType: (type) => {
    set({ type });
    get().nextStep();
  },
  setCategory: (id) => set({ category: id }),
  addCart: (item) =>
    set((prev) => ({ cart: [...prev.cart, { ...item, quantity: 1 }] })),
  deleteCart: (item) =>
    set((prev) => ({
      cart: prev.cart.filter((cartItem) => cartItem.id !== item.id),
    })),
  reset: () => set((state) => ({ ...INIT_VALUE, intro: state.intro })),
}));

export default useCoffeKioskStore;
