<template>
    <div>
        数据仓储
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item v-for="(item,index) in this.$store.getters.showDeveloperInfo" :key="index" :title="item.author +'：'" :name="index">
                <div>
                   {{item.description}}
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
import Axios from "axios";
import { PATH } from "../../config";

export default {
    data() {
        return {
            activeNames: ["1"],
            arr:[]
        };
    },
    methods: {
        handleChange(val) {
            console.log(val);
        },
    },
    created(){
        var vm = this;
        Axios.get( PATH + "/getDeveloperInfo")
        .then(res => {
            if (res.status == 200) {
                var result = res.data;
                vm.$store.commit("searchDeveloperInfo",result.data);
                console.log(vm.$store.getters.showDeveloperInfo);
        

            }
        })
        .catch(err => {
            console.log(err)
        })
    },
    beforeUpdate(){
        
    }
};
</script>

<style>
</style>