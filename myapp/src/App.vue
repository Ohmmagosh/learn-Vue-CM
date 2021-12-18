<template>
  <div>
    <h1>learn : v-model</h1>
    <headerr/>
    

    <router-view class="box"></router-view>
  </div>
</template>

<script>
import headerr from '@/components/layout/headerr.vue';

export default {
  name: "app",
  components:{
    headerr
  },
  
};
</script>

<style scoped>
.box {
  margin: 20px;
  padding: 20px;
}
</style>
