<template>
  <div class="recommendPage">
    <swiper :options="swiperOption" ref="mySwiper" v-if="imgsrc.length > 0">
      <swiper-slide v-for="(value, index) in imgsrc" :key="index">
        <img @load="loadover" :src="value.image" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
 
<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";

// import { swiper,swiperSlide, Navigation, Pagination, Autoplay } from "swiper";

// import "swiper/swiper-bundle.css";

export default {
  components: {
    swiper,
    swiperSlide,
  },
  methods: {
    loadover() {
      if (!this.isload) {
        this.$emit("loadover");
        this.isload = true;
      }
    },
  },
  props: {
    imgsrc: "",
  },
  data() {
    return {
      isload: false,

      swiperOption: {
        loop: true,

        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false,

          onSlideChangeEnd: function (swiper) {
            swiper.update();
            mySwiper.startAutoplay();
            mySwiper.reLoop();
          },
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
};
</script>
<style scoped >
.recommendPage .swiper-container {
  position: relative;

  width: 100%;
  /* height: 400px; */
  background: pink;
}

.recommendPage {
  /* padding-top: 48px; */
}
img {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.recommendPage .swiper-container .swiper-slide {
  width: 100%;
  border: 0;
  /* background: yellowgreen; */
  color: #000;
  font-size: 16px;
  text-align: center;
}
</style>
 

