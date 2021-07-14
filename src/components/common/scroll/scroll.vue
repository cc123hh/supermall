<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
    name:"Scroll",
    props:{
        probeType:{
            type:Number,
            default:0
        }
    },
    methods:{
        toTop(time=500){
            this.scroll.scrollTo(0,0,time)
        }
    },
    data(){
        return {
            scroll : null
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType,
            mouseWheel:true
        })
        this.scroll.on('scroll',(position) => {
            this.$emit('scroll',position)
        })
        console.log("mounted" + this.scroll)
    },
    // updated(){
    //     this.scroll = new BScroll(this.$refs.wrapper,{
    //         click:true,
    //     })
        
    // }
}
</script>