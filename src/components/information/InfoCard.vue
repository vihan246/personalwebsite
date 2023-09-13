<template>
  <div class="flex w-full h-fit my-4 rounded-md">
    <div class="col-3 w-3/12 flex flex-col">
      <span class="text-dark text-left text-sm mb-2 pt-0.5"
        >{{ item.startDate }} - {{ item.endDate }}</span
      >
    </div>
    <div class="col-9 flex flex-col w-9/12">
      <h3 class="mb-2 text-large w-full">
        <UnderlineButton :text="item.title" :route="item.link" secondary />
      </h3>
      <div class="flex flex-wrap w-full mb-2">
        <TagPill
          v-for="(tag, i) in item.tags"
          :key="tag.id"
          :tag="tag.display"
          :index="i"
          class="mx-1 my-1"
        />
      </div>
      <p class="text-dark text-sm">{{ item.shortDescription }}</p>
      <div class="flex w-full p-1">
        <UnderlineButton
          v-for="(add, ind) in item.additionalLinks"
          :key="add.id"
          :index="ind"
          :route="add.link"
          :text="add.display"
          secondary
          class="text-sm mr-1 my-2"
        />
      </div>
    </div>
  </div>
</template>
<script>
import UnderlineButton from "../UnderlineButton.vue";
import TagPill from "./TagPill.vue";
export default {
  name: "InfoCard",
  components: { UnderlineButton, TagPill },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
