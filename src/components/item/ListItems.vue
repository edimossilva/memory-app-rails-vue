<template>
  <div>
    <h1>ListItems</h1>
    <div v-for="item in items" :key="item.key">
      <show-item :item="item"></show-item>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ShowItem from "@/components/item/ShowItem.vue";
export default {
  name: "ListItems",
  data() {
    return {
      item: { key: "", value: "" },
    };
  },
  components: { ShowItem },
  computed: {
    ...mapState(["items"]),
  },
};
</script>
