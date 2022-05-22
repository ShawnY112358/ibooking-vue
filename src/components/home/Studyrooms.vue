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
        <el-table-column prop="buildingNum" label="楼栋" align="center"></el-table-column>
        <el-table-column prop="classroomNum" label="教室" align="center"></el-table-column>
        <el-table-column prop="startPeriod" label="开放时间" align="center"></el-table-column>
        <el-table-column prop="endPeriod" label="结束时间" align="center"></el-table-column>
        <el-table-column label="选择" align="center">
          <template slot-scope="scope" class="active">
            <el-button @click="showdialog(scope.row)" type="primary" icon="el-icon-edit" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-row :gutter="20">
        <el-col :span="6" :offset="12">
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
      <Seatlist :show="visiable" ref="dialog">

      </Seatlist>
    </el-card>
</template>

<script>
import NavMenu from '../common/NavMenu.vue'
import SearchBar from './SearchBar'
import Seatlist from './Seatlist.vue'

export default {
  name: 'Studyrooms',  
  components: 
  {
    SearchBar,
    Seatlist
  },
  data() {
    return { 
      currentPage: 1, //当前页数
      pageSize: 8, //每页获取条数（页面大小）
      tableData: [], //存放从后端传来的数据
      visiable: false,
      date: ""
    };
  },
  mounted() {
  },
  created () {
    this.fetchdata()
    let year = new Date().getFullYear();
    let month = new Date().getMonth() +1;
    let day = new Date().getDate();
    let date = year + '-' + (month < 10 ? '0': '') + month + '-' + day
    this.date = date   //只能当天预约
  },
  methods: {
    //获取后端数据
    fetchdata() {
      var _this = this
      this.$axios({
        method: 'get',
        url: '/room',
        headers: {
          token: NavMenu.token
        }
      })
      .then(res=>{
        console.log(res)
        this.tableData = res.data
      })
      .catch(failResponse => {
        console.log("error");
        alert("请求失败");
      })
    },
    showdialog (data) {
      this.$refs.dialog.init(data, this.date)
    }
  }
}
</script>