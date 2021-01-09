// 路由拦截
import router from './index'
import store from '../store'


// 因为action中是异步 所以要用到async await
router.beforeEach(async(to, from, next) => {
    //01.是否是登录页
    if(to.path=='/Login'){
        next()
    }else{
        // 正常登录
        // console.log(store.getters.roles)
        let R =store && store.getters.roles && store.getters.roles.length>0
        if(R){
            next()
        }else { //非正常登录
            // 获取角色信息
            var {roles} = await store.dispatch("userInfor")
            if(roles){
                next({...to})
            }else{
                next({path:"/Login"})
            }
        }
    }
    
})