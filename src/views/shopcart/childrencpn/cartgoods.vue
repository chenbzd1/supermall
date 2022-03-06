<template>
  <div class="cargoods">
    <!-- 数组包对象都是这样,一个无用组件/父组件包揽一个子组件 -->
    <scroll ref="scroll" class="scroll" :isload="true">
      <cart-goods-item 
        v-for="(item, index) in cartgoods"
        :key="index"
        :goodsitem="item"
      ></cart-goods-item>
    </scroll>
    
  </div>
</template>

<script>
import Scroll from "../../../components/common/scroll/Scroll.vue";
import CartGoodsItem from "./CartGoodsItem.vue";
export default {
  components: { CartGoodsItem, Scroll },
  props: {
    cartgoods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  
  activated() {
    //这种后来添加数据生成的内容,没有重新刷新高度
    this.$refs.scroll.bscroll.refresh();
  },

  // this.$nextTick(() => {
  //   this.$refs.scroll.bscroll.refresh()
  // })
};
</script>

<style scoped>
.cargoods {
  height: calc(100vh - 146px);
}
.scroll {
  height: 100%;
  overflow: hidden;
}
</style>