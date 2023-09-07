<template>
  <div className="container bg-background items-center">
    <h1 className="text-normal text-center">{{ welcome_msg }}</h1>
  </div>
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
