<template>
    <el-dialog title="更新人员信息" :visible="dialogFormVisible">
        <el-form :model="updateObj" label-position="right" >
            <el-form-item
                label="姓名"
                :label-width="formLabelWidth"
                prop="name"
            >
                <el-input v-model="updateObj.name" autocomplete="off" disabled></el-input>
            </el-form-item>
            <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="updateObj.username" autocomplete="off" disabled> </el-input>
            </el-form-item>
            <el-form-item
                label="工号"
                :label-width="formLabelWidth"
                prop="jobno"
            >
                <el-input v-model="updateObj.jobno" autocomplete="off" ></el-input>
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
                <el-radio-group v-model="updateObj.sex">
                    <el-radio label="男" name="chooseSex"></el-radio>
                    <el-radio label="女" name="chooseSex"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
                <el-input
                    type="age"
                    v-model.number="updateObj.age"
                    autocomplete="off"
                ></el-input>
            </el-form-item>
            <el-form-item
                label="邮箱"
                :label-width="formLabelWidth"
                prop="email"
            >
                <el-input v-model="updateObj.email" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="closeDialog">取 消</el-button>
            <el-button type="primary" @click="update">更 新</el-button>
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
    props: ["dialogFormVisible","updateObj"],
    methods: {
        closeDialog: function () {
            this.$emit("changeUpdStatus");
        },
        update:function(){
            this.handleSubmit();
            this.$emit("changeUpdStatus");
        },
        handleSubmit: function () {
            console.log(this.updateObj)
            this.$alert("确认更新？", {
                confirmButtonText: "确定",
                callback: (action) => {
                    if (action == 'confirm') { 
                        axios.post(PATH + "/updateUsers",this.updateObj)
                        .then(res => {
                            console.log(res)
                            this.$message({
                                type: "success",
                                message: `更新成功`,
                            });
                            this.$emit("initData");
                        })
                        .catch(err =>{
                            console.log(err)
                            this.$message({
                                type: "error",
                                message: `更新失败`,
                            });
                        })
                        
                    }
                },
            });
        },
    },
}
</script>

<style>

</style>