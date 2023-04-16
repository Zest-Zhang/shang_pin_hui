import axios from 'axios'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"

const requests = axios.create({
    baseURL: "/api",
    timeout: 5000,
})

// 请求拦截器
requests.interceptors.request.use( (config)=>{
    nprogress.start()
    return	config
    }, function () {
    // 对请求错误做些什么
    return Promise.reject(new Error('failed'));
})
// 响应拦截器(res 是 response)
requests.interceptors.response.use( (res)=>{
    nprogress.done()
    return res.data
    },()=>{
    return Promise.reject(new Error('failed'))
} )

export default requests