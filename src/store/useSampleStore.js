import { create } from "zustand";

const useSampleStore = create((set) => ({
  data: {},
  setData: (data) => set({ data }),
}));

export default useSampleStore;
