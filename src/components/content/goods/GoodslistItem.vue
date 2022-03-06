<template>
  <div class="" @click="getdetail">
    <img :src="getimages" @load="imgload" :title="listitem.title" />
    <div class="goods-info">
      <p>{{ listitem.title }}</p>
      <span class="collect">{{ listitem.price }}</span>
      <span>{{ listitem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    imgload() {
      this.$bus.$emit("imgload");
    },
    getdetail() {
      this.$router.push(
        // 传参数一,query方式
        // 路由跳转的时候传递一些参数,通过参数生成页面
        {
          path: "/detail",
          query: {
            iid: this.listitem.iid,
          },
        }

        // 传参数二动态路由,/detail/:id
        //  "/detail/" + this.listitem.iid
      );
    },
  },
  props: {
    listitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    getimages() {
      return   this.listitem.image || this.listitem.show.img
    },
  },
};
</script>

<style>
.goodslist-item {
  position: relative;

  /* ----------------- */
  padding-bottom: 40px;
  background-color: rgb(255, 255, 255);
  width: 48%;
  /* 它的父亲应该是用它的那个组建 */
}
.goods-info {
  margin: 0 8px;
  position: absolute;
  font-size: 12px;
  left: 0;
  right: 0;
  bottom: 5px;
  text-align: center;
}
.goods-info p {
  margin: 0 auto;
  /* width: 200px; */
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 5px;
}
.goodslist-item img {
  width: 100%;
  height: auto;
}
.collect {
  position: relative;
  padding-right: 14px;
  color: red;
}
.collect::after {
  content: "";
  position: absolute;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") no-repeat 0 0/14px 14px;
}
</style>