<template>
    <div>
        <el-tabs type="card" editable @edit="handleTabsEdit" @tab-click="handleClick">
            <el-tab-pane
                :key="item.name"
                v-for="item in tags"
                :label="item.label"
                :name="item.name"
            >{{item.content}}</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState({
            tags: state => state.TabStore.tabList
        })
        // mapMutations({

        // })
    },
    data() {
        return {
            editableTabsValue: "2",
            editableTabs: [
                {
                    title: "Tab 1",
                    name: "1",
                    content: "Tab 1 content"
                },
                {
                    title: "Tab 2",
                    name: "2",
                    content: "Tab 2 content"
                }
            ],
            tabIndex: 2
        };
    },
    methods: {
        handleTabsEdit(target, action) {
            if (action === "add") {
                let newTabName = ++this.tabIndex + "";
                this.editableTabs.push({
                    title: "New Tab",
                    name: newTabName,
                    content: "New Tab content"
                });
                this.editableTabsValue = newTabName;
            }
            if (action === "remove") {
                if (target != "home") {
                    this.tags = this.tags.map((item, index) => {
                        if (target === item.name) {
                            return this.tags.splice(index, 1);
                        }
                    });
                } else {
                    this.$message({
                        type: "info",
                        message: "首页无法关闭"
                    });
                }
            }
        },
        handleClick(e){
            this.$router.push({name:e.name})
        }
    }
};
</script>

<style type='scss' scoped>
</style>