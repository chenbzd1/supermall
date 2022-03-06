<template>
   <div class="swiper-slide">
        <slot></slot>    
        <!-- 原有实现基础上弄个插槽放到这就可以了 -->
   </div>
</template>

<script>

import {  swiperSlide } from "vue-awesome-swiper";
export default {
components:{
    swiperSlide
}
}
</script>

<style>

</style>