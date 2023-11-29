import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {},
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },
  },
  // se llaman desde acciones
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    setUserInfoAction(context, payload) {
      context.commit("setUserInfo", payload);
    },
  },
  modules: {},
});
