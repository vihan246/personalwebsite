<template>
  <div className="w-screen h-screen bg-background flex flex-col md:flex-row">
    <Transition
      leave-to-class="opacity-0"
      leave-active-class="transition duration-700"
    >
      <div
        v-if="showLanding"
        class="h-screen w-screen flex justify-center items-center absolute top-0 left-0 z-50 bg-background-light"
      >
        <TypeWriter
          class="text-dark text-left text-4xl w-44"
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
    <div class="h-full w-1/12 hidden md:block"><SideBar /></div>
    <div
      class="h-11/12 md:h-full w-full md:w-11/12"
      :class="[showLanding ? 'hidden' : 'block']"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "./index.css";
import SideBar from "./components/sidebar/SideBar.vue";
import TypeWriter from "./components/TypeWriter.vue";
import { ref } from "vue";
export default {
  name: "App",
  components: { SideBar, TypeWriter },
  setup() {
    const landingDisplay = ref("_");
    const showLanding = ref(true);
    return { landingDisplay, showLanding };
  },
};
</script>
