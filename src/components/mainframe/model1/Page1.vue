<template>
  <div>
    <h1>{{ msg }}</h1>
    <!--<el-button @click="test">button page1</el-button>-->
    <p>{{tableData}}</p>
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄">
      </el-table-column>
      <el-table-column
        prop="addr"
        label="地址">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
          <el-button type="text">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'Page1',
    data() {
      return {
        msg: "page1 view",
        cc: '',
        tableData:[]
      }
    },
    mounted: function () {
      this.getName();
      this.getTables();
    },
    methods: {
      getName: function () {
        this.$ajax({
          method: 'get',
          url: '/test/hello',
          params: {
            firstName: 'Fred',
            lastName: 'Flintstone'
          }
        }).then((response) => {
          console.log(response.data);
          this.msg = response.data;
        }).catch((error) => {
          console.log(error);
        });
      },
      getTables: function () {
        var params = new URLSearchParams();
        params.append('name', 'hello jdmc你好');
        params.append('id', '2');
        this.$ajax({
          method: 'post',
          url: '/test/tables',
          data: params
        }).then((response) => {
          console.log(response.data);
          this.tableData = response.data;
        }).catch((error) => {
          console.log(error);
        });
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      test: function () {
        alert(123);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
