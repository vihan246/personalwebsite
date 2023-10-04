<template>
  <button
    class="group bg-transparent w-fit whitespace-nowrap transition-all duration-500"
    :class="[
      secondary ? 'hover:text-pop-light text-pop' : 'hover:text-pop text-light',
    ]"
    @click="routeToPage"
  >
    {{ text }} {{ arrow ? "»" : "" }}
    <span
      class="block max-w-0 group-hover:max-w-full h-0.5 transition-all duration-500"
      :class="[
        secondary
          ? 'group-hover:bg-pop-light bg-pop'
          : 'group-hover:bg-pop bg-light',
      ]"
    ></span>
  </button>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  name: "UnderlineButton",
  props: {
    text: {
      type: String,
      required: true,
      default: "",
    },
    route: {
      type: String,
      required: true,
      default: "/",
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    arrow: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const router = useRouter();
    const routeToPage = () => {
      if (props.route.startsWith("/")) {
        router.push(props.route);
      } else {
        window.open(props.route, "_blank");
      }
      emit("close");
    };

    return {
      routeToPage,
    };
  },
};
</script>
