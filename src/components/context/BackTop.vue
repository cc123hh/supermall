<template>
  <div class="wrap">
      ↑
  </div>
</template>

<script>
export default {
    name:"BackTop",
    methods:{
        BackClick(){
            this.$emit("backClick")
        }
        
    }
}
</script>

<style scoped>
.wrap{
    height: 30px;
    width: 30px;
    border-radius: 30%;
    background-color: pink;
    font-size: 25px;
    position: fixed;
    text-align: center;
    right: 0;
    bottom: 60px;
}
</style>