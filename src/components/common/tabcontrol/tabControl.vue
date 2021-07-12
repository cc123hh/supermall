<template>
  <div class="tab-control-wrap">
      <div :class="{active:currectItem === index}" @click="clickItem(index)" class="tab-control-item" v-for="(title,index) in titles" :key="'tabControl'+index">
          <span>{{ title }}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:"tabControl",
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currectItem:0
        }
    },
    methods:{
        clickItem(index){
            this.currectItem = index
        }
    }
}
</script>

<style scoped>
.active{
    color: red;
    border-bottom: 2px solid red;
    text-shadow:0px 0px 10px rgba(219, 103, 103, 0.767);
}
.tab-control-wrap{
    background-color: white;
    width: 100%;
    display: flex;
    text-align: center;
}
.tab-control-item{
    flex:1;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    transition: 0.1s all ease-in-out;
    cursor: pointer;
}
</style>