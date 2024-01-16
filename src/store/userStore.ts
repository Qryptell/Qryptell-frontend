import { create } from "zustand";

const useUserStore = create<UserStoreProps>((set) => ({
  accessToken: null,
  setAccessToken: (accessToken) => set({ accessToken }),
}));

export { useUserStore };

