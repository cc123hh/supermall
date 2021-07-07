<template>
    <tab-bar>
        <tab-bar-item path="/home">
            <div slot="title">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/work">
            <div slot="title">作业</div>
        </tab-bar-item>
        <tab-bar-item path="/myclass">
            <div slot="title">我的班级</div>
        </tab-bar-item>
        <tab-bar-item path="/profile">
            <div slot="title">档案</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
import tabBar from "components/common/tabBar/tabBar.vue"
import tabBarItem from "components/common/tabBar/tabBarItem.vue"
export default {
    name:"mainTabBar",
    components:{
        tabBar,
        tabBarItem
    }
}
</script>

<style>

</style>