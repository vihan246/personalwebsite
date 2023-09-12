<template>
  <div
    class="text-xs bg-dark text-light rounded-full px-2 w-fit h-fit whitespace-nowrap"
  >
    {{ tag }}
  </div>
</template>
<script>
export default {
  name: "TagPill",
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
};
</script>
