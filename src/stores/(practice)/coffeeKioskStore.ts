import { create } from "zustand";

interface State {
  step: number;
  type: "IN" | "TOGO" | null;
  category: number | "NEW";
}
interface Action {
  prevStep: () => void;
  nextStep: () => void;
  setType: (type: State["type"]) => void;
  setCategory: (id: State["category"]) => void;
}

const LAST_STEP = 4;
const INIT_VALUE = {
  step: 1,
  type: null,
  category: 100,
};
const useCoffeKioskStore = create<State & Action>((set, get) => ({
  ...INIT_VALUE,
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
}));

export default useCoffeKioskStore;
