import axios from 'axios'
import { getToken } from '@/utils/token'

axios.defaults.baseURL ='http://139.196.42.209:5004/api/'

axios.interceptors.request.use((config)=>{

    console.log(config)
    config.headers['token'] = getToken()
    return config
})
// 添加响应拦截器
axios.interceptors.response.use(response=>{
    let {code} =response.data;
    if(code!==20000){
        alert(response.data.data.message)
    }
    return response
},err=>{
    alert("网络走丢了~")
    return Promise.reject(err)
})

export default axios