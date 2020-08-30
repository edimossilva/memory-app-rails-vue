<template>
  <button @click="onClick">{{ label }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      required: true,
    },

    onClick: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
};
</script>
