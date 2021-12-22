<template>
  <div id="idapp" style="text-align:center;">
    <h1>App</h1>
    <h2>{{$store.getters.getCount}}</h2>
    <hr>
    <br>
    <comA/>
    <hr>
    <br>
    <comB/>
    <hr>
    <br>
    
  </div>
</template>

<script>
import comA from "@/components/comA.vue"
import comB from "@/components/comB.vue"

export default {
  name: "app",
  components:{
    comA,
    comB,
  },
}
</script>

<style>

</style>