<template>
    <el-row>
        <el-col>
            <el-menu
                class="el-menu-vertical-demo self-menu"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router
                :collapse="isColl"
            >
                <el-menu-item
                    v-for="item in NoChildren"
                    :key="item.path"
                    :index="item.path"
                    @click="clickMenu(item)"
                >
                    <i :class="'el-icon-' + item.icon"></i>
                    <span slot="title">{{ item.label }}</span>
                </el-menu-item>
                <el-submenu
                    v-for="val in hasChildren"
                    :key="val.path"
                    :index="val.path"
                >
                    <template slot="title">
                        <i :class="'el-icon-' + val.icon"></i>
                        <span>{{ val.label }}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item
                            v-for="subItem in val.children"
                            :key="subItem.path"
                            :index="subItem.path"
                            @click="clickMenu(subItem)"
                        >
                            <template slot="title">
                                <i :class="'el-icon-' + subItem.icon"></i>
                                <span slot="title">{{ subItem.label }}</span>
                            </template>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        hasChildren() {
            return this.menuLabel.filter((item) => item.children);
        },
        NoChildren() {
            return this.menuLabel.filter((item) => !item.children);
        },
        ...mapState({
            isColl: (state) => state.TabStore.collapse,
        }),
    },
    data() {
        return {
            menuLabel: [
                {
                    path: "/",
                    label: "首页",
                    icon: "s-home",
                    name: "home",
                },
                {
                    path: "/video",
                    label: "市场概况",
                    icon: "video-play",
                    name: "video",
                },
                {
                    path: "/user",
                    label: "用户管理",
                    name: "user",
                    icon: "user",
                },
                {
                    path: "/others",
                    label: "其他",
                    icon: "more",
                    name: "home",
                    children: [
                        {
                            path: "/page1",
                            name: "页面1",
                            label: "页面1",
                            icon:"s-tools"
                        },
                        {
                            path: "/page2",
                            name: "页面2",
                            label: "页面2",
                            icon:"notebook-2"
                        },
                    ],
                },
            ],
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        clickMenu(item) {
            this.$store.commit("selectMenu", item);
        },
    },
};
</script>
<style style='scss' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
}
.self-menu {
    height: 980px;
    padding: 10px 0px;
    box-sizing: border-box;
    border-right: none;
}
</style>