import Axios from 'axios'

// 1.创建Axios实例
const service = Axios.create({
    // 请求超时时间
    timeout:3000,
})
// 2.添加请求拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error)
    }
)
// 3.添加响应的拦截器
service.interceptors.response.use(
    response => {
        let res = {};
        res.status = response.status;
        res.data = response.data;
        return res 
    },
    err => {
        console.log(err)
    }
)

export default service;