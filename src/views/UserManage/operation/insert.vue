<template>
    <el-dialog title="新增人员" :visible="dialogFormVisible">
        <el-form :model="form" label-position="right" :rules="rules">
            <el-form-item
                label="姓名"
                :label-width="formLabelWidth"
                prop="name"
            >
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="form.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item
                label="工号"
                :label-width="formLabelWidth"
                prop="jobno"
            >
                <el-input v-model="form.jobno" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
                <el-radio-group v-model="form.sex">
                    <el-radio label="男" name="chooseSex"></el-radio>
                    <el-radio label="女" name="chooseSex"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
                <el-input
                    type="age"
                    v-model.number="form.age"
                    autocomplete="off"
                ></el-input>
            </el-form-item>
            <el-form-item
                label="邮箱"
                :label-width="formLabelWidth"
                prop="email"
            >
                <el-input v-model="form.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item
                label="最高学历"
                :label-width="formLabelWidth"
                prop="education"
            >
                <el-select v-model="form.education" placeholder="请选择">
                    <el-option
                        v-for="(item, index) in educationlist"
                        :key="index"
                        :label="item.name"
                        :value="item.level"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="职位" :label-width="formLabelWidth">
                <el-input v-model="form.level" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="履历" :label-width="formLabelWidth">
                <el-input type="textarea" v-model="form.record"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="closeDialog">取 消</el-button>
            <el-button type="primary" @click="submit">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>

import axios from "axios";
import { PATH } from "@src/config";

export default {
    data() {
        return {
            // dialogFormVisible:false,
            form: {
                name: "",
                username: "",
                jobno: "",
                sex: "",
                age: "",
                email: "",
                education: "",
                level: "",
                record: "",
            },
            educationlist: [
                { name: "大专", level: "0" },
                { name: "本科", level: "1" },
                { name: "硕士", level: "2" },
                { name: "博士", level: "3" },
            ],
            rules: {
                name: [
                    {
                        required: true,
                        message: "请输入活动名称",
                        trigger: "blur",
                    },
                    {
                        min: 2,
                        max: 8,
                        message: "长度在 2 到 8 个字符",
                        trigger: "blur",
                    },
                ],
                jobno: [
                    {
                        required: true,
                        message: "请输入工号",
                        trigger: "change",
                    },
                ],
                sex: [
                    {
                        required: true,
                        message: "请选择性别",
                        trigger: "change",
                    },
                ],
                age: [
                    {
                        required: true,
                        message: "请输入年龄",
                        trigger: "blur",
                    },
                ],
                email: [
                    {
                        required: true,
                        message: "请填写邮箱",
                        trigger: "blur",
                    },
                ],
                education: [
                    {
                        required: true,
                        message: "请选择学历",
                        trigger: "change",
                    },
                ],
            },
            formLabelWidth: "120px",
        };
    },
    props: ["dialogFormVisible"],
    methods: {
        closeDialog: function () {
            this.$emit("changeInsStatus");
        },
        submit:function(){
            this.handleSubmit();
            this.$emit("changeInsStatus");
        },
        handleSubmit: function () {
            this.$alert("请确认添加人员", {
                confirmButtonText: "确定",
                callback: (action) => {
                    if (action == 'confirm') { 
                        axios.post(PATH + "/insertData",this.form)
                        .then(res => {
                            console.log(res)
                            this.$message({
                                type: "success",
                                message: `人员添加成功`,
                            });
                            this.$emit("initData");
                        })
                        .catch(err =>{
                            console.log(err)
                            this.$message({
                                type: "success",
                                message: `人员添加失败`,
                            });
                        })
                        
                    }
                },
            });
        },
    },
    watch: {
        insertstatus: {
            handler(n) {
                console.log("参数： " + n);
                this.company_id = n; //赋值给data
            },
            deep: true, // 深度监听父组件传过来对象变化
        },
    },
    mounted() {},
    created() {},
};
</script>

<style>
</style>