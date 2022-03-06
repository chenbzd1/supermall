<template>
  <div class="shopinfo" v-if="Object.keys(shopinfo).length !== 0">
    <div class="shopinfo-top">
      <img :src="shopinfo.logo" alt="" />
      <span>{{shopinfo.name}}</span>
    </div>
    <div class="shopinfo-middle">
      <div class="shopinfo-middle-left shopinfo-middle-item">
        <span>{{ shopinfo.csells }}</span>
        <span>{{ shopinfo.goods }}</span>
        <span>总销量</span>
        <span>全部宝贝</span>
      </div>
      <div class="shopinfo-middle-right shopinfo-middle-item">
        <table>
          <tr v-for="(item, index) in shopinfo.score" :key="index">
            <th>{{ item.name }}</th>
            <td :style="{ color: item.isBetter ? 'red' : 'green' }">
              {{ item.score }}
            </td>
            <td
              :style="{
                background: item.isBetter ? 'red' : 'green',
                color: '#fefefe',
              }"
            >
              {{ item.isBetter ? "高" : "低" }}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shopinfo-bottom">
      进店逛逛
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shopinfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.shopinfo {
  border-top: 2px solid rgb(197, 197, 197);
  border-bottom: 2px solid rgb(197, 197, 197);
  margin-top: 20px;
}
.shopinfo-top {
  height: 120px;
  line-height: 120px;

  overflow: hidden;
}

.shopinfo-top img {
  vertical-align: middle;
  /* display: inline-block; */
  /* margin-top: 50px; */
  width: 60px;
  height: 60px;
  margin: 0 10px;
  border-radius: 30px;
  border: 1px solid #c5c2c2;
}

.shopinfo-middle {
  display: flex;
  height: 60px;
  align-items:center
  
}

.shopinfo-middle-item {
  flex: 1;
}
.shopinfo-middle-left {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  border-right: 1px solid rgb(187, 186, 186);
}
.shopinfo-middle-left span {
  flex: 50%;
  margin: 5px 0px;
}
.shopinfo-middle-right {
  display: flex;
  justify-content: center;
  /* text-align: center; */
}

.shopinfo-middle-right table td {
 padding: 4px 4px ;
 /* display: inline-block; */
}

.shopinfo-bottom{
  margin: 26px auto 30px ;
  text-align: center;
  line-height: 34px;
  width: 160px;
  height: 34px;
  border-radius: 17px;
  background-color: rgb(235, 236, 236);
}
</style>