<template>
  <div app="compute">
      <h2>{{firstname}}</h2>
      <h2>{{lastname}}</h2>
      <h2>{{fullname}}</h2>
      <h1>
          Random from compute property: {{ getrandom }}
      </h1>
      <h1>
          Random from compute property: {{ getrandom }}
      </h1>
      <h1>
          Random from compute property: {{ getrandom }}
      </h1>
      <h1>Random from method: {{getRandom1()}}</h1>
      <h1>Random from method: {{getRandom1()}}</h1>
  </div>
  
</template>

<script>
export default {
    name:"compute",
    methods: {
        getRandom1: function(){
            return Math.random();
        }
    },
    data() {
        return {
            firstname:"Phatcharaphol",
            lastname:"suanprom"
        }
    },
    computed:{
        fullname: function(){
            return this.firstname+" "+this.lastname
        },
        getrandom: function(){
            return Math.random();
        }
    }
}
</script>

<style>

</style>