<template>
  <el-container>
    <SideBar />
   
    <el-container class="changeAsi">
      <Header />
      <Main />
    </el-container>
  </el-container>
</template>

<script>
import {SideBar,Header,Main} from './components'

export default {
  name: "home",
  data() {
    return {};
  },
  components:{
    SideBar,
    Header,
    Main
  },
  methods: {
    goout() {
      this.$router.push("login");
    }
  }
};
</script>

<style>
.changeAsi{
  flex-wrap:wrap ;
}
</style>