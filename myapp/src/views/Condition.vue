<template>
  <div id="Condition">
      <h1>Condition</h1>
      <div v-if="type === 'A'">
         I am A
      </div>
      <div v-else-if="type === 'B'">
         I am B
      </div>
      <div v-else-if="type === 'C'">
         I am C
      </div>
      <div v-else>
          Not A/B/C
      </div>
      <div v-if="isShow">
          Blink 1
      </div>
      <div v-else>
          Blink 2
      </div>
      <div v-show="isShow">
          Blink Vshow
      </div>
  </div>
</template>

<script>
export default {
    name: "Condition",
    mounted() {
        setInterval(()=>{
            this.isShow = !this.isShow
        },100)
    },
    data() {
        return {
            type: "A",
            isShow: true
        }
    },
}
</script>

<style>

</style>