<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    name:"Navbar",
}
</script>

<style scoped>
.nav-bar{
    display: flex;
    box-shadow: 0 1px 10px rgba(128, 128, 128, 0.459);
    background-color: white;
}
.left,.right{
    width: 60px;
    height: 44px;
    line-height: 44px;
}
.center{
    flex: 1;
    text-align: center;
    line-height: 44px;
}
</style>