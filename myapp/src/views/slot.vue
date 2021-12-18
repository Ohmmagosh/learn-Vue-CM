<template>
  <div id="slot">
       <Clock>
           <span style="color:red;">เวลาปัจจุบัน</span>
       </Clock>
       <Clock>
           <span style="color:crimson;">เวลาปัจจุบัน</span>
       </Clock>
       <Clock>
           <span style="color:gray;">เวลาปัจจุบัน</span>
       </Clock>
       <!-- Using fallback (defualt) content -->
       <Clock/>
       <Clock>
           <span style="color:green;">เวลาปัจจุบัน</span>
        <template v-slot:header>
            <h1>Header</h1>
        </template>

        <template v-slot:footer>
            <h3>Footer</h3>
        </template>
       </Clock>
  </div>
</template>

<script>
import Clock from "@/components/helpers/Clock.vue"

export default {
    name: "slot",
    components: {
        Clock,
    }
}
</script>

<style>

</style>