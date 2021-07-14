<template>
  <div id="home">

      <navbar class="home-nav">
        <div slot="center">首页</div>
      </navbar>

      <scroll class="content" :probe-type="3" ref="scroll" @scroll="scrollState">
        <home-swiper :banners="banners"/>
        <home-rec :rec="rec"/>
        <tab-control class="tab-control" :titles="['推荐','热门','猜你喜欢']"/>
        <h1>Home</h1>
        <ol>
         <li><button @click="$refs.scroll.scroll.refresh()">refresh</button></li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>5</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>6</li>
          <li>7</li>
        </ol>
      </scroll>

      <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar.vue'
import tabControl from "components/common/tabcontrol/tabControl.vue";

import HomeSwiper from "./childCmps/HomeSwiper"
import HomeRec from "./childCmps/HomeRec"
import { getAllHomeNews } from "network/home.js"

import Scroll from "components/common/scroll/scroll.vue";
import BackTop from "components/context/BackTop.vue"
export default {
    name:"Home",
    components:{
      Navbar,
      HomeSwiper,
      HomeRec,
      tabControl,
      Scroll,
      BackTop
    },
    data(){
      return {
        banners:null,
        rec:null,
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        isShowBackTop:false
      }
    },
    updated(){
      console.log("updated")
      this.$refs.scroll.scroll.refresh()
    },
    created(){
      this.$bus.$on('itemImageLoad',()=>{
        this.$refs.scroll.scroll.refresh()
      })
      //把网络请求封装函数到方法里面，注意用this来访问封装的函数
      this.getAllHomeNews()
    },
    methods:{
      getAllHomeNews(){
        getAllHomeNews().then(res =>{
          this.banners = res.data.banner.list
          this.rec = res.data.recommend.list
        }
      )
      },
      backClick(){
        this.$refs.scroll.toTop(500)
      },
      scrollState(p){
        console.log(p)
      }
    }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
  height: calc(100vh - 44px);
}
.tab-control{
  position: sticky;
  top:44px
}
.home-nav{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  z-index: 9;

  background-color: pink;
}
.content{
  height: calc(100% - 49px);
  overflow:hidden
}
</style>