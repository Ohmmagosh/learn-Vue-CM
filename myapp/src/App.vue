<template>
  <div>
    <h1>learn : v-model</h1>
    <Header/>
    <Content/>
    <Footer @onClock="onClock" title="Copyright 2021 by Ohmaaagoc Ltd." color="black"/>
    <div class="clock">{{time}}</div>
  </div>
</template>

<script>
import Header from '@/components/layout/headerr.vue';
import Footer from './components/layout/footer.vue';
import Content from './components/layout/content.vue';
import moment from "moment";
export default {
  name: "app",
  methods: {
    onClock(value){
      this.time = moment(value).format('MM/DD/YYYY hh:mm:ss')
    }
  },
  data() {
    return {
      time: ""
    }
  },
  components:{
    Header,
    Footer,
    Content
  },
  
};
</script>

<style scoped>
.box {
  margin: 20px;
  padding: 20px;
}
.clock{
  font-size: 12px;
}

</style>
