import Mock from 'mockjs'
import homeApi from './home'
// 设置200-2000延时
Mock.setup({
    timeout:'200-2000'
})

// 首页相关 要拦截的路径:/home/getData  拦截方式 get  拦截方法homeApi.getHomeData
// 意为当拦截到此路径，此请求方式后，执行homeApi.getHomeData的方法，方法中返回了虚拟数据，即实现mock数据    
Mock.mock(/\/home\/getData/,'get',homeApi.getHomeData);
Mock.mock(/\/videoManage\/initTableData/,'get',homeApi.getHomeData)