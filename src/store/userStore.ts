import { create } from "zustand";

const useUserStore = create<UserStore>((set) => ({
  accessToken: null,
  setAccessToken: (accessToken) => set({ accessToken }),
}));

export { useUserStore };

