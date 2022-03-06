<template>
  <div class="detail-item-info" v-if="Object.keys(iteminfo).length !== 0">
      <div class="rule-info">
          <table>
              <tr v-for="(item,index) in iteminfo.tables" :key="index">
                  <td v-for="(value,index) in item" :key="index">{{value}}</td>
              </tr>
          </table>
      </div>
      <div class="set-info">
          <table>
              <tr v-for="(item,index) in iteminfo.set" :key="index">
                  <!-- <td>{{item.key}}</td> -->
                  <td class="item-key">{{item.key}}</td>
                  <!-- /* 给这个都加一个类 */ -->
                  <td class="item-value">{{item.value}}</td>
              </tr>
          </table>
      </div>
  </div>
</template>

<script>
export default {
props: {
    iteminfo:{
        type:Object,
        default() {
            return {}
        }
    }
}
}
</script>

<style scoped>
.detail-item-info {
    margin-left: 26px;
}
.rule-info td {
     padding: 22px 40px 22px 0;
     border-bottom: 1px solid rgb(131, 130, 130);
}
.rule-info tr:nth-last-child(1) td {
    border: 0;
}

.rule-info table{
    border-collapse:collapse;
    border-top: 2px solid rgb(165, 163, 163);
    border-bottom: 2px solid rgb(165, 163, 163);
 /* border-bottom: 1px solid red; */
}

.set-info {
    margin-top: 10px    ;
}

.set-info table{ border-collapse:collapse;}

.set-info table td{
    padding: 10px 40px 10px 0; 
}

.item-key {
    width: 95px;
}

/* 给这个都加一个类 */
.item-value {
    color:rgb(240, 92, 116)
}
</style>