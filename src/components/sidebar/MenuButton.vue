<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    class="fill-normal text-normal w-16 h-16 transition hover:fill-pop"
    :class="{ 'rotate-180': isOpen }"
    @click="onClick"
  >
    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
  </svg>
</template>

<script>
import { ref } from "vue";
export default {
  name: "MenuButton",
  emits: ["click"],
  setup(_, { emit }) {
    const isOpen = ref(false);
    const onClick = () => {
      isOpen.value = !isOpen.value;
      emit("click", isOpen);
    };

    return {
      onClick,
      isOpen,
    };
  },
};
</script>
