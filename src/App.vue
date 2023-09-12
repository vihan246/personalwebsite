<template>
  <div className="w-screen h-screen bg-background flex">
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
    <div class="col-1 h-full w-1/12"><SideBar /></div>
    <div class="col-10 h-full w-10/12"><router-view></router-view></div>
    <div
      class="col-1 flex h-full w-1/12 flex-col-reverse justify-start items-end py-4"
    >
      <SocialIcons vertical />
    </div>
  </div>
</template>

<script>
import "./index.css";
import SideBar from "./components/sidebar/SideBar.vue";
import TypeWriter from "./components/TypeWriter.vue";
import SocialIcons from "./components/SocialIcons.vue";
import { ref } from "vue";
export default {
  name: "App",
  components: { SideBar, TypeWriter, SocialIcons },
  setup() {
    const landingDisplay = ref("_");
    const showLanding = ref(true);
    return { landingDisplay, showLanding };
  },
};
</script>
