<template>
  <div class="bottom-nav-bar">
    <div class="button"><cart-buotton @click.native="isselect" :ischecked="istotal"></cart-buotton></div>
    <div class="change">全选</div>
    <div class="title">合计 : {{ "¥" + titleprice.toFixed(2) }} </div>
    <div class="settle">去结算( {{ getgoodscount }} )</div>
  </div>
</template>

<script>
import CartBuotton from "./CartBuotton.vue";
export default {
  components: { CartBuotton },
  computed: {
    titleprice() {
      return this.$store.state.cartgoods
        .filter((item) => {
          return item.checked;
        })
        .reduce((prevalue, value) => {
          return value.price * value.count + prevalue;
        }, 0);
    },
    getgoodscount() {
      return this.$store.state.cartgoods.filter((item) => {
        return item.checked;
      }).length;
    },
    istotal() {
        if(this.$store.state.cartgoods.length === 0) {
            return false
        }
      return !this.$store.state.cartgoods.find((item) => {
        //   能找到说明不能全选
     return !item.checked;
      });
    },
  },
  methods:{
      isselect() {
        //第一个参数是函数名///第二个是参数
          this.$store.commit("isselect",this.istotal)
      }
  }
};
</script>

<style scoped>
.bottom-nav-bar {
  display: flex;
  align-items: center;
  position: relative;
  height: 50px;
  background-color: rgb(211, 206, 206);
}
.button {
  margin: 0 8px;
}
.change {
  margin: 0 8px;
}
.title {
  margin: 0 10px;
}
.settle {
  position: absolute;
  width: 120px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  background-color: rgb(241, 63, 9);
  color: rgb(255, 255, 255);
  right: 0;
}
</style>>
