<template>
  <div id="AddReduce">
    <h1>{{count}}</h1>
    <button @click="count=count+1">Add</button>
    <button @click="count=count-1">reduce</button>
    <button @click="count=0">Reset count</button>
    
  </div>
</template>

<script>
export default {
    name:"AddReduce",
    data() {
        return {
            count: 0
        }
    },
}
</script>

<style>

</style>