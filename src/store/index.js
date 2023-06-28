import { createStore } from 'vuex';
// import Vue from 'vue';
// import Vuex from 'vuex';

export default createStore({
  state: {
    count: 0,
    islogin: false
  },
  getters: {},
  mutations: {
    increment(state) {
      state.count += 1;
    },
    login(state) {
      state.islogin = true;
    },
    logout(state) {
      state.islogin = false;
    }
  },
  actions: {},
  modules: {}
});
