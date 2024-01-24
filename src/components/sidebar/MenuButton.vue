<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 -960 960 960"
    class="fill-light text-light w-12 h-12 transition duration-300 hover:fill-pop m-2"
    :class="{ 'rotate-180': isOpen }"
    @click="onClick"
  >
    <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
  </svg>
</template>

<script>
export default {
  name: "MenuButton",
  emits: ["click"],
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const onClick = () => {
      emit("click", !props.isOpen);
    };

    return {
      onClick,
    };
  },
};
</script>
