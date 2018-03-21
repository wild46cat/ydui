<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-button @click="test">button mainpage</el-button>
  </div>
</template>

<script>
  export default {
    name: 'MainPage',
    data() {
      return {
        msg: "MainPage"
      }
    },
    mounted: function () {
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
