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
import Btn from "@/components/Btn.vue";
import { mapActions } from "vuex";

export default {
  name: "CreateItemModal",
  components: { Btn },
  data() {
    return {
      item: { key: "", value: "" },
    };
  },
  methods: {
    ...mapActions(["createItem"]),
    onCreateButtonClick() {
      this.createItem(this.item);
    },
  },
};
</script>
