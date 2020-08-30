import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    item: {},
  },
  mutations: {
    mutate(state, payload) {
      state[payload.property] = payload.value;
    },
  },
  actions: {
    createItem({ commit }, item) {
      commit("mutate", {
        property: "item",
        value: item,
      });
    },
  },
  modules: {},
});
