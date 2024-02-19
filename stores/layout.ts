/**
 * 系统错误收集
 * */
import { defineStore } from 'pinia';
type StateType = {
  scrollNavVisible: boolean; //滚动导航条
};
export const useLayoutStore = defineStore({
  id: 'layout',
  state(): StateType {
    return {
      scrollNavVisible: false,
    };
  },
  actions: {
    setScrollNavVisible(state: boolean): void {
      this.scrollNavVisible = state;
    },
    switchScrollNavVisible(): void {
      this.scrollNavVisible = !this.scrollNavVisible;
    },
  },
});
