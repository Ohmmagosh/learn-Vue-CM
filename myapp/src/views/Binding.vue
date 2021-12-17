<template>
  <div app="Biding">
    <h1>Binding</h1>
    <img v-bind:src="imageUrl" alt="" />
    <div :class="[false ? error : '', important]">Ohmaaagoch style</div>
    <div :style="{ color, fontSize }">Ohmaaagoch style</div>
    <div :style="isActive ? styleObj : ''">Ohmaaagoch style Obj</div>
    <button @click="isActive = !isActive">isActive</button>
  </div>
</template>

<script>
export default {
  name: "Binding",
  data() {
    return {
      imageUrl:
        "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      error: "error_class",
      important: "important",
      color: "green",
      fontSize: "60px",
      styleObj: {
        backgroundColor: "crimson",
        color: "white",
        fontSize: "80px",
      },
      isActive: false,
    };
  },
};
</script>

<style>
.error_class {
  background-color: red;
  color: white;
}
.important {
  font-weight: 900;
  font-size: 20px;
}
</style>
