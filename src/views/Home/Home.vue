<template>
    <el-row :gutter="20" class="home">
        <el-col :span="8">
            <el-card shadow="hover" style="height:290px">
                <div class="user">
                    <el-avatar :src="userImg"></el-avatar>
                    <div class="userInfo">
                        <p class="name">{{getUserName}}</p>
                        <p class="address">北京</p>
                    </div>
                </div>
                <div class="loginInfo">
                    <p>{{new Date().format("yyyy-MM-dd hh:mm:ss")}}</p>
                    <p>上次登录地点：中国-北京</p>
                </div>
            </el-card>
            <el-card shadow="hover" style="height:482px;margin-top:20px">
                <el-table :data="tableData" stripe style="width: 100%" show-overflow-tooltip>
                    <el-table-column prop="date" label="日期" width="130"></el-table-column>
                    <el-table-column prop="name" label="姓名" width="100"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16">
            <div class="num">
                <el-card shadow="hover" v-for="item in countData" :key="item.name">
                    <div>
                        <i :class="item.icon" :style="'background-color:'+item.bgColor"></i>
                    </div>
                    <div class="detail">
                        <p class="text">{{item.name}}</p>
                        <p class="num">{{item.value}}</p>
                    </div>
                </el-card>
            </div>
            <el-card shadow="hover" style="height:280px">
                <Echart :chartData="echartData.order" />
            </el-card>
            <div class="picture">
                <el-card shadow="hover" style="height:260px">
                    <Echart :chartData="echartData.user" style="height:260px" />
                </el-card>
                <el-card shadow="hover" style="height:260px;padding:0px">
                    <Echart :chartData="echartData.address" :isAxisChart="false" style="left:20px;height:210px;width:340px" />
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import Echart from '../../components/Echart'
import Mock from 'mockjs'

export default {
    data() {
        return {
            userImg:
                "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
            countData: [
                {
                    icon: "el-icon-shopping-cart-full",
                    bgColor: "#66CDAA",
                    name: "今日订单成交量",
                    value:Mock.mock('@integer(1,100)')
                },
                {
                    icon: "el-icon-shopping-cart-1",
                    bgColor: "#FFE4E1",
                    name: "今日支付总额",
                    value: "￥" + Mock.mock('@integer(5000,50000)')
                },
                {
                    icon: "el-icon-shopping-cart-2",
                    bgColor: "#E0EEE0",
                    name: "今日支付均额",
                    value: "￥" + Mock.mock('@integer(2500,25000)')
                },
                {
                    icon: "el-icon-shopping-cart-full",
                    bgColor: "#66CDAA",
                    name: "昨日订单成交量",
                    value:Mock.mock('@integer(1,100)')
                },
                {
                    icon: "el-icon-shopping-cart-1",
                    bgColor: "#FFE4E1",
                    name: "昨日支付总额",
                    value: "￥" + Mock.mock('@integer(5000,50000)')
                },
                {
                    icon: "el-icon-shopping-cart-2",
                    bgColor: "#E0EEE0",
                    name: "昨日支付均额",
                    value: "￥" + Mock.mock('@integer(2500,25000)')
                }
            ],
            countDate:['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            tableData:[],
            totalData:{},
            echartData:{
                order:{
                    xData:[],
                    series:[]
                },
                user:{
                    xData:[],
                    series:[]
                },
                address:{
                    series:[]
                }
            }
        };
    },
    computed:{
        getUserName:function(){
            var username = "";
            if (this.$route.query.username) {      
                window.sessionStorage.setItem("username",this.$route.query.username)
                username = this.$route.query.username;
            } else {
                username = window.sessionStorage.username;
            }
            return username
        }
    },
    components:{
        Echart
    },
    methods: {
        getTableData() {
            this.$http.get("/home/getData").then(res => {
                // console.log(res)
                this.totalData = res;
                this.tableData = res.data.data.tableData.array;   
                // 折线图数据
                const order = res.data.data.orderData;
                // x轴定义
                this.echartData.order.xData = this.countDate
                // series定义
                //取出键名
                let keyArr = Object.keys(order[0])
                // 每个键名 遍历数据得到数组 
                keyArr.forEach(key => {
                    this.echartData.order.series.push({
                        name:key,
                        data:order.map(item => item[key]),
                        type:'line'
                    })
                })

                // 柱状图数据
                const person = res.data.data.newPerson;
                this.echartData.user.xData = this.countDate;
                let keyArr2 = Object.keys(person[0])
                // 每个键名 遍历数据得到数组 
                keyArr2.forEach(key => {
                    this.echartData.user.series.push({
                        name:key,
                        data:person.map(item => item[key]),
                        type:'bar'
                    })
                })

                // 饼状图
                const addressArr = res.data.data.userAddress;
                // this.echartData.address.xData = this.countDate;
                // 每个键名 遍历数据得到数组 
                    this.echartData.address.series.push({
                        name:'分布信息',
                        data:addressArr,
                        type:'pie'
                    })
                })
               
        }
    },
    // create创建完毕之后请求数据  渲染dom之前获取到数据 然后去渲染数据
    created() {
        this.getTableData();
    },
    filters:{
        format:(value => {
            console.log(value)
        })
    }
};
</script>

<style lang='scss' scoped>
// ~代表相对路径 @代表src文件夹下
@import "~@/assets/scss/home.scss";
</style>