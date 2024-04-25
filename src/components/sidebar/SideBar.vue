<template>
  <div class="flex absolute top-0 left-0 h-full">
    <div
      class="h-full border-normal bg-background-light transition-all duration-300 overflow-hidden"
      :class="[open ? 'max-w-lg p-2 border-r-[1px]' : 'max-w-0 p-0 border-0']"
    >
      <div class="w-48 h-full flex flex-col justify-center items-center gap-5">
        <UnderlineButton text="Home" @close="() => onOpenClose(false)" />
        <UnderlineButton
          text="Resume"
          route="./RESUME_C.pdf"
          @close="() => onOpenClose(false)"
        />
        <!--
          <UnderlineButton text="Projects" @close="() => onOpenClose(false)" />
        <UnderlineButton text="Activities" @close="() => onOpenClose(false)" />
        <UnderlineButton
          text="About Me"
          @close="() => onOpenClose(false)"
          route="/about"
        />-->
      </div>
    </div>
    <MenuButton :isOpen="open" @click="onOpenClose($event)" />
  </div>
</template>
<script>
import { ref } from "vue";
import MenuButton from "./MenuButton.vue";
import UnderlineButton from "../UnderlineButton.vue";

export default {
  name: "SideBar",
  components: { MenuButton, UnderlineButton },
  setup() {
    const open = ref(false);

    const onOpenClose = (event) => {
      open.value = event;
    };
    return {
      open,
      onOpenClose,
    };
  },
};
</script>
