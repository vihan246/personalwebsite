<template>
  <div class="w-full flex flex-col h-fit mb-2">
    <h2 class="text-dark text-2xl">{{ title }}</h2>
    <InfoCard
      v-for="(item, index) in items"
      :item="item"
      :index="index"
      :key="item.id"
    />
  </div>
</template>

<script>
import data from "../../assets/data.json";
import InfoCard from "./InfoCard.vue";
import Information from "../../modules/Information";
import { ref } from "vue";

export default {
  name: "InfoSection",
  components: { InfoCard },
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

    return {
      items,
    };
  },
};
</script>
