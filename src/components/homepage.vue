<template>
  <h1 className="bg-black text-white">{{ welcome_msg }}</h1>
</template>
<script>
const welcome_msg = "Hi!";
module.exports = {
  setup() {
    return {
      welcome_msg,
    };
  },
};
</script>
