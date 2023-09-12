<template>
  <div class="flex w-full h-fit my-4 rounded-md">
    <div class="col-9 flex flex-col w-9/12">
      <h3 class="mb-2 text-large w-full">
        <UnderlineButton :text="item.title" :route="item.link" secondary />
      </h3>
      <p class="text-dark text-sm">{{ item.shortDescription }}</p>
    </div>
    <div class="col-3 w-3/12 flex flex-row-reverse">
      <span class="text-dark text-right text-sm"
        >{{ item.startDate }} - {{ item.endDate }}</span
      >
    </div>
  </div>
</template>
<script>
import UnderlineButton from "../UnderlineButton.vue";
export default {
  name: "InfoCard",
  components: { UnderlineButton },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
