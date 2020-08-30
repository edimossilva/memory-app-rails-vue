<template>
  <modal name="create-item-modal">
    <label> Key: </label>
    <input v-model="item.key" type="text" />
    <label> Value: </label>
    <input v-model="item.value" type="text" />
    <btn label="create" :onClick="onCreateButtonClick"></btn>
  </modal>
</template>

<script>
import Button from "@/components/Button.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "CreateItemModal",
  components: { btn: Button },
  data() {
    return {
      item: { key: "", value: "" },
    };
  },
  computed: {
    ...mapState(["memoryItem"]),
  },
  methods: {
    ...mapActions(["createItem"]),
    onCreateButtonClick() {
      this.createItem(this.item);
    },
    show() {
      this.$modal.show("create-item-modal");
    },
    hide() {
      this.$modal.hide("create-item-modal");
    },
  },
};
</script>
