import Vue from 'vue'
import Vuex from 'vuex'

import { userInfor,logout } from '@/api/http.js'

Vue.use(Vuex)

const state ={
    roles:[]
}
const getters ={
    roles:state=>state.roles
}

const mutations ={
    SETROLUS:(state,res)=>{
        state.roles =res
    },
    
}

const actions ={
    userInfor({commit}){
        return new Promise((reslov,reject)=>{
            userInfor().then(res=>{
                let {data} =res.data
                commit("SETROLUS",data.roles)
                reslov(data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    // 退出时
    logout({commit}){
        return new Promise((reslov,reject)=>{
            logout().then(()=>{
                commit("SETROLUS",[])
                reslov()
            }).catch(err=>{
                reject(err)
            })
        })
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}