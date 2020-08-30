import { shallowMount } from "@vue/test-utils";
import Button from "@/components/Button.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
describe("Button.vue", () => {
  it("Matchs Snapshot", () => {
    const wrapper = shallowMount(Button, {
      propsData: { label: "mock label" },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
