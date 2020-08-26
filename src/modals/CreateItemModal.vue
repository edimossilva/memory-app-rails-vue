<template>
  <modal name="my-first-modal"> This is my first modal </modal>
</template>

<script>
export default {
  name: "CreateItemModal",
  methods: {
    show() {
      this.$modal.show("my-first-modal");
    },
    hide() {
      this.$modal.hide("my-first-modal");
    },
  },
  mount() {
    console.log("modal");
    debugger;
    this.show();
  },
};
</script>
