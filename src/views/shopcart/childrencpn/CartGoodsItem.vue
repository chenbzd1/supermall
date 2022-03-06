<template>
  <div class="cart-goods-item">
    <div class="cart-checked">
      <cart-buotton
        @click.native="changechecked"
        :ischecked="goodsitem.checked"
      ></cart-buotton>
    </div>
    <div class="cart-image"><img :src="goodsitem.image" alt="" /></div>
    <div class="cart-title">
      <h3>{{ goodsitem.title }}</h3>
      <p>{{ goodsitem.desc }}</p>
      <div class="cart-price-count">
        <span class="price-left">{{ "¥" + goodsitem.price }}</span>
        <span class="count-right">{{ "x" + goodsitem.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Scroll from "../../../components/common/scroll/Scroll.vue";
import CartBuotton from "./CartBuotton.vue";
export default {
  components: { Scroll, CartBuotton },
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    changechecked() {
      this.$store.commit("changechecked", this.goodsitem.index);
    },
  },
  
};
</script>

<style scoped>
.cart-checked {
  display: flex;
  align-items: center;
}

.cart-goods-item {
  min-width: 320px;
  max-width: 540px;
  padding: 10px 0;
  display: flex;
  border-bottom: 1px solid rgb(168, 167, 167);
  background-color: rgb(255, 255, 255);
}
.cart-goods-item .cart-image {
  flex: 10%;
  overflow: hidden;
  border-radius: 10%;
}
.cart-image img {
  width: 100%;
  vertical-align: middle;
  height: 100%;
}

.cart-goods-item .cart-title {
  flex: 60%;
  padding: 0 10px;
  color: rgb(145, 142, 142);
  overflow: hidden;
}
.cart-goods-item .cart-title h3,
p {
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.cart-goods-item .cart-title p {
  padding: 24px 0;
}

.cart-price-count {
  height: 20px;
}

.cart-price-count .price-left {
  float: left;
  font-size: 20px;
  color: rgba(240, 47, 105, 0.849);
}
.cart-price-count .count-right {
  float: right;
  font-size: 20px;
  color: rgb(99, 98, 98);
}
</style>