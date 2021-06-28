<template>
    <div>
        <el-row>
            <el-button type="primary" round @click="handleInsert"
                >新增人员</el-button
            >
            <el-button type="primary" round @click="handleUpdata"
                >更新人员</el-button
            >
        </el-row>
        <INSERTMODAL
            :dialogFormVisible="insertStatus"
            @changeInsStatus="changeInsStatus"
            @initData="initData"
        ></INSERTMODAL>
        <UPDATEMODAL
            :updateObj="updateObj"
            :dialogFormVisible="updateStatus"
            @changeUpdStatus="changeUpdStatus"
            @initData="initData"
        ></UPDATEMODAL>

        <hr class="myhr">
        <el-table
            :data="
                tableData.filter(
                    (data) =>
                        !search ||
                        data.name.toLowerCase().includes(search.toLowerCase())
                )
            "
            style="width: 100%"
            height="600px"
        >
            <el-table-column fixed label="姓名" prop="name"> </el-table-column>
            <el-table-column label="用户名" prop="username"> </el-table-column>
            <el-table-column label="工号" prop="jobno"> </el-table-column>
            <el-table-column label="性别" prop="sex"> </el-table-column>
            <el-table-column label="年龄" prop="age"> </el-table-column>
            <el-table-column label="邮箱" prop="email" width="200"> </el-table-column>
            <el-table-column label="个人信息" width="150" type="expand" prop="description">
                <template slot-scope="detailInfo">
                    <el-form
                        label-position="left"
                        inline
                        class="demo-table-expand"
                    >
                        <el-form-item label="最高学历："
                            >
                            <span v-if="detailInfo.row.education == 0">大专</span>
                            <span v-if="detailInfo.row.education == 1">本科</span>
                            <span v-if="detailInfo.row.education == 2">硕士</span>
                            <span v-if="detailInfo.row.education == 3">博士</span>
                        </el-form-item>
                        <br>
                        <el-form-item label="职位：">
                            <span>{{ detailInfo.row.level }}</span>
                        </el-form-item>
                        <br>

                        <el-form-item label="工作履历：">
                            <span>{{ detailInfo.row.record }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>

            <el-table-column fixed="right" align="right">
                <template slot="header" slot-scope="scope">
                    <el-input
                        v-model="search"
                        size="mini"
                        @change="autoSearch(scope)"
                        placeholder="请输入姓名搜索"
                    />
                </template>
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button
                    >
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <!-- <el-scrollbar></el-scrollbar> -->
    </div>
</template>

<script>
import Axios from "axios";
import { PATH } from "../../config";

// 引入子组件
import INSERTMODAL from "./operation/insert";
import UPDATEMODAL from "./operation/update";

export default {
    data() {
        return {
            tableData: [],
            search: "",
            scope: null,
            insertStatus: false,
            updateStatus: false,
            updateObj:{},
        };
    },
    components: {
        INSERTMODAL,
        UPDATEMODAL,
    },
    methods: {
        initData() {
            var vm = this;
            Axios.get(PATH + "/getAllUsers").then(function (res) {
                return new Promise(function (resolve, reject) {
                    var result = res.data;
                    if (result.status == 200) {
                        resolve(result);
                        vm.tableData = result.data;
                    } else {
                        reject(result);
                    }
                });
            });
        },

        handleEdit(index, row) {
            console.log(index, row);
            this.updateStatus = true;
            this.updateObj = JSON.parse(JSON.stringify(row));
        },
        handleDelete(index, row) {
            console.log(index, row);
            Axios.post(PATH + "/deleteUser",row)
            .then((res) => {
                if (res.data.status == 200) {
                     this.$message({
                        showClose: true,
                        message: '删除成功',
                        type: 'success'
                    });
                this.initData();
                }
            })
            .catch((err) => {
                console.log(err)
                 this.$message({
                    showClose: true,
                    message: '删除失败',
                    type: 'error'
                });
            })
        },
        autoSearch: function (scope) {
            console.log(scope);
        },
        handleInsert: function () {
            this.insertStatus = true;
            console.log(this.insertStatus);
        },
        handleUpdata: function () {
            this.updateStatus = true;
            console.log(this.updateStatus);
        },
        changeInsStatus: function () {
            this.insertStatus = false;
        },
        changeUpdStatus: function () {
            this.updateStatus = false;
        },
    },
    created() {
        this.initData();
    },
};
</script>

<style scope lang="scss">
.myhr{
    margin: 5px 0;
}
</style>
