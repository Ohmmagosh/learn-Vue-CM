<template>
  <div id="comB">
      <h1>Component B</h1>
      <h2>{{$store.getters.getCount}}</h2>
      <button @click="reduce" >reduce</button>
  </div>
</template>

<script>
export default {
    name: "comB",
    methods: {
        reduce(){
            this.$store.dispatch("redAction")
        },
    },

}
</script>

<style>

</style>