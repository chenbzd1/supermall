<template>
  <div class="bottom-nav-bar">
    <div class="bottom-left bottom-item">
      <div class="item-left">
        <span class="left-item service"></span><span>客服</span>
      </div>
      <div class="item-left">
        <span class="left-item shop"></span><span>店铺</span>
      </div>
      <div class="item-left">
        <span class="left-item cart"></span><span>收藏</span>
      </div>
    </div>
    <div class="bottom-right bottom-item">
      <span class="right-text-left" @click="addcart">加入购物车</span>
      <span class="right-text-right">购买</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addcart() {
      this.$emit("getcartinfo");
    },
  },
};
</script>

<style scoped>
.bottom-nav-bar {
  width: 100%;
  min-width: 320px;
  max-width: 540px;
  margin: 0 auto;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 58px;
  background-color: rgb(252, 252, 252);
  display: flex;
}
.bottom-nav-bar .bottom-item {
  flex: 1;
  /* height: 60px; */
}
.bottom-left {
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.bottom-left span:nth-child(1) {
  display: block;
  margin: 4px auto;
  background: url(~assets/img/detail/detail_bottom.png) no-repeat 0 0;
  background-size: 22px auto;
  width: 22px;
  height: 22px;
}

.bottom-right {
  background-color: aquamarine;
}
.bottom-left .item-left .service {
  background-position: 0 -52px;
}

.bottom-left .item-left .shop {
  background-position: 0 -98px;
}

.bottom-right {
  display: flex;
  text-align: center;
  line-height: 58px;
}

.bottom-right span:nth-child(n) {
  flex: 1;
}

.bottom-right span:nth-child(1) {
  background-color: yellow;
  font-size: 18px;
}

.bottom-right span:nth-child(2) {
  background-color: rgb(238, 97, 121);
  font-size: 18px;
  color: #f7f5f5;
}
</style>