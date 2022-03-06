<template>
  <div class="toast" v-if="isshow">
    <div class="toast-item"> {{ toasttext }}</div>
  </div>
</template>

<script>
export default {
  props: {
    isshow: {
      type: Boolean,
      default(){
          return false
      }
    },
    toasttext: {
      type: String,
    },
  },
};
</script>

<style>
.toast {
  width: 200px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  color: rgb(255, 255, 255);
  background-color: rgb(109, 109, 109);
}
</style>