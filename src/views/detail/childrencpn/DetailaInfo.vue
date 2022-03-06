<template>
  <div  class="detail-info" v-if="Object.keys(goods).length !== 0" >
      <div class="title"><p>{{goods.title}}</p></div>
      <div class="price">
          <span>{{goods.nprice}}</span>
          <span v-if="goods.oprice !== ''">{{goods.oprice}}</span>
          <span :style="{background:goods.discountbg}" v-if="goods.discount !== ''">{{goods.discount}}</span>
      </div>
      <div class="columns">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[1].name}}</span>
      </div>
      <div class="services">
         <div v-for="index in goods.services.length - 2" :key="index">
             <img :src="goods.services[index + 1].icon" alt="">
             <span>{{goods.services[index + 1].name}}</span>
         </div>
      </div>


  </div>
</template>

<script>
export default {
props:{
    goods:{
        type:Object,
        default(){
            return {}
        }

    }
},


}
</script>

<style scoped>
.detail-info {
    padding: 12px 10px 0;
}
.price {
    margin-top: 10px;
}
.price span {
    margin: 0 6px;
}
.price span:nth-child(1) {
    color: rgb(224, 61, 151);
    font-size: 26px;
}
.price span:nth-child(2) {
    text-decoration: line-through;
}
.price span:nth-child(3) {
display: inline-block;
font-size: 14px;
/* padding:8px 4px  ; */
padding: 4px 6px;
color: rgb(231, 230, 230);
border-radius: 14px;
margin-bottom: 1px;
overflow: hidden;
/* box-sizing: border-box; */
}

.columns {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

.services {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    /* text-align: center  ; */
     border-top: 1px solid #dfdede;
     padding: 6px 0;
}
.services img {
    width: 20px;
    height: 20px;
    vertical-align:bottom;
   
}
.services>div {
    flex: 50%;
    margin-top: 4px;
}
</style>