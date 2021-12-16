<template>
  <div>
    <h1>learn : v-model</h1>
    <ul>
      <li><router-link to="/">home</router-link></li>
      <li><router-link to=learn1>learn1</router-link></li>
      <li><router-link to=AddReduce>AddReduce</router-link></li>
      <li><router-link to=message>message</router-link></li>
      <li><router-link to=EventMethod>EventMethod</router-link></li>
      <li><router-link to=DataVariable>Data and Variable</router-link></li>
      <li><router-link to=DictionaryArray>Dictionary and array</router-link></li>
      <li><router-link to=styleGlobalLocal>style</router-link></li>
      <li><router-link to=compute>compute</router-link></li>
    </ul>
  
    
    <router-view class="box"></router-view>
  </div>
</template>

<script>
export default {
  name:"app",
  data() {
    return {
      message:"",
      
    }
  },
}
</script>

<style scoped>
  ul{
    margin: 0;
    padding: 0;
  }
  li{
    display: inline;
    margin:5px;
    padding: 10px;
    margin-top: 20px;
    border: 2px solid #333;
  }
  .box{
    margin: 20px;
    padding: 20px;
    border: 3px solid crimson;
  }
</style>