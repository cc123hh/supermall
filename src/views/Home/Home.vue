<template>
  <div>
      <navbar>
        <div slot="center">首页</div>
      </navbar>
      <home-swiper :banners="banners"/>
      <home-rec :rec="rec"/>
      <h1>Home</h1>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar.vue'
import HomeSwiper from "./childCmps/HomeSwiper"
import HomeRec from "./childCmps/HomeRec"
import { getAllHomeNews } from "network/home.js"

export default {
    name:"Home",
    components:{
      Navbar,
      HomeSwiper,
      HomeRec
    },
    data(){
      return {
        banners:null,
        rec:null
      }
    },
    created(){
      getAllHomeNews().then(
        res =>{
          this.banners = res.data.banner.list
          this.rec = res.data.recommend.list
        }
      )
    }
}
</script>

<style>

</style>