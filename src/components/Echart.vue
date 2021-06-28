<template>
    <div style="height:300px" ref="echart">Echart</div>
</template>

<script>
import Echart from "echarts";
export default {
    props: {
        chartData: {
            type: Object,
            default() {
                return {
                    xData: [],
                    series: []
                };
            }
        },
        isAxisChart: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        options() {
            return this.isAxisChart ? this.axisOption : this.normalOption;
        }
    },
    data() {
        return {
            echart: null,
            axisOption: {
                // title: {
                //     text: "订单成交额周量"
                // },
                // 图例距离某侧边距
                legend: {
                    right:'10%'
                },
                // 图标渲染的距离右侧边距
                grid: {
                    left:'20%'
                },
                // 鼠标移入提示
                tooltip: {
                    trigger: "axis"
                },
                //工具盒  堆叠/保存为图片》。
                toolbox: {
                    show: true,
                    feature: {
                        saveAsImage: { show: true }
                    }
                },
                xAxis: {
                    type: "category",
                    data: []
                },
                yAxis: {
                    type: "value"
                },
                series: []
            },
            normalOption: {
                    left:40,
                title:{
                    title:'用户分布信息'
                },
                series: [],
                legend:{
                     orient: 'vertical',
                     left:"-5%"
                },
                tooltip:{},
                grid:{
                    left:'20%'
                }
            }
        };
    },
    // 监听父组件传来的chartData值发生变化时
    watch: {
        chartData: {
            handler: function() {
                this.initChart();
            },
            deep: true
        }
    },
    mounted(){
        window.addEventListener('resize',this.resizeChart)
    },
    destroyed(){
        window.removeEventListener('resize',this.resizeChart)
    },
    methods: {
        initChart() {
            this.initChartData();
            if (this.echart) {
                this.echart.setOption(this.options);
            } else {
                // 组件初始化 Echart自带方法
                // console.log(this.options);
                this.echart = Echart.init(this.$refs.echart);
                this.echart.setOption(this.options);
            }
        },
        initChartData() {
            if (this.isAxisChart) {
                this.axisOption.xAxis.data = this.chartData.xData;
                this.axisOption.series = this.chartData.series;
            } else {
                this.normalOption.series = this.chartData.series
            }
        },
        // 当图表的容器大小发生改变时 进行自适应
        resizeChart(){
            this.echart ? this.echart.resize() : '';
        }
    }
};
</script>

<style>
</style>