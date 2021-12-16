<template>
  <div app = "DataVariable">
      <h1>Data</h1>
      <h1><span>{{count}}</span>   <span>{{message}}</span> <span>{{isLogin}}</span></h1>
      <input v-model="message" type="text" placeholder="Enter your message"><br>
      <input v-model="message2" type="text" placeholder="Enter your message"><br>
      <h1 v-if="isLogin">login complete</h1>
      <button @click="count++">Add</button>
      <button @click="count--">Reduce</button>
      <button @click="count=0">Reset</button>
      <button @click="isLogin=true">true</button>
      <button @click="isLogin=false">false</button>

  </div>
</template>

<script>
export default {
    name:"DataVariable",
    mounted() {
        this.message="Ohmaaagoch"
    },
    data() {
        return {
            count: 0,
            message: '',
            message2: '',
            isLogin: '',
        }
    },
}
</script>

<style>

</style>