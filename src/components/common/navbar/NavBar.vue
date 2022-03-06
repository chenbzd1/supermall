<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 48px;
  line-height: 48px;
  text-align: center;
  color: #fefefe;
  width: 100%;
  min-width: 320px;
  max-width: 540px;
  margin: 0 auto;
}
.center {
  flex: 1;
}
.left,
.right {
  width: 60px;
}
</style>