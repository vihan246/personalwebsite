<template>
  <div class="w-full flex flex-col h-fit mb-2">
    <h2 class="text-light text-2xl">{{ title }}</h2>
    <InfoCard
      v-for="(item, index) in items"
      :item="item"
      :index="index"
      :key="item.id"
    />
    <UnderlineButton
      v-if="isWork"
      text="View full resume"
      route="./RESUME_Oct2023.pdf"
      secondary
      class="mb-4"
      arrow
    />
    <!--
    <UnderlineButton
      v-else-if="isProject"
      text="View all projects »"
      route="/"
      secondary
      class="mb-4"
    />
    <UnderlineButton
      v-else-if="isActivity"
      text="View more »"
      route="/"
      secondary
      class="mb-4"
    />
    -->
  </div>
</template>

<script>
import data from "../../assets/data.json";
import InfoCard from "./InfoCard.vue";
import Information from "../../modules/Information";
import UnderlineButton from "../UnderlineButton.vue";
import { ref } from "vue";

export default {
  name: "InfoSection",
  components: { InfoCard, UnderlineButton },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const items = ref([]);
    for (const exp of data[props.title]) {
      if (exp.type === "main") {
        items.value.push(new Information(exp));
      }
    }
    const isWork = props.title === "Work Experience";
    const isProject = props.title === "Projects";
    const isActivity = props.title === "Activities";
    return {
      items,
      isWork,
      isProject,
      isActivity,
    };
  },
};
</script>
