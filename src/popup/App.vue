<template>
  <hello-world />
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'App',
  components: { HelloWorld },
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>

<style>
html {
  width: 400px;
  height: 500px;
}
</style>
