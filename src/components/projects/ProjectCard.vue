<template>
  <div class="w-full h-auto">
    <div v-if="video.loading">loading...</div>
    <video v-else :src="video.url" autoplay></video>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useVideos } from "./useVideos";

export default {
  name: "ProjectCard",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const video = useVideos();
    onMounted(() => {
      video.fetchVideo(props.title);
    });

    return { video };
  },
};
</script>
