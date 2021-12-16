<template>
    <div app="EventMethod">
        <h1>Event and Method</h1>
        <button v-on:click="clickMe">ClickMe</button>
        <button v-on:click="clickMe2('Welcome to Vuejs')">ClickMe2</button>
        <button @click="clickMe2('Ohmaaagoch')">ClickMe3</button>
        <h3>{{getTimestamp()}}</h3>
    </div>
</template>

<script>
export default {
    name:"EventMethod",
    mounted() {
        this.initial()
    },
    methods: {
        clickMe(){
            alert("HI")
        },
        clickMe2(message){
            alert(message)
        },
        getTimestamp(){
            return Date.now()
        },
        initial(){
            console.log("Initialization");
        },
    },
}
</script>

<style>

</style>