<template>
  <div>
    <h1>learn : v-model</h1>
    <ul>
      <li>
        <button><router-link to="/">home</router-link></button>
      </li>
      <li>
        <button><router-link to="learn1">learn1</router-link></button>
      </li>
      <li>
        <button><router-link to="AddReduce">AddReduce</router-link></button>
      </li>
      <li>
        <button><router-link to="message">message</router-link></button>
      </li>
      <li>
        <button><router-link to="EventMethod">EventMethod</router-link></button>
      </li>
      <li>
        <button>
          <router-link to="DataVariable">Data and Variable</router-link>
        </button>
      </li>
      <li>
        <button>
          <router-link to="DictionaryArray">Dictionary and array</router-link>
        </button>
      </li>
      <li>
        <button><router-link to="styleGlobalLocal">style</router-link></button>
      </li>
      <li>
        <button><router-link to="compute">compute</router-link></button>
      </li>
      <li>
        <button><router-link to="Binding">Binding</router-link></button>
      </li>
      <li>
        <button><router-link to="inputVmodel">inputVmodel</router-link></button>
      </li>
    </ul>

    <router-view class="box"></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      message: "",
    };
  },
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  display: inline;
  margin: 5px;
  padding: 5px;
  margin-top: 20px;
}
.box {
  margin: 20px;
  padding: 20px;
  border: 3px solid crimson;
}
</style>
