<template>
  <div id="Loop">
      <h1>Loop</h1>
      <ul>
          <li v-for="(item, index) in ['Html', 'Css', 'Javascript']" :key="index">{{item}}</li>
      </ul>
      <hr>
      <ul>
          <li v-for="(item, index) in ['IOS', 'Andriod', 'Flutter', 'React']" :key="index">{{item}}</li>
      </ul>
      <hr>
      <ul>
          <li v-for="(item, index) in aData" :key="index">{{item}}</li>
      </ul>
      <hr>
      <!-- Dictstructuring -->
      <ul>
          <li v-for="(item, index) in oData" :key="index">{{item.title}} Price {{item.price}}</li>
      </ul>
      <hr>
      <ul>
          <li v-for="({title, price, index}) in oData" :key="index">{{title}} Price {{price}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: "Loop",
    data() {
        return {
            aData:['Vue', 'Nodejs', 'Flutter', 'React', 'Javascript'],
            oData:[
                {title:'Iphone',price: 40000},
                {title:'Sumsung',price: 29000},
                {title:'Oppo',price: 15000},
            ]
        }
    },
}
</script>

<style>
li{
    list-style-type: none;
}
</style>