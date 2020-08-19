<template>
  <hello-world />
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'App',
  components: { HelloWorld },
  created() {
    console.log('test');
    this.$vuetify.theme.dark = true;
  },
};
</script>

<style>
html {
  width: 400px;
  height: 400px;
}
</style>
