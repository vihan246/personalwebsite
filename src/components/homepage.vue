<template>
  <Transition
    leave-to-class="opacity-0"
    leave-active-class="transition duration-700"
  >
    <div
      v-if="showLanding"
      class="h-full w-full flex justify-center items-center absolute top-0 left-0 z-50 bg-background-dark"
    >
      <TypeWriter
        class="text-light text-left text-4xl w-44"
        cursor
        text="Vihan Raj"
        @done="
          () => {
            showLanding = false;
          }
        "
      />
    </div>
  </Transition>

  <div class="items-center h-full w-full bg-background flex justify-center">
    <SideBar />
    <div class="container flex-col col-6">
      <h1 class="text-dark text-center w-full"></h1>
    </div>
    <div class="container flex-col col-6 overflow-y-scroll"></div>
  </div>
</template>
<script>
import { ref } from "vue";
import SideBar from "./sidebar/SideBar.vue";
import TypeWriter from "./TypeWriter.vue";
export default {
  name: "HomePage",
  components: { SideBar, TypeWriter },
  setup() {
    const landingStr = "Vihan Raj";
    const landingDisplay = ref("_");
    const showLanding = ref(true);
    return { landingDisplay, showLanding, landingStr };
  },
};
</script>
