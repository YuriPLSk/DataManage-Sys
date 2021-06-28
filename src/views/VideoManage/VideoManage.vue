<template>
    <div>
        <!-- <el-button @click="fetchNode">调用后端</el-button> -->
        <el-table
            :data="tableData"
            stripe
            border
            style="width: 100%"
            height="500"
        >
            <el-table-column prop="id" label="" width="50" type="expand">
                <template >
                    <el-form
                        label-position="left"
                        inline
                        class="demo-table-expand"
                    >
                        <el-form-item label="介绍">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro voluptas ducimus consequatur unde non ipsam illo incidunt aperiam laboriosam, modi accusantium harum quasi facere at nesciunt vel a! Voluptatum illum natus sunt voluptas accusamus, placeat ea quidem distinctio sapiente impedit.</p>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column prop="creatorName" label="作者" width="180">
            </el-table-column>
            <el-table-column prop="companyName" label="经纪公司" width="180">
            </el-table-column>
            <el-table-column prop="albumnName" label="专辑名称" width="200">
            </el-table-column>
            <el-table-column
                prop="onLineSales"
                sortable
                label="线下销量"
                width="120"
            >
            </el-table-column>
            <el-table-column
                prop="offLineSales"
                sortable
                label="线上销量"
                width="120"
            >
            </el-table-column>
            <el-table-column
                prop="releaseDate"
                sortable
                label="发行日期"
                width="180"
            >
            </el-table-column>
            <el-table-column prop="phoneNumber" label="商务邮箱">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import axios from "axios";
import { PATH } from '../../config'

export default {
    data() {
        return {
            tableData: [],
        };
    },
    created() {},
    methods: {
        fetchNode: function () {
            axios.get(PATH + "/getVideoList").then((res) => {
                if (res.status == 200) {
                    var result = res.data;
                    this.tableData = result.data;
                }
            });
        },
    },

    mounted:function(){
        var vm = this;
        vm.fetchNode()
    }
};
</script>
