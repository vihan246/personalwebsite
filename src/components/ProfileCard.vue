<template>
  <div class="w-full h-full p-2">
    <h1 class="text-dark w-72 text-left text-6xl">
      <span>Vihan Raj<TypeWriter text="" delete="full" cursor repeats /></span>
    </h1>
    <h2 class="text-dark my-4 text-2xl">
      Student @
      <UnderlineButton text="USC" route="https://cs.usc.edu/" secondary />
      & Full Stack Software Engineer
    </h2>
    <p class="text-dark mb-6 text-lg">
      Hi! I am a senior at the University of Southern California who is
      passionate about software engineering, developing web-apps and music.
    </p>
    <UnderlineButton
      class="text-xl"
      text="Resume »"
      route="./RESUME_Oct2023.pdf"
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
