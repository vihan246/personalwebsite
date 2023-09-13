<template>
  <div
    class="text-xs bg-pop-light text-dark rounded-lg px-3 py-1 w-fit h-fit whitespace-nowrap"
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
