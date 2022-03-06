<template>
  <div class="detail-comtent" v-if="Object.keys(contentinfo).length !== 0">
    <div class="info-header">
      <div class="info-title">用户评价</div>
      <div class="info-more">更多</div>
      <div class="info-rotate"></div>
    </div>
    <div class="info-center">
      <div class="info-users">
        <img :src="contentinfo.user.avatar" alt="" />
        <span>{{ contentinfo.user.uname }}</span>
      </div>
      <div class="infocomten">{{ contentinfo.content }}</div>
      <div class="info-other">
        <span>{{ fordata }}</span>
        <span class="info-style">{{ contentinfo.style }}</span>
      </div>
    </div>
    <div class="info-img">
        <img :src="item" v-for="(item, index) in contentinfo.images" :key="index">
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils.js";
export default {
  props: {
    contentinfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    fordata() {
      const times = this.contentinfo.created;
      const data = new Date(times * 1000);
      return formatDate(data, "yyyy/MM/dd hh:mm:ss");
    },
  },
};
</script>

<style scoped>
.detail-comtent {
  /* background-color: aquamarine; */
  border-top: 2px solid rgb(146, 145, 145);
}

.info-header {
  line-height: 70px;
  height: 70px;
  /* background-color: aqua; */
  position: relative;
  border-bottom: 1px solid rgb(172, 166, 166);
}

.info-header .info-title {
  float: left;
}

.info-header .info-more {
  float: right;
  margin-right: 20px;
}

.info-header .info-rotate {
  /* content: ''; */
  /* display: block; */
  position: absolute;
  top: 41%;
  right: 10px;
  transform: translateY(-50%);
  /* transform-origin: top top; */
  transform: rotate(45deg);
  width: 12px;
  height: 12px;
  border-top: 3px solid rgb(146, 145, 145);
  border-right: 3px solid rgb(139, 139, 139);
}
.info-center {
  padding: 0 8px;
}

.info-users {
  /* height: 60px; */
  line-height: 80px;
}

.info-users img {
  margin-right: 20px;
  vertical-align: middle;
  width: 60px;
  height: 60px;
  border-radius: 30px;
}

.info-other {
  margin: 10px 0;
}

.info-style {
  margin-left: 30px;
}

.info-img img{
    width: 120px;
    height: auto;
} 
</style>