<template>
  <div id="home">
    <v-container>
      <h1>Home</h1>
      <p class="green lighten-1 red--text text--darken-1">Ohmaaagoch</p>
      <p class="green lighten-2 red--text text--darken-2">Ohmaaagoch</p>
      <p class="green lighten-3 red--text text--darken-3">Ohmaaagoch</p>
      <p class="green lighten-4 red--text text--darken-4">Ohmaaagoch</p>
      <p class="green lighten-5 red--text text--darken-5">Ohmaaagoch</p>
      <p class="blue lighten-1 red--text text--darken-1">Ohmaaagoch</p>
      <p class="blue lighten-2 red--text text--darken-2">Ohmaaagoch</p>
      <p class="blue lighten-3 red--text text--darken-3">Ohmaaagoch</p>
      <p class="blue lighten-4 red--text text--darken-4">Ohmaaagoch</p>
      <p class="blue lighten-5 red--text text--darken-5">Ohmaaagoch</p>

      <p class="cyan accent-4 white--text text--darken-4 text-lowercase">Ohmaaagoch lowercase</p>
      <p class="cyan accent-4 white--text text--darken-4 text-uppercase">Ohmaaagoch uppercase</p>
      <p class="cyan accent-4 white--text text--darken-4 text-captitalize">Ohmaaagoch capitalize</p>
      
      <h1 class="cyan accent-4 white--text text--darken-4 text-lowercase">Ohmaaagoch lowercase</h1><br>
      <h1 class="cyan accent-4 white--text text--darken-4 text-uppercase">Ohmaaagoch uppercase</h1><br>
      <h1 class="cyan accent-4 white--text text--darken-4 text-captitalize">Ohmaaagoch capitalize</h1><br>
      <v-btn class="primary mr-5">Run</v-btn>
      <v-btn color="pink mr-5" dark>Run</v-btn>
      <v-btn small depressed color="pink mr-5" dark>Run</v-btn>
      <v-btn fab depressed color="blue mr-5" dark>Run</v-btn>
      <v-btn outlined color="red" >Run</v-btn>
      <v-btn color="red" class="mx-5" dark>
        <span>Email</span>
        <v-icon >{{ svgPath }}</v-icon>
      </v-btn>
      <v-btn color="pink">
        <v-icon>{{dropdown }}</v-icon>
      </v-btn>
      <v-container>
        <v-btn color="success" class="hidden-sm-and-up ma-2" >show in sm</v-btn><br>
        <v-btn color="success" class="hidden-md-and-down ma-2" >show in md</v-btn>
        
      </v-container>
    </v-container>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="6">
          <v-btn outlined block color="success">success 1</v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn outlined block color="success">success 2</v-btn>
        </v-col>
        <v-col cols="12">
          <v-btn outlined block color="success">success 3</v-btn>
        </v-col>
        <v-col cols="6" md="4">
          <v-btn outlined block color="success">success 1</v-btn>
        </v-col>
        <v-col cols="6" md="4">
          <v-btn outlined block color="success">success 2</v-btn>
        </v-col>
        <v-col cols="12" sm="12" md="4">
          <v-btn outlined block color="success">success 3</v-btn>
        </v-col>
      </v-row>
      <!-- flex -->
      <v-row no-gutters class="justify-start align-content-center" style="height:200px;background-color:green">
        <v-col cols="2">
          <v-btn block outlined color="success">text</v-btn>
        </v-col>
        <v-col cols="2">
          <v-btn block outlined color="success">text</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mdiEmail,mdiArrowDownDropCircle } from '@mdi/js';
export default {
  name: "home",
  data() {
    return {
      svgPath: mdiEmail,
      dropdown: mdiArrowDownDropCircle,
    }
  },
};
</script>

<style></style>
