import { defineStore } from 'pinia';
import { store } from '@/store';
import { tabBar } from '@/constants/modules/app';

export interface AppStore {
  tabBar: NonNullable<Recordable>;
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppStore => ({
    tabBar
  }),
  getters: {
    getTabBar: (state) => state.tabBar,
  },
  actions: {
   
  },
});

export function useAppStoreWithOut() {
  return useAppStore(store);
}


