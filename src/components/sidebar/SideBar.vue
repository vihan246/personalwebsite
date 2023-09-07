<template>
  <div class="flex absolute top-0 left-0 h-full">
    <div
      class="h-full border-normal bg-blue-dark transition-all duration-300 overflow-hidden"
      :class="[open ? 'max-w-lg p-2 border-r-[1px]' : 'max-w-0 p-0 border-0']"
    >
      <div class="w-48 h-full flex flex-col justify-center items-center">
        <SideBarButton text="Home" />
      </div>
    </div>
    <MenuButton @click="onOpenClose($event)" />
  </div>
</template>
<script>
import { ref } from "vue";
import MenuButton from "./MenuButton.vue";
import SideBarButton from "./SideBarButton.vue";

export default {
  name: "SideBar",
  components: { MenuButton, SideBarButton },
  setup() {
    const open = ref(false);

    const onOpenClose = (event) => {
      open.value = event.value;
    };
    return {
      open,
      onOpenClose,
    };
  },
};
</script>
