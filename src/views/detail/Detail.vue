<template>
  <div class="detail">
    <detail-nav-bar
      ref="detailnavbar"
      @btnscroll="scrolltobe"
      class="detail-nav-bar"
    >
    </detail-nav-bar>

    <scroll @btnscroll="getscrolly" ref="scroll" class="ascroll" :isload="true">
      <swiper class="swiper" v-if="imgs.length > 0">
        <swiperitem
          class="swiper-item"
          v-for="(item, index) in imgs"
          :key="index"
        >
          <img :src="item" alt="" />
        </swiperitem>
      </swiper>
      <detaila-info :goods="goods"></detaila-info>
      <detailshop-info :shopinfo="shopinfo"></detailshop-info>
      <detail-goods-info
        @imgloadover="loadinfo"
        :detailgoods="detailgoods"
      ></detail-goods-info>
      <detailiteminfo ref="iteminfo" :iteminfo="iteminfo"></detailiteminfo>
      <detail-content ref="comment" :contentinfo="comtent"></detail-content>
      <goodslist ref="recommend" :goods="recommend"></goodslist>
    </scroll>
    <detail-bottom-nav-bar @getcartinfo="getcartinfo"></detail-bottom-nav-bar>
    <back-to @click.native="backto" v-show="isscrolltop"></back-to>
    <toast :isshow="isshows" :toasttext="toasttext"></toast>
  </div>
</template>

<script>
import DetailNavBar from "./childrencpn/DetailNavBar.vue";
// 导入函数变量加{}不同与default要名字也一样
import {
  getdetaildata,
  Goods,
  ShopInfo,
  ItemInfo,
  getrecommend,
} from "network/detail.js";
import { debounce } from "common/debounce.js";
import MySwiper from "../../components/common/myswiper/MySwiper.vue";
import Swiper from "../../components/common/swipers/swiper.vue";
import Swiperitem from "../../components/common/swipers/swiperitem.vue";
import DetailaInfo from "./childrencpn/DetailaInfo.vue";
import DetailshopInfo from "./childrencpn/DetailshopInfo.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import DetailGoodsInfo from "./childrencpn/DetailGoodsInfo.vue";
import Detailiteminfo from "./childrencpn/Detailiteminfo.vue";
import DetailContent from "./childrencpn/DetailContent.vue";
import Goodslist from "../../components/content/goods/Goodslist.vue";
import DetailBottomNavBar from "./childrencpn/DetailBottomNavBar.vue";
import BackTo from "../../components/common/backto/BackTo.vue";
import Toast from "../../components/common/Toast.vue/Toast.vue";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    MySwiper,
    Swiper,
    Swiperitem,
    DetailaInfo,
    DetailshopInfo,
    Scroll,
    DetailGoodsInfo,
    Detailiteminfo,
    DetailContent,
    Goodslist,
    DetailBottomNavBar,
    BackTo,
    Toast,
  },
  data() {
    return {
      imgs: [],
      goods: {},
      shopinfo: {},
      detailgoods: {},
      iteminfo: {},
      comtent: {},
      recommend: [],
      scrollinfo: [],
      debounces: null,
      scrollindex: null,
      isscrolltop: false,
      goodsinfo: null,
      isshows: false,
      toasttext: null,
    };
  },
  methods: {
    scrolltobe(index) {
      // 很快跳到对应的标题,就不会出现滚动出现多个标题变色问题
      this.$refs.scroll.bscroll.scrollTo(0, -this.scrollinfo[index] + 48, 10);
    },
    getscrolly(position) {
      //别的地方用不到的变量可以直接写在这里
      const scrolly = -position.y + 48;
      this.isscrolltop = -position.y > 1000;

      // 这里一定能拿到this.scrollinfo吗?这个是在catered那里拿,事件是在dom挂载才能触发

      // 为了不多次触发这里可以找不变,然后做比较,这里可以看出i在一定区间是不变的,可以先弄个东西缓存,然后做比较
      for (let i = 0; i < this.scrollinfo.length; i++) {
        // 滚的够快,循环还没来的及生成不会出现颜色闪烁
        if (
          i !== this.scrollindex &&
          ((0 < i < this.scrollinfo.length - 1 &&
            scrolly >= this.scrollinfo[i] &&
            scrolly < this.scrollinfo[i + 1]) ||
            (i == this.scrollinfo.length - 1 && scrolly >= this.scrollinfo[i]))
        ) {
          this.scrollindex = i;
          this.$refs.detailnavbar.titleindex = i;
          console.log(i);
        }
      }
    },
    loadinfo() {
      this.debounces();

      // this.$refs.scroll.bscroll.refresh()
    },
    // 回到顶部
    backto() {
      this.$refs.scroll.scrollto();
    },
    //  数据都在这,所以在这建设对象模型比较合适.然后把我们需要添加到购物车改商品添加到一个对象模型(因为有各种name,所以放到对象存储合适)那里,
    //   然后每个需要添加到购物车的都这样做,然后把这多个对象放到一个数组,然后传到购物车组件,再根据这个数据
    //   生成页面.但是如何把这个对象传到购物车组件呢?这就利用到vuex,当然在实际的开发中,这个数据应该是传输到服务器的数据库,保存起来,而不是放在浏览器,但是
    //   确实是要生成这么一个个对象模型放到数组
    // 这个detail展示的就是这张图片的信息
    getcartinfo() {
      const obj = {};
      if (this.goodsinfo) {
        // iid可以作为这个添加到购物车的唯一身份一定要传过去
        obj.iid = this.goodsinfo.itemInfo.iid;
        obj.image = this.goodsinfo.itemInfo.topImages[0];
        obj.price = this.goodsinfo.itemInfo.lowPrice;
        obj.title = this.goodsinfo.itemInfo.title;
        obj.desc = this.goodsinfo.itemInfo.desc;
        // 默认在购物车那是被选中的,给它这么一个属性决定是否显示,一定会有那个一个布尔值,如歌不是服务器给的话
        // obj.checked = true;
        // 应该有一个买了多少件的属性,也需要我们去添加,添加同一个东西多件时,这个加1就行
        // obj.count = 1;
        this.$store.dispatch("addCart", obj).then((res) => {
          this.isshows = true;
          this.toasttext = res;
          
          
          timer = setTimeout(() => {
            this.isshows = false;
            
          }, 2000);
          this.$toast(res,2000)
        });
      }
    },
  },
  mounted() {},
  // updated() {
  // this.scrollinfo = [0,]
  // console.log(this.$refs.comment);
  //要是传完数据就拿数值的时候,不行,传数据也要时间
  // 页面刷新肯定就有,刷新几次
  // this.scrollinfo.push(this.$refs.comment.$el.offsetTop)
  // this.scrollinfo.push(this.$refs.iteminfo.$el.offsetTop)
  // this.scrollinfo.push(this.$refs.recommend.$el.offsetTop)
  // console.log(this.scrollinfo);
  // },
  created() {
    this.debounces = debounce(() => {
      this.scrollinfo = [48];
      if (this.$refs.iteminfo) {
        this.scrollinfo.push(this.$refs.iteminfo.$el.offsetTop);
        this.scrollinfo.push(this.$refs.comment.$el.offsetTop);
        this.scrollinfo.push(this.$refs.recommend.$el.offsetTop);
      }
      //要是传完数据就拿数值的时候,不行,传数据也要时间
      // 页面刷新肯定就有,刷新几次
    }, 200);
    // 组件重新创建时请求,而不是像nav-bar那种点击请求不同数据
    const data = this.$route.query.iid;
    getdetaildata(data).then((res) => {
      this.goodsinfo = res.data.result;

      //1.获得顶部图片信息
      this.imgs = res.data.result.itemInfo.topImages;
      const result = res.data.result;
      // const columns = result.columns;
      // const itemInfo = result.itemInfo;
      // const services = result.shopInfo.services;
      // 2.获得商品信息
      this.goods = new Goods(
        result.columns,
        result.itemInfo,
        result.shopInfo.services
      );
      this.shopinfo = new ShopInfo(result.shopInfo);
      this.detailgoods = result.detailInfo;
      const itemparams = result.itemParams;
      this.iteminfo = new ItemInfo(itemparams.info, itemparams.rule);
      // console.log(this.iteminfo);
      // 3.获得评论信息
      if (result.rate.list) {
        this.comtent = result.rate.list[0];
      }

      // console.log(this.comtent);

      //2222. 页面渲染完执行这个函数
      // this.$nextTick(() => {
      // this.scrollinfo = [48];
      // console.log(this.$refs.comment);
      //要是传完数据就拿数值的时候,不行,传数据也要时间
      // 页面刷新肯定就有,刷新几次
      //   this.scrollinfo.push(this.$refs.comment.$el.offsetTop);
      //   this.scrollinfo.push(this.$refs.iteminfo.$el.offsetTop);
      //   this.scrollinfo.push(this.$refs.recommend.$el.offsetTop);
      //   console.log(this.scrollinfo);
      // });
    });
    getrecommend().then((res) => {
      this.recommend = res.data.data.list;
    });
  },
};
</script>

<style scoped>
.detail {
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  /* height: 100vh; */
}
.swiper {
  /* height: 300px; */
  overflow: hidden;
}
.swiper-item {
  /* 相对于item定位 应该可能,不一定*/
  height: 300px;
}
img {
  width: 100%;
  height: auto;
  vertical-align: middle;
}

.detail-nav-bar {
  position: fixed;
  width: 100%;
  z-index: 999;
}

.ascroll {
  margin-top: 48px;
  /* position: relative; */
  /* top: 48px; */
  /* bottom: 0px; */
  height: calc(100vh - 48px - 58px);
}
</style>