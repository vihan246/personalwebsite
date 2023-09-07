<template>
  <div className="items-center h-full w-full bg-background flex justify-center">
    <SideBar />
    <div className="container flex-col col-6">
      <h1 className="text-normal text-center w-full">{{ welcome_msg }}</h1>
    </div>
    <div className="container flex-col col-6 overflow-y-scroll"></div>
  </div>
</template>
<script>
import SideBar from "./sidebar/SideBar.vue";
const welcome_msg = "Hi!";
export default {
  name: "HomePage",
  components: { SideBar },
  setup() {
    return {
      welcome_msg,
    };
  },
};
</script>
