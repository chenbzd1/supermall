<template>
  <div class="home">
    <nav-bar class="nav-bar">
      <span slot="center">购物街</span>
    </nav-bar>
    <tab-control
      class="rat"
      ref="tabcontrol2"
      @btnclickx="btnclicks"
      :titles="['流行', '新款', '精选']"
      v-show="isshow"
    ></tab-control>
    <scroll
      @btnscroll="isbackscroll"
      ref="scroll"
      class="scroll"
      :isscroll="3"
      :isload="true"
      @pullingup="loadmore"
    >
      <!-- 轮播图 -->
      <!-- <my-swiper
        @loadover="btntabtop"
        class="swiper"
        :imgsrc="banners"
      ></my-swiper> -->
     <div class="reder" v-if="reder"> 
        <swiper :isbutton="true" class="swiper" v-if="banners.length > 0">
        <swiperitem v-for="(value, index) in banners" :key="index">
          <img @load="btntabtop" :src="value.image" alt="" />
        </swiperitem>
      </swiper>
     </div>
      <home-recommend :rcproducts="recommend"></home-recommend>
      <featrueview></featrueview>
      <!-- 此处传参不要带括号@btnclickx="btnclicks()" -->
      <tab-control
        ref="tabcontrol1"
        @btnclickx="btnclicks"
        :titles="['流行', '新款', '精选']"
      ></tab-control>
      <goodslist :goods="goods[controlindex].list" />
    </scroll>
    <!-- 里面监听还是外面监听好 -->
    <!-- 循环组件还是在组件内部监听好 -->
    <!-- 组件也可以加类属性,但是最总在哪加由分析情况决定,如flex -->

    <!-- 方法1在组件内部监听,然后点击时向夫组件发射一个自定义时间,然后组件这里监听,然后访问scroll里面的方法 -->
    <back-to @click.native="backto" v-show="isscrolltop"></back-to>
  </div>
</template>

<script>
//网路请求
import { gethomemultidatem, gethomemultidatesm } from "network/home.js";

// 轮播图
import MySwiper from "../../components/common/myswiper/MySwiper.vue";
// 导航栏
import NavBar from "../../components/common/navbar/NavBar.vue";
import HomeRecommend from "./childrencpn/HomeRecommend.vue";
import featrueview from "./childrencpn/featrueview";
// 商品控制栏
import TabControl from "./childrencpn/TabControl.vue";
// 首页商品展示数据
import Goodslist from "../../components/content/goods/Goodslist.vue";
// 导入滚动插件
import Scroll from "components/common/scroll/Scroll.vue";
import BackTo from "../../components/common/backto/BackTo.vue";
import Swiper from "../../components/common/swipers/swiper.vue";
import Swiperitem from "../../components/common/swipers/swiperitem.vue";
// import Scroll from '../../components/common/Scroll.vue';

export default {
  components: {
    NavBar,
    MySwiper,
    HomeRecommend,
    featrueview,
    TabControl,
    Goodslist,
    Scroll,
    BackTo,
    Swiper,
    Swiperitem,
    // Scroll
  },
  data() {
    return {
      banners: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      //  autoplay: {
      //     delay: 2000,
      //     stopOnLastSlide: false,
      //     disableOnInteraction: false,

      //     onSlideChangeEnd: function (swiper) {
      //       swiper.update();
      //       mySwiper.startAutoplay();
      //       mySwiper.reLoop();
      //     },
      //   }
      // ,
      controlindex: "pop",
      isscrolltop: false,
      tabtop: "ddddd",
      isshow: false,
      positionp:0,
      reder:true
    };
  },
  methods: {
    debounce(fuc, delay) {
      let timer = null;
      return function (...ars) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          fuc.apply(this, ars);
          //  console.log(123242342);
        }, delay);
      };
      
    },
    btntabtop() {
      this.tabtop = this.$refs.tabcontrol1.$el.offsetTop;
      // console.log(this.tabtop);
      // console.log("ok");
    },
    // 返回顶部事件
    backto() {
      this.$refs.scroll.scrollto();
    },
    gethomemultidate() {
      gethomemultidatem().then((res) => {
        this.banners = res.data.data.banner.list;

        //    和返回数据的命名一样即可
        this.recommend = res.data.data.recommend;
      });
    },

    isbackscroll(position) {
      // console.log(position.y);
      // 判断位置返回布尔值,决定是否隐藏
      this.isscrolltop = -position.y > 1000;

      this.isshow = -(position.y -48) > this.tabtop;
      this.positiony = position.y
    },

    // 当拉到底时触发,监听到底是子组件发出的自定义事件
    loadmore() {
      // this.controlindex耦合度
      this.gethomemultidates(this.controlindex);

      //重新测量可滚高度
      // this.$refs.scroll.bscroll.refresh();
    },

    gethomemultidates(type) {
      //  [type]
      const page = this.goods[type].page + 1; //未改变原来数据的page,直接传变量会简洁点
      gethomemultidatesm(type, page).then((res) => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        // 此次数据加载完,才能完成下一次加载是最合适的,回调
      setTimeout(() => {
          this.$refs.scroll.bscroll.finishPullUp();
      },3000)
      });
    },
    // 先把数据都取过来,再进行index绝对传哪个数据
    btnclicks(res) {
      // console.log(res);
      //  console.log(1111108428);
      // 这个index肯定是唯一的,
      // 两个tabcontrol都有各自作用域
      this.$refs.tabcontrol1.currentindex = res;
      this.$refs.tabcontrol2.currentindex = res;
      switch (res) {
        case 0:
          this.controlindex = "pop";
          break;
        case 1:
          this.controlindex = "new";
          break;
        case 2:
          this.controlindex = "sell";
          break;
      }
    },
  },

  // 组件一创建就调用数据
  created() {
    this.gethomemultidate();
    console.log("home创建");
    this.gethomemultidates("pop");
    this.gethomemultidates("new");
    this.gethomemultidates("sell");
  },

  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 500);

    this.$bus.$on("imgload", () => {
      // this.$refs.scroll.refresh();
      //  console.log(this.$refs.scroll.refresh);
      refresh();
      // console.log(111);
    });
  },
  destroyed() {
    console.log("销毁");
  },

  // 必须包裹了keep-alive,才有活跃不活跃,不然直接销毁了就没有这概念了
  activated() {
   this.reder = true
      if(this.positionp !== 0) {
        // this.$refs.scroll.bscroll.scrollTo(0,this.positionp,0)
       
      }
      console.log(this.positionp);
       setTimeout(() => {
      this.$refs.scroll.bscroll.scrollTo(0,this.positionp,0)
    }, 0);
   
  },
  deactivated() {
    this.reder = false 
    console.log("不活跃");
   this.positionp = this.$refs.scroll.bscrollya;
    // console.log(this.positionp);
 
  },
};
</script>

<style scoped>
/* .home {
   background-color: rgb(255, 255, 255);
} */
.home {
  overflow: hidden;
  position: relative;
}
.swiper img {
  width: 100%;
  height: auto;
  vertical-align: middle;
}
.scroll {
  /* relative的bottom和right1无效 */

  /* 第一种方法 */
  /* margin-top: 44px; */

  /* 一定要有个高度 */
  height: calc(100vh - 96px);

  /* 第二种方法 */
  /* position: absolute;
  right: 0;
  left: 0;
  top: 44px;
  bottom: 48px; */
}

.nav-bar {
  position: relative;
  z-index: 999;
  background-color: rgb(231, 96, 148);
}
.rat {
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  min-width: 320px;
  max-width: 540px;
  margin: 0 auto;
}

/* .swiper {
  margin-top: 44px;
} */
</style>

