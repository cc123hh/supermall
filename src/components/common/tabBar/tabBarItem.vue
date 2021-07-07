<template>
  <div class="tab-bar-item" @click="itemClick">
      <div><slot name="ico"></slot></div>
      <div :class="{actived:isActived}"><slot name="title"></slot></div>
  </div>
</template>

<script>
export default {
    name:"tabBarItem",
    props:{
      path:String  
    },
    computed:{
      isActived(){
        return this.$route.path.indexOf(this.path) !== -1
      }
    }
    ,
    methods:{
        itemClick(){
            if(this.$route.path !== this.path)
            this.$router.replace(this.path)
        }
    }
}
</script>

<style scoped>
.actived{
  color:brown;
}
.tab-bar-item{
  flex:1;
  height: 49px;
  background-color: #f2f2f2;
  text-align: center;
}
</style>