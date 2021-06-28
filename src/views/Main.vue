<template>
    <el-container>
        <el-aside style="width: auto;height:980px">
            <CommonAside />
        </el-aside>
        <el-container>
            <el-header>
                <CommonHeader />
            </el-header>
                <CommonTab/>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import CommonAside from "../components/CommonAside";
import CommonHeader from "../components/CommonHeader";
import CommonTab from "../components/CommonTab";
export default {
    components: {
        CommonAside,
        CommonHeader,
        CommonTab
    },

};
</script>

<style >
.el-header {
    background-color: #444;
    /* margin-left: 220px; */
}
.el-menu {
    border-right: none;
}
.el-aside{
    height: 980px;

}
</style>