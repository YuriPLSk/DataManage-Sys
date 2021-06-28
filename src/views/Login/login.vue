<template>
    <div style="height:100%">
        <el-row style="background-color:#000;height:20%"></el-row>
        <el-row style="background-color:#000;height:40%;">
            <el-col :span="7" width="30%"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="10">
                <el-container>
                    <el-main>
                        <el-form
                            :model="ruleForm"
                            status-icon
                            :rules="rules"
                            ref="ruleForm"
                            label-width="100px"
                            class="demo-ruleForm"
                        >
                            <el-form-item label="用户名" prop="username">
                                <el-input
                                    type="text"
                                    autocomplete="off"
                                    v-model="ruleForm.username"
                                    @keyup.enter.native="submitForm('ruleForm')"
                                ></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="pass">
                                <el-input
                                    type="password"
                                    v-model="ruleForm.pass"
                                    autocomplete="off"
                                    @keyup.enter.native="submitForm('ruleForm')"
                                ></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button
                                    type="primary"
                                    @click="submitForm('ruleForm')"
                                    >登录</el-button
                                >
                                <el-button @click="resetForm('ruleForm')"
                                    >重置</el-button
                                >
                            </el-form-item>
                        </el-form>
                    </el-main>
                </el-container></el-col
            >
            <el-col :span="7" width="30%"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row class='bgc' style="background-color:#000;height:40%"></el-row>

    </div>
</template>

<script>
import axios from "axios";
import { PATH } from "../../config";

export default {
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("此项为必填项"));
            } else {
                if (this.ruleForm.checkPass !== "") {
                    this.$refs.ruleForm.validateField("checkPass");
                }
                callback();
            }
        };
        return {
            ruleForm: {
                pass: "",
                username: "",
            },
            rules: {
                pass: [{ validator: validatePass, trigger: "blur" }],
                username: [{ validator: validatePass, trigger: "blur" }],
            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log(this.ruleForm);
                    this.checkLogin();
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        checkLogin() {
            var vm = this;
            axios
                .post(PATH + "/checkLogin", {
                    username: this.ruleForm.username,
                    password: this.ruleForm.pass,
                })
                .then(function (res) {
                    var result = res.data;
                    console.log(result);
                    if (result.status == 200) {
                        vm.$message({
                            message: result.message,
                            type: 'success'
                        })
                        console.log(vm.ruleForm)
                        vm.$router.push({path: '/index', query: {username : vm.ruleForm.username}})
                    } else {
                       vm.$message({
                            message: result.message,
                            type: 'error'
                        });
                    }
                })
                .catch(function (err) {
                    console.log(err)
                    vm.$message.error(err.message);
                });
        },
    },
    watch:{

    }
};
</script>

<style lang="scss">
.bgc{
    background: url("../../assets/images/2.jpg") no-repeat;
    background-position:center;
    // background-size:80px 60px;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.el-row {
  .el-form-item{
      color: white;
  }
}
.el-form-item__label{
    color: white;
}
</style>
