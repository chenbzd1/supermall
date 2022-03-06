<template>
  <!-- 类名写成组建该组建的驼峰 -->
  <div class="home-recommend">
    <div
      class="home-recommend-item"
      v-for="(value, index) in rcproducts.list"
      :key="index"
    >
      <a :href="value.link">
        <img :src="value.image" alt="" />
        <div>{{ value.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rcproducts: null,
  },
};
</script>

<style>
.home-recommend {
  width: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  text-align: center;
  flex-wrap: wrap;
}
.home-recommend-item {
  flex: 25%;
  margin-bottom: 10px;
  /* display: flex; */
}

.home-recommend-item img {
  margin: 10px 0;
  width: 44px;
  height: auto;
}
</style>