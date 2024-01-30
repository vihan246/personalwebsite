<template>
  <div
    class="items-center h-full w-full bg-background flex flex-col md:flex-row justify-center"
  >
    <div
      class="container w-full h-5/12 md:h-full flex flex-col justify-start items-start md:w-5/12 mb-5 md:mb-0"
    >
      <div class="w-10/12 flex flex-col h-1/2 md:mt-24 items-center">
        <ProfileCard />
      </div>
      <SocialIcons class="mt-auto md:mb-10 mx-auto md:mx-0" />
    </div>
    <div
      class="container flex flex-col-reverse w-full h-7/12 md:h-full md:w-7/12"
    >
      <div class="h-1/12 flex w-full my-5 justify-center invisible md:visible">
        <span
          class="text-center animate-bounce transition-all duration-500"
          :class="[showScroll ? 'text-light' : 'text-background']"
          >↓scroll↓</span
        >
      </div>
      <div
        class="container flex flex-col p-2 md:p-0 md:overflow-y-scroll md:h-4/5 no-scrollbar h-fit"
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
import SocialIcons from "./SocialIcons.vue";
import { ref } from "vue";
export default {
  name: "HomePage",
  components: { ProfileCard, InfoSection, SocialIcons },
  setup() {
    const showScroll = ref(true);
    const onScroll = ({
      target: { scrollTop, clientHeight, scrollHeight },
    }) => {
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        showScroll.value = false;
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
