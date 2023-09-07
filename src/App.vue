<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <homepage />
</template>

<script>
import homepage from "./components/homepage.vue";
import "./index.css";

export default {
  name: "App",
  components: {
    homepage,
  },
};
</script>
