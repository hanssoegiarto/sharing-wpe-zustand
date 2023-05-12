import { create } from "zustand";

const useRenderStore = create((set, get) => ({
  var1: 0,
  var2: 0,
  increaseVar1: () => {
    console.log("increase var 1 clicked");
    set({
      var1: get().var1 + 1,
    });
  },
  increaseVar2: () => {
    console.log("increase var 2 clicked");
    set({
      var2: get().var2 + 1,
    });
  },
}));

export default useRenderStore