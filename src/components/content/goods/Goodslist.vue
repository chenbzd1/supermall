<template>
  <div class="goodslist">
      <!-- 不但可以插槽,也可以便利传数据 -->
      <goodslist-item class="goodslist-item" v-for="(item,index) in goods" :key="index" :listitem="item" />
    
  </div>
</template>

<script>
import GoodslistItem from './GoodslistItem.vue'
export default {
  components: { GoodslistItem },
  props:{
      goods:{
          type:Array,
          default(){
              return []
          }
      }
  }
}
</script>

<style>
.goodslist {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.goodslist-item {
   /* flex: 40%; */
/* 不写组件 */
   /* justify-content: space-around; */
}
</style>