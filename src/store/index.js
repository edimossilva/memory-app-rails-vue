import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
  },
  mutations: {
    addItem(state, item) {
      state.items.push(item);
    },
    // mutate(state, payload) {
    //   state[payload.property] = payload.value;
    // },
  },
  actions: {
    addItem({ commit }, item) {
      commit("addItem", { ...item });
    },
  },
  modules: {},
});
