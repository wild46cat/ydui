<template>
  <el-container>
    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
             background-color="#545c64"
             text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse" :default-openeds="['1']">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">功能1</span>
        </template>
        <el-menu-item-group>
          <span slot="title">子功能1</span>
          <el-menu-item index="1-1" @click="jumptopage('page1')">跳转页面1</el-menu-item>
          <el-menu-item index="1-2" @click="jumptopage('page2')">跳转页面2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="子功能2">
          <el-menu-item index="1-3" @click="jumptopage('')">跳转页面3</el-menu-item>
          <el-menu-item index="1-4" @click="jumptopage('')">跳转页面4</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-5">
          <span slot="title">子组件</span>
          <el-menu-item index="1-5-1" @click="jumptopage('')">子组件</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-location"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
    <el-container>
      <el-header>
        <i @click="tonglemenu" class="el-icon-xy-leftarrow-copy leftfloatbutton" v-if="!isCollapse"></i>
        <i @click="tonglemenu" class="el-icon-xy-rightarrow-copy leftfloatbutton" v-else="!isCollapse"></i>
        <el-dropdown class="loginout">
          <i class="el-icon-setting"><span style="font-size:16px; ">admin</span></i>
          <el-dropdown-menu slot="dropdown" class="loginoutdropdownmenuitem">
            <el-dropdown-item>
              <span @click="logout">注销</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <h1 class="title">
          <span @click="jumptopage('main')">翼盾后台管理系统</span>
        </h1>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'MainFrame',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        handleOpen: true,
        handleClose: true,
        isCollapse: false,
        username: 'xueyou'
      }
    },
    mounted: function () {
      this.msg = BASE_URL;
    },
    methods: {
      tonglemenu: function () {
        this.isCollapse = !this.isCollapse;
      },
      test: function () {
        alert("ababa");
      },
      jumptopage: function (pathname) {
        this.$router.push({name: pathname});
      },
      logout: function () {
        window.localStorage.removeItem("username");
        window.localStorage.removeItem("password");
        this.$router.push({name: "Login"});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/iconfont/iconfont.css";

  .el-container {
    height: 100%;
  }

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    padding: 0px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .leftfloatbutton {
    float: left;
    cursor: pointer;
    font-size: 32px;
    color: #545c64;
  }

  /*登出按钮*/
  .loginout {
    float: right;
    cursor: pointer;
    font-size: 32px;
    color: #545c64;
    margin-right: 20px;
  }

  /**/
  .loginoutdropdownmenuitem {
    background-color: #B3C0D1;
  }

  .title {
    cursor: pointer;
  }
</style>
