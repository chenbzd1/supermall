<template>
  <div class="shop-cart">
    <nav-bar class="shopcart-nav-bar"
      ><div slot="center">
        购物车( {{ $store.state.cartgoods.length }} )
      </div></nav-bar
    >
   <cartgoods :cartgoods="getcartgoods"></cartgoods>
  
     <cart-bottom-navbar class="bottom-navbar" ></cart-bottom-navbar>
   </div>
 
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import Scroll from '../../components/common/scroll/Scroll.vue';
import CartBottomNavbar from './childrencpn/CartBottomNavbar.vue';
import Cartgoods from "./childrencpn/cartgoods.vue";
export default {
  components: { NavBar, Cartgoods, Scroll, CartBottomNavbar },
  computed: {
    getcartgoods() {
     return this.$store.state.cartgoods;
    },
  },
  
};
</script>

<style>
.scroll {
  height: calc(100vh - 148px);
  overflow: hidden;
}

.shopcart-nav-bar {
  background-color: rgb(255, 129, 150);
  font-size: 18px;
}
.shop-cart {
   min-width: 320px;
    max-width: 540px;
  color: red;
}
.bottom-navbar {
  height: 50px;
  background-color: saddlebrown;
}
</style>