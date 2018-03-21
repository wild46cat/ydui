<template>
  <div class="loginstyle">
    <h1 style="text-align: center;">欢迎使用XXX系统</h1>
    <el-form :label-position="'right'" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username" @keyup.enter.native="login"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="password" type="password" @keyup.enter.native="login"></el-input>
      </el-form-item>
      <el-form-item style="text-align: center;">
        <el-button @click="login" class="btn el-button--primary">登录</el-button>
        <!--<el-button @click="setlocalstorage" class="btn el-button&#45;&#45;primary">test</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        msg: '登录',
        username: 'admin',
        password: 'admin'
      }
    },
    mounted: function () {
      // this.msg = BASE_URL;
    },
    methods: {
      login: function () {
        if (this.username === 'admin' && this.password === 'admin') {
          window.localStorage.setItem("username", this.username);
          window.localStorage.setItem("password", this.password);
          this.$router.push({name: "main"});
        }
      },
      setlocalstorage: function () {
        window.localStorage.setItem("username", this.username);
        window.localStorage.setItem("password", this.password);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .loginstyle {
    width: 20%;
    position: absolute;
    left: 35%;
    top: 30%;
    border: 1px solid #cccccc;
    padding: 20px;
    background-color: #cccccc;
  }
</style>
