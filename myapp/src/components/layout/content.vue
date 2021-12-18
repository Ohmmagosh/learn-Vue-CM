<template>
  <div id="content" class="content-wrapper">
      <router-view class="box"></router-view>
    </div>
</template>

<script>
export default {
    name: "Content"
}
</script>

<style>
.content-wrapper{
  margin: 24px;
  padding: 24px;
  border:1px dashed gray;
}
</style>