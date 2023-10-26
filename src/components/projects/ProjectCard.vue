<template>
  <div class="flex flex-col items-center">
    <div class="w-5/6 aspect-video">
      <div v-if="video.loading">loading...</div>
      <video
        class="outline-none w-full h-full"
        v-else
        :src="video.url"
        autoplay
        loop
        muted
      ></video>
    </div>
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
