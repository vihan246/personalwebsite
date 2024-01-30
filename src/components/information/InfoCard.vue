<template>
  <div
    class="flex flex-col md:flex-row w-full h-fit my-4 rounded-md justify-between p-4 border border-dark-light hover:shadow-custom transition duration-300"
  >
    <div class="w-full md:w-3/12 flex flex-col md:pr-4 mb-2 md:mb-0">
      <span class="text-light text-left text-sm mb-2 pt-0.5"
        >{{ item.startDate }} - {{ item.endDate }}</span
      >
      <div class="w-full h-auto" v-if="title">
        <img
          :src="logo.logoUrls.get(title)"
          class="w-auto h-auto md:mx-0 mx-auto max-h-64 rounded-sm"
        />
      </div>
    </div>
    <div class="flex flex-col md:w-9/12 w-full">
      <h3 class="mb-2 text-large w-full">
        <UnderlineButton
          :text="item.title"
          :route="item.link"
          secondary
          arrow
        />
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
      <p class="text-light text-sm">{{ item.shortDescription }}</p>
      <div class="flex w-full p-1">
        <UnderlineButton
          v-for="(add, ind) in item.additionalLinks"
          :key="add.id"
          :index="ind"
          :route="add.link"
          :text="add.display"
          secondary
          class="text-sm mr-1 my-2"
          arrow
        />
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
import UnderlineButton from "../UnderlineButton.vue";
import TagPill from "./TagPill.vue";
import { useLogo } from "@/modules/useLogo";
export default {
  name: "InfoCard",
  components: { UnderlineButton, TagPill },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const logo = useLogo();
    onMounted(() => {
      if (props.item.logo) {
        logo.fetchLogo(props.item.logo);
      }
    });

    return { logo, title: props.item.logo };
  },
};
</script>
