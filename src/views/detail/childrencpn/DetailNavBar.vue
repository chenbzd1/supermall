<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div class="back" slot="left" @click="btnback">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div class="title" slot="center">
        <div
          v-for="(item, index) in title"
          :key="index"
          class="title-item"
          :class="{ current: index === titleindex }"
          @click="titleclick(index)"
        >
          <!-- 动态属性::::::: -->
          <!-- 没加:也可以props但是默认不是变量 -->
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
export default {
  components: { NavBar },

  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      titleindex: 0,
    };
  },
  methods: {
    btnback() {
      this.$router.back();
    },
    titleclick(index) {
      this.titleindex = index;
      this.$emit("btnscroll",index)

    },
  },
};
</script>

<style scoped>
.detail-nav-bar {
  border-bottom: 2px solid rgb(204, 202, 202);
  background-color: rgb(255, 255, 255);
  min-width: 320px;
  max-width: 540px;
}
.nav-bar img {
  margin-top: 12px;
}
.title {
  color: rgb(137, 138, 138);
  display: flex;
  font-size: 14px;
  text-align: center;
  /* justify-content: space-around; */
}
.title-item {
  flex: 1;
}
.current {
  color: red;
}
</style>