<template>
  <div>
       <el-button type="info" @click="toHomt">信息按钮</el-button>
  </div>
</template>

<script>
import { login } from '@/api/http'
import { setToken } from '@/utils/token'
export default {
    name:"login",
    data () {
        return {
            
        }
    },
    methods: {
        toHomt(){
            login({"account":"admin","password":"admin@123"}).then(res=>{
                let {code,data} = res.data
                if(code==20000){
                    setToken(data.token)
                    this.$router.push({path:"/home"})
                }
                
            }).catch(err=>{
                alert(err)
            })
            // this.$router.push({path:"/home"})
        }
    },
}
</script>

<style>

</style>