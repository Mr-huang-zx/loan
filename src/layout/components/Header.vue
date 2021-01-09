<template>
    <div style="width:100%">
    <!-- 右侧头部导航 -->

        <el-header style="text-align:left;">
            <el-breadcrumb separator="/" style="display:inline-block">
              <el-breadcrumb-item v-for="(item,index) in list" :key="index">
                <span v-if="index==list.length-1">{{item.meta.title}}</span>
                <router-link v-else :to="item.path">{{item.meta.title}}</router-link>
              </el-breadcrumb-item>

            </el-breadcrumb>

     
              <span>{{boy | getSex}}</span>     
            <el-button type="danger" @click="goout" style="margin-left:40%">退出</el-button>
        </el-header>
    </div>
        
</template>

<script>
// import { logout } from '@/api/http'
import { removeToken } from '@/utils/token'
export default {
    name:"Header",
    data() {
      return {
        list:[],
        boy:"man"
      }
    },
    watch:{
      $route(to,from){
        console.log(to)
        console.log(from)
        this.getBreads()
      }
    },
    created(){
      this.getBreads()

      
    },
    methods: {
      // 获取面包屑数据
      getBreads(){
        this.list =this.$route.matched.filter(item=>item.meta && item.meta.title)
      },
      goout() {
        // logout().then(res=>{
        //   var {code} = res.data
        //   if(code==20000){
        //     removeToken()
        //     this.$router.push("login")
            
        //   }
        // })
        this.$store.dispatch("logout").then(res=>{
          console.log(res)
           removeToken()
           this.$router.push("login")
        })
          // this.$router.push("login");
      }
    },
}
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>