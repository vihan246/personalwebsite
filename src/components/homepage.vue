<template>
  <div class="items-center h-full w-full bg-background flex justify-center">
    <div class="container h-full flex flex-col col-6 justify-start items-start">
      <div class="w-10/12 flex flex-col h-1/2 mt-24 items-center">
        <ProfileCard />
      </div>
    </div>
    <div class="container flex flex-col-reverse col-6 h-full">
      <div class="h-1/12 flex w-full my-5 justify-center">
        <span
          class="text-center animate-bounce transition-all duration-500"
          :class="[showScroll ? 'text-dark' : 'text-background']"
          >↓scroll↓</span
        >
      </div>
      <div
        class="container flex flex-col col-6 overflow-y-scroll h-4/5 no-scrollbar"
        @scroll="(e) => onScroll(e)"
      >
        <InfoSection title="Work Experience" />
        <InfoSection title="Projects" />
        <InfoSection title="Activities" />
      </div>
    </div>
  </div>
</template>
<script>
import InfoSection from "./information/InfoSection.vue";
import ProfileCard from "./ProfileCard.vue";
import { ref } from "vue";
export default {
  name: "HomePage",
  components: { ProfileCard, InfoSection },
  setup() {
    const showScroll = ref(true);
    const onScroll = ({
      target: { scrollTop, clientHeight, scrollHeight },
    }) => {
      console.log("scroll", scrollTop, clientHeight, scrollHeight);
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        showScroll.value = false;
        console.log("bottom");
      } else {
        showScroll.value = true;
      }
    };
    return {
      showScroll,
      onScroll,
    };
  },
};
</script>
