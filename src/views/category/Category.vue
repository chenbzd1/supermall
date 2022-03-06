<template>
  <div class="category">
    <h1>开发中.......</h1>
    {{ aa }}
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { formatDate } from "common/utils.js";
export default {
  components: {},
  data() {
    return {
      aa: "",
    };
  },
  mounted() {
    let date = null;
    setInterval(function () {
      date = new Date();
      this.aa = formatDate(date, "yyyy:MM:dd hh:mm:ss");
    }, 1000);
    console.log(this.aa);
  },
};
</script>

<style>
.category {
  color: red;

  /* overflow-y: scroll;x */
}
</style>