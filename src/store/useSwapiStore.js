import { create } from "zustand";
const swapiPeoplePath = (page) => `https://swapi.dev/api/people/${page}/`;

const useSwapiStore = create((set, get) => ({
  peopleData: {},
  page: 1,
  fetchPeople: async () => {
    try {
      const response = await fetch(swapiPeoplePath(get().page));
      const data = await response.json();
      set({
        peopleData: data,
      });
    } catch (e) {
      console.log(e)
    }
  },
  prevPage: () => {
    const currentPage = get().page;
    if (currentPage === 1) return;
    set((state) => ({
      page: (state.page -= 1),
    }));
  },
  nextPage: () => {
    set((state) => ({
      page: (state.page += 1),
    }));
  },
}));

export default useSwapiStore;
