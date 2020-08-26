<template>
  <div class="home">
    <h1>Home</h1>
    <btn label="add"></btn>
    <create-item-modal></create-item-modal>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import CreateItemModal from "@/modals/CreateItemModal.vue";
export default {
  name: "Home",
  components: { btn: Button, "create-item-modal": CreateItemModal },
  mounted() {
    console.log("here");
    this.$modal.show("my-first-modal");
  },
};
</script>
