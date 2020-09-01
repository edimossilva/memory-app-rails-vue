<template>
  <div>
    <h1>Show item</h1>
    key: {{ item.key }}, value: {{ item.value }}
    <btn
      :dataId="item.key"
      label="remove"
      :onClick="onRemoveButtonClick"
      class="show-item---button-remove-js"
    ></btn>
  </div>
</template>

<script>
import Btn from "@/components/Btn.vue";
import { mapActions } from "vuex";

export default {
  name: "ShowItem",
  props: {
    item: { type: Object, required: true },
  },
  components: { Btn },
  methods: {
    ...mapActions(["removeItem"]),

    onRemoveButtonClick() {
      this.removeItem(this.item);
    },
  },
};
</script>
