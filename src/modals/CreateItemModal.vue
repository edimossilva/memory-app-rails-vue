<template>
  <modal name="create-item-modal"> This is my first modal </modal>
</template>

<script>
export default {
  name: "CreateItemModal",
  methods: {
    show() {
      this.$modal.show("create-item-modal");
    },
    hide() {
      this.$modal.hide("create-item-modal");
    },
  },
  mount() {
    console.log("modal");
    debugger;
    this.show();
  },
};
</script>
