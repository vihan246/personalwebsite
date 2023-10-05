<template>
  <div class="aspect-video">
    <div v-if="video.loading">loading...</div>
    <video
      class="outline-none absolute top-0 left-0 w-full h-full"
      v-else
      :src="video.url"
      autoplay
      muted
    ></video>
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
