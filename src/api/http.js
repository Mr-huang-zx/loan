import axios from '@/utils/request.js'


export function login(obj){ //登录
    return axios({
        method:"post",
        url:"user/login",
        data:obj
    })
}

// 用户详情
export function userInfor(){ 
    return axios({
        method:"get",
        url:"user/info",
    })
}

export function logout(){ //退出登录
    return axios({
        method:"post",
        url:"user/logout",
    })
}