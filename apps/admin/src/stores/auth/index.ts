import { create } from "zustand";

const initState = {
  saveCheck: false,
};

interface State {
  saveCheck: boolean;
}
interface Action {
  setSaveCheck: (check: State["saveCheck"]) => void;
}

const useAuthStore = create<State & Action>((set) => ({
  ...initState,
  setSaveCheck: (check) => {
    set({ saveCheck: check });
  },
}));

export default useAuthStore;
