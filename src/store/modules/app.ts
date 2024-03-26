import { defineStore } from 'pinia';
import { store } from '@/store';
import { tabBar } from '@/constants/modules/app';

export interface AppStore {
  tabBar: NonNullable<Recordable>;
  APP_ID: string;
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppStore => ({
    tabBar,
    APP_ID: 'wx8d64466dcb6b3334'
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


