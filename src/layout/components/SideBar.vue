<template>
<!-- 左侧菜单 -->
    <el-aside width="200px">
      <el-menu default-active="2" class="el-menu-vertical-demo" router>
        <el-menu-item index="/index">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>

        <el-menu-item index="/loan-input">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>

        <el-menu-item index="/MsgShow">
          <i class="el-icon-setting"></i>
          <span slot="title">展示</span>
        </el-menu-item>

        <el-submenu index="/outcom">
          <template slot="title">下级</template>
          <el-menu-item index="/first">1</el-menu-item>
          <el-menu-item index="/second">2</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
</template>

<script>
export default {
    name:"SideBar"
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