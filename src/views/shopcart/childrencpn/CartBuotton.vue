<template>
  <div class="cart-button" :class="{ current: ischecked }">
    <img v-if="ischecked" src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
   props :{
       ischecked:{
           type:Boolean,
           default() {
               true
           }
       }
   },
   
};
</script>
<style scoped>
.cart-button {
  width: 24px;
  height: 24px;
  /* flex布局垂直居中 */
  /* position: relative; */
  /* top: 50%; */
  /* transform: translateY(-50%); */
  border-radius: 12px;
  border: 1px solid rgb(148, 146, 146);
  margin: 0 4px;
}

.current {
  background-color: red;
}
</style>