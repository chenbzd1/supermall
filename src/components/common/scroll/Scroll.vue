<template>
  <div class="wrapper" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 需要安装两个插件,并引入,再use安装,再使用
import BScroll from "better-scroll";
import ObserveDOM from "@better-scroll/observe-dom";

export default {
  data() {
    return {
      bscroll: null,
      bscrollya: 0,
    };
  },
  props: {
    isscroll: {
      type: Number,
      default() {
        return 0;
      },
    },
    isload: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  methods: {
    scrollto() {
      this.bscroll.scrollTo(0, 0, 200);
    },
    refresh() {
      this.bscroll && this.bscroll.refresh();
      // console.log("-----------");
    },
  },

  // 钩子函数
  mounted() {
    // 想要触发但是没有触发条件,就写在这里,调用回调等待被调用

    BScroll.use(ObserveDOM);

    // document.querySelector('.wrapper')
    this.bscroll = new BScroll(this.$refs.scroll, {
      // 不一定要实时监听所以写成这样
      probeType: this.isscroll,
      click: true,
      pullUpLoad: this.isload,
      // 此插件重新计算高度,图片没加载完
      observeDOM: true,
      
    });

    this.bscroll.on("scroll", (position) => {
      //实时传输位置
      this.$emit("btnscroll", position);
      this.bscrollya = position.y;
      
    });

    this.bscroll.on("pullingUp", () => {
      // 发送下拉到底部事件
      this.$emit("pullingup");
      // this.bscroll.finishPullUp()
      // 此次数据加载完,才能完成下一次加载是最合适的,回调
    });
  },
};
</script>

<style>
</style>