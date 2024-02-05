import { create } from "zustand";

const useUserStore = create<UserStore>((set) => ({
  accessToken: null,
  setAccessToken: (accessToken) => set({ accessToken }),
  username: null,
  setUsername: (username) => set({ username }),
  themeColor: "bg-purple-700",
  setThemeColor: (themeColor) => set({ themeColor })
}));

export { useUserStore };

