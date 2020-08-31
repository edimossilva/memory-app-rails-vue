<template>
  <div>
    <h1>ListItems</h1>
    <div v-for="item in items" :key="item.key">
      key: {{ item.key }}, value: {{ item.value }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ListItems",
  data() {
    return {
      item: { key: "", value: "" },
    };
  },
  computed: {
    ...mapState(["items"]),
  },
};
</script>
