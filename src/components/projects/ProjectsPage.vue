<template>
  <div class="flex w-full h-full flex-col no-scrollbar">
    <div class="flex flex-col w-full"></div>
    <div class="flex w-full">
      <div class="flex-col w-1/2">
        <div class="w-full h-72"><ProjectCard title="portal_demo" /></div>
      </div>
      <div class="flex-col w-1/2"></div>
    </div>
  </div>
</template>
<script>
import ProjectCard from "./ProjectCard.vue";
export default {
  name: "ProjectsPage",
  components: { ProjectCard },
};
</script>
