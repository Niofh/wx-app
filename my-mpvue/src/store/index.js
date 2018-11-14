import Vue from "vue";
import Vuex from "vuex";

// 持久层 刷新不会丢失数据
import createPersistedState from "vuex-persistedstate";

import test from "./modules/test";

Vue.use(Vuex);



export default new Vuex.Store({
  modules: {
    test
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => wx.getStorageSync(key),
        setItem: (key, value) => wx.setStorageSync(key, value),
        removeItem: key => {
        }
      }
    })
  ]
});
