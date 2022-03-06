<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <!-- 该路由活跃不显示 -->
    <tab v-if="$route.meta.isnavbar"></tab>
  </div>
</template>

<script>
import Tab from "components/common/tabbar/Tab";
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "App",
  components: {
    Tab,
    NavBar,
  },
};
</script>

<style>
@import "assets/css/base.css";

/* #app{
  min-width: 320px;
  max-width: 540px;
  background-color: rgb(255, 255, 255);
} */
body {
  width: 100%;
  min-width: 320px;
  max-width: 540px;
  margin: 0 auto;
  /* background-color: rgb(255, 255, 255); */
}
</style>
