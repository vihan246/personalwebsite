<template>
  <div class="items-center h-full w-full bg-background flex justify-center">
    <div
      class="container h-full flex flex-col col-6 justify-start items-center"
    >
      <div class="w-10/12 flex flex-col h-1/2 mt-24 items-center">
        <ProfileCard />
      </div>
    </div>
    <div
      class="container flex flex-col col-6 overflow-y-scroll no-scrollbar"
    ></div>
  </div>
</template>
<script>
import ProfileCard from "./ProfileCard.vue";
export default {
  name: "HomePage",
  components: { ProfileCard },
};
</script>
