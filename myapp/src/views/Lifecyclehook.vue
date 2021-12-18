<template>
  <div id="Lifecyclehook">
      <h1>Lifecycle Hook</h1>
      <span>{{ counter }}</span>
      <br>
      <button @click="add">change</button>
  </div>
</template>

<script>
export default {
    name: "Lifecyclehook",
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        add(){
            this.counter++;
        }
    },
    beforeCreate() {
        console.log("before create");
    },
    created() {
        console.log("create");
    },
    mounted() {
        console.log("mount");
    },
    beforeUpdate() {
        console.log("update");
    },
    updated() {
        console.log("updated");
    },
    beforeUnmount() {
        console.log("beforedestroy");
    },
    unmounted() {
        console.log("unmount")
    },
}
</script>

<style>

</style>