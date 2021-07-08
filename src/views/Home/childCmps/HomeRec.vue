<template>
<div class="rec-wrap">
    <div class="rec-item" v-for="(item,index) in rec" :key="'HomeRecView'+index">
        <img :src="item.image">
        <div> {{ item.title }} </div>
    </div>
</div>
</template>

<script>
export default {
    name:"HomeRec",
    props:{
        rec:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.rec-wrap{
    display: flex;
}
.rec-item{
    flex: 1;
    text-align: center;
}
.rec-item img{
    width: 100%;
}
</style>