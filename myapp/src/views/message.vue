<template>
  <div id="Message">
      <input v-model="message" type="text" name="" id="" placeholder="Enter your message"><br>
      <h1>{{message}}</h1>
      <button @click="message=''">reset</button>
  </div>
</template>

<script>
export default {
    name:"Message",
    data() {
        return {
            message:"",
        }
    },
}
</script>

<style>

</style>