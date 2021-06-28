<template>
    <header class="header">
        <div class="l-box">
            <el-button class="self-btn" type="primary" style="background-color:white;color:black;border:1px solid white" icon="el-icon-sort" size="small" circle @click="shirinkMenu"></el-button>
            <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-left:20px">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="current.path" class="currentMenu" v-if="current">{{current.label}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-box">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <el-avatar :src="this.userImg"></el-avatar>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>我的收藏</el-dropdown-item>
                    <el-dropdown-item divided>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex';


export default {
    data() {
        return {
            userImg:
                "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        };
    },
    computed:{
        ...mapState({
            current: state => state.TabStore.currentMenu
        })
    },
    methods:{
        shirinkMenu(){
            this.$store.commit('collapseMenu')
        },
       
    },
    mounted(){
      
    }
};
</script>

<style lang="css">
.header {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
}
.self-btn {
    transform: rotate(90deg);
}
.l-box{
    display: flex;
    align-items: center;
    width: 360px;
}
.header /deep/.el-breadcrumb__inner,
.header /deep/.el-breadcrumb__inner.is-link{
    color: #fff;
    font-weight: 0;
}
.header /deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover{
    color:snow

}
</style>