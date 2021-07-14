<template>
<swiper>
    <swiper-item v-for="(item,index) in banners" :key="'HomeSwiper'+index">
        <a :href="item.link" alt="">
            <img :src="item.image" @load="imageLoad">
        </a>
    </swiper-item>
</swiper>
</template>

<script>
import { Swiper,SwiperItem } from 'components/common/swiper';

export default {
    name:"HomeSwiper",
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
    imageLoad(){
        this.$bus.$emit('itemImageLoad')
    }
}
}
</script>

<style>

</style>