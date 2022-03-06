<template>
  <div v-if="Object.keys(detailgoods).length !== 0" class="detail-goodsinfo">
    <div class="detail-item">
      <div class="start"></div>
      <div class="info-desc">
        {{ detailgoods.desc }}
      </div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailgoods.detailImage[0].key }}</div>
    <div
      class="info-img"
      v-for="(item, index) in detailgoods.detailImage[0].list"
      :key="index"
    >
      <img @load="loadoverimg" :src="item" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detailgoods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods:{
    loadoverimg () {
      this.$emit("imgloadover")
    }
  }
};
</script>

<style scoped>
.detail-goodsinfo {
  margin-top: 20px;
}

.start {
  margin-left: 20px;
  width: 120px;
  height: 4px;
  border-left: 4px solid black;
  border-bottom: 1px solid black;
}

.info-desc {
  padding: 20px 20px;
}

.end {
  margin-right: 20px;
  float: right;
  width: 120px;
  height: 4px;
  border-right: 4px solid black;
  border-bottom: 1px solid black;
}

.info-key {
  padding: 10px 20px;
}

.info-img img {
  width: 100%;
  height: auto;
}
</style>