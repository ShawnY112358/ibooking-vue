<template>
  <el-card class="box-card">
      <search-bar @onSearch="searchResult" ref="searchBar"></search-bar>
      <el-table
        :data="tableData"
        border
        stripe
        style="width: 100% "
        @selection-change="handleSelectionChange"
      >
        <!--<el-table-column type="selection" width="55" align="center"></el-table-column>-->
        <el-table-column prop="id" label="ID" align="center"></el-table-column>
        <el-table-column prop="stuNum" label="学号" align="center"></el-table-column>
        <el-table-column prop="name" label="姓名" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope" class="active">
            <el-button @click="editData(scope.row)" type="primary" icon="el-icon-edit" circle></el-button>
            <el-button @click="removeData(scope.row.id)" type="danger" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row :gutter="20">
        <el-col :span="2" :offset="2">
          <el-button @click="editData()" type="primary" icon="el-icon-plus" ></el-button>
        </el-col>
        <el-col :span="6" :offset="6">
          <div class="block">
            <el-pagination
              background
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage"
              :page-size="pageSize"
              layout="total, prev, next, jumper, pager"
              :total="total"
            ></el-pagination>
          </div>
        </el-col>
      </el-row>
    </el-card>
</template>

<script>
  import SearchBar from './SearchBar'
  export default {
    name: 'Allstudents',  
    components: {SearchBar},
    data() {
    
    return {
    
      currentPage: 1, //当前页数
      pageSize: 8, //每页获取条数（页面大小）
      tableData: [], //存放从后端传来的数据
    };
  },
  mounted() {
    
  	this.fetchdata()
  },
  methods: {
    
    //获取后端数据
    fetchdata() {
      var _this = this
      this.$axios
        .get("/student")
        .then(
          response => {
    
            this.tableData = response.data;
          },
          response => {
    
            console.log("error");
            alert("请求失败");
          }
        );
    },
   }



    /*data() {
      return {
        tableData: []
      }
    },
    methods: {
      gettableData() {
        this.$axios.get('/student').then((res) => {
        this.tableData = res.data;
        }).catch(function(error){
            console.log(error);})
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }*/
  }
</script>