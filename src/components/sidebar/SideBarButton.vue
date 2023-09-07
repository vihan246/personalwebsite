<template>
  <button
    class="group bg-transparent text-normal w-fit whitespace-nowrap hover:text-pop transition-all duration-500"
  >
    {{ text }}
    <span
      class="block max-w-0 group-hover:max-w-full h-0.5 bg-normal transition-all duration-500 group-hover:bg-pop"
    ></span>
  </button>
</template>
<script>
export default {
  name: "SideBarButton",
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
  },
  setup(props) {
    const routeToPage = () => {
      this.$router.push(props.route);
    };

    return {
      routeToPage,
    };
  },
};
</script>
