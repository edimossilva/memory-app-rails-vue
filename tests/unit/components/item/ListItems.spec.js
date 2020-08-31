import { shallowMount } from "@vue/test-utils";
import ListItems from "@/components/item/ListItems.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";

Vue.use(VueRouter);

const mockItems = [
  { key: "mockKey1", value: "mockValue1" },
  { key: "mockKey2", value: "mockValue2" },
];
describe("ListItems.vue", () => {
  it("Matchs Snapshot", () => {
    const wrapper = shallowMount(ListItems, {
      store,
      computed: { items: () => mockItems },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
