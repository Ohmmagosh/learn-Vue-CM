<template>
  <div id="comA">
      <h1>Component A</h1>
      <h2>{{$store.getters.getCount}}</h2>
      <button @click="add" >Add</button>
  </div>
</template>

<script>
export default {
    name: "comA",
    methods: {
        add(){
            this.$store.dispatch("addAction")
        },
    },
}
</script>

<style>

</style>