<template>
  <v-app>
    <v-main class="ma-5">
      <v-row justify="center">
        <h1>GTFO</h1>
      </v-row>
      <v-row><date-picker></date-picker></v-row>
    </v-main>
  </v-app>
</template>

<script>
import DatePicker from './DatePicker';
export default {
  name: 'HelloWorld',
  components: {
    DatePicker,
  },
};
</script>
