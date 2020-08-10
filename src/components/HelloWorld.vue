<template>
  <div>
    <button v-on:click="notify">{{ test }}</button>
    <p>{{ defaultText }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  mounted() {
    browser.runtime.sendMessage({});
  },
  computed: {
    defaultText() {
      return browser.i18n.getMessage("extName");
    }
  },
  data: function() {
    return {
      test: "ok"
    };
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
