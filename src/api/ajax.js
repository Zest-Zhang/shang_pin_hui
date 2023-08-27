
import axios from 'axios'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"
import store from "@/store/store";

const requests = axios.create({
        baseURL: "/api",
        timeout: 5000,
})

// 请求拦截器
requests.interceptors.request.use( (config)=>{
    if(store.state.detail.uuid_token){
        // 请求头添加一个字段(userTempId)
        config.headers.userTempId=store.state.detail.uuid_token;
    }
    //需要携带token带给服务器
    if (store.state.user.token) {
        config.headers.token = store.state.user.token;
    }
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