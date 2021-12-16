<template>
  <div app="DictionaryArray">
      <h1>Dictionary and Array</h1>
      <div>{{account}}</div>
      <div>{{account.username}}</div>
      <div>{{account.password}}</div>
      <div>{{course}}</div>
      <br>
      <ul>
          <li class="list" v-for="(item,index) in course" :key="index"> {{index+1}}. {{item}}</li>
      </ul>
      <br>
      <ul v-for="(item,index) in course" :key="index">
          <li class="list" > {{index+1}}. {{item}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"DictionaryArray",
    data() {
        return {
            account:{
                username: "admin",
                password: 1234
            },
            course:[
                "react",
                "html-css",
                "nodejs",
                "express"
            ]
        }
    },
}
</script>

<style scoped>
    li{
        display: inline;
    }
</style>