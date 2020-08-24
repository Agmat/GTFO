<template>
  <v-row>
    <v-col>
      <v-dialog
        ref="test"
        v-model="startModal"
        :return-value.sync="start"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="start"
            label="Picker in dialog"
            prepend-icon="access_time"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker v-if="startModal" v-model="start" :max="end" full-width>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="startModal = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.test.save(start)">OK</v-btn>
        </v-time-picker>
      </v-dialog>
    </v-col>
    <v-col>
      <v-dialog
        ref="dialog"
        v-model="endModal"
        :return-value.sync="end"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="end"
            label="Picker in dialog"
            prepend-icon="access_time"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker v-if="endModal" v-model="end" :min="start" full-width>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="endModal = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.dialog.save(end)">OK</v-btn>
        </v-time-picker>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'DatePicker',
  data() {
    return {
      time: null,
      start: null,
      end: null,
      startModal: false,
      endModal: false,
    };
  },
  methods: {
    allowedStep: (m) => m % 5 === 0,
  },
};
</script>
