<template>
  <v-card>
    <v-card-title primary-title>
      <v-container>
        <v-row
          class="d-flex flex-row align-center"
          v-for="(item, index) in todos"
          :key="index"
          elevation="10"
        >
          <v-col cols="12" class="d-flex flex-row align-center py-0">
            <v-checkbox v-model="item.completed" ></v-checkbox>
            <span>{{ item.title }}</span>
            <v-spacer></v-spacer>
            <v-btn @click="$emit('onRemove', item.id)" color="error">X</v-btn>
          </v-col>
          <v-col cols="12">
            <v-divider></v-divider>
          </v-col>
        </v-row>
      </v-container>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "TodList",
  props: ["todos"]
};
</script>

<style></style>
