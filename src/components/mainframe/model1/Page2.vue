<template>
  <div>
    <h1>{{ msg }}</h1>
    <el-button @click="test">button page2</el-button>
  </div>
</template>

<script>
  export default {
    name: 'Page2',
    data() {
      return {
        msg: "page2 view"
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
