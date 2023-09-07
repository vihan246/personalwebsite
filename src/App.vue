<template>
  <div className="w-screen h-screen bg-background">
    <HomePage />
  </div>
</template>

<script>
import HomePage from "./components/homepage.vue";
import "./index.css";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>
