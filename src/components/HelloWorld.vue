<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-button @click="test">123</el-button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted: function () {
      this.msg = BASE_URL;
    },
    methods: {
      test: function () {
        alert("ababa");
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
