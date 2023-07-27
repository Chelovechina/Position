import { createStore } from "vuex";
import fillingModule from "./fillingModule";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    filling: fillingModule,
  },
});
