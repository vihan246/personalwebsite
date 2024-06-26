<template>
  <div class="w-full h-full p-2">
    <h1 class="text-light w-72 text-left text-6xl">
      <span>Vihan Raj<TypeWriter text="" delete="full" cursor repeats /></span>
    </h1>
    <h2 class="text-light my-4 text-2xl">
      <UnderlineButton text="USC" route="https://cs.usc.edu/" secondary />
      New Graduate & Full Stack Software Engineer
    </h2>
    <p class="text-light mb-6 text-lg">
      Hi! I am a new graduate from the University of Southern California who is
      passionate about software engineering, developing web-apps and music.
    </p>
    <UnderlineButton
      class="text-xl"
      text="Resume »"
      route="./RAJ_VIHAN_RESUME_JUN2024.pdf"
      secondary
    />
  </div>
</template>
<script>
import TypeWriter from "./TypeWriter.vue";
import UnderlineButton from "./UnderlineButton.vue";
export default {
  name: "ProfileCard",
  components: { TypeWriter, UnderlineButton },
};
</script>
