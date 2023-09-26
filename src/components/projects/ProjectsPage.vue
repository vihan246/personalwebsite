<template>
  <div class="flex w-full flex-col no-scrollbar">
    <div class="flex flex-col w-full"></div>
    <div class="flex w-full">
      <div class="flex-col w-1/2"></div>
      <div class="flex-col w-1/2"></div>
    </div>
  </div>
</template>
<script>
import { onMounted } from "vue";
import { useVideos } from "./useVideos";
export default {
  name: "ProjectsPage",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const video = useVideos();
    onMounted(() => {
      video.fetchVideo("portal_demo");
    });
    return {
      video,
    };
  },
};
</script>
