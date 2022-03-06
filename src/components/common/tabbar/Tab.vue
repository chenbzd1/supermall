<template>
  <div>
      <div class="tab">
<tab-item path="/home" activecolor="blue">
  <img slot="inactive" src="~assets/img/tabbar/home.svg" alt="">
  <img slot="active" src="~assets/img/tabbar/home_active.svg" alt="">
  <span slot="item-text">首页</span>
</tab-item>
<tab-item activecolor="blue"  path="/category">
<img slot="inactive" src="~assets/img/tabbar/category.svg" alt="">
  <img slot="active" src="~assets/img/tabbar/category_active.svg" alt="">
  <span slot="item-text">分类</span>
</tab-item>
<tab-item activecolor="blue" path="/shopcart"> 
<img slot="inactive" src="~assets/img/tabbar/shopcart.svg" alt="">
  <img slot="active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
  <span slot="item-text">购物车</span>
</tab-item>
<tab-item  activecolor="blue" path="/profile">
<img slot="inactive" src="~assets/img/tabbar/profile.svg" alt="">
  <img slot="active" src="~assets/img/tabbar/profile_active.svg" alt="">
  <span slot="item-text">个人</span>
</tab-item>
      </div>
  </div>
</template>

<script>
import TabItem from "components/common/tabbar/TabItem"
export default {
name:'Tab',
components:{
  TabItem,
}

}
</script>

<style>
.tab {
    display: flex;
    position: fixed;
    min-width: 320px;
    max-width: 540px;
    right: 0;
    left: 0;
    margin: 0 auto;
    height: 48px;
    bottom: 0;
    background-color: rgb(230, 235, 235);
    text-align: center;
    box-shadow: 0 -2px #c7c7c7;
    z-index: 999;
}
</style>