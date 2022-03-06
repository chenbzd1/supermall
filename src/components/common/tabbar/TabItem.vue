<template>
  <div class="tab-item" @click="add" >
<!-- <div> <slot name="active"></slot> </div> -->
<!-- <div> <slot name="inactive"></slot> </div> -->
<div v-if="isactive"><slot  name="inactive"></slot></div>
<div v-else><slot name="active"></slot></div>
<div :style="isactivecolor"><slot name="item-text"></slot></div>

  </div>
</template>

<script>
export default {
props:{
  path:'',
  activecolor:{
    default:'red'
  }
}
  ,
data(){
  return {
    // isactive:true 
  }
},
computed:{
  isactive(){
    return this.$route.path.indexOf(this.path) === -1
    
  }, 
  isactivecolor(){
    return !this.isactive? {color:this.activecolor} : {}
  }
}
,
methods:{
  add(){
    console.log(this.isactive);
    this.$router.push(this.path)
  }
}
}
</script>

<style>
.tab-item {
    padding-top: 4px;
    flex: 1;
    font-size: 12px;
}
 img {
     width: 22px;
     height: 26px;
 }
</style>