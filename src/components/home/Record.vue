<template>
  <el-card class="box-card">
      <el-table
        :data="tableData"
        border
        stripe
        style="width: 100% "
        @selection-change="handleSelectionChange"
      >
        <el-table-column label="ID" align="center">
            <template slot-scope="scope">
                <span>{{ scope.row.id }}</span>
            </template>
        </el-table-column>
        <el-table-column label="日期" align="center">
            <template slot-scope="scope">
                <span>{{ scope.row.bookingDate }}</span>
            </template>
        </el-table-column>
        <el-table-column label="时间" align="center">
            <template slot-scope="scope">
                <span>{{ scope.row.bookingPeriod }}</span>
            </template>
        </el-table-column>
        <el-table-column label="座位号" align="center">
            <template slot-scope="scope">
                <span>{{ scope.row.seatId }}</span>
            </template>
        </el-table-column>
      </el-table>
    </el-card>
</template>

<script>
import NavMenu from '../common/NavMenu.vue'
export default {
  name: 'Record',  
  data() {
    return {
      tableData: []
      // tableData: [{
      //     id: '1',
      //     date: '2022-05-18',
      //     buildingNum: 'A',
      //     roomID: '101',
      //     seatID: '01'
      //   },
      //   {
      //     id: '2',
      //     date: '2022-05-17',
      //     buildingNum: 'A',
      //     roomID: '102',
      //     seatID: '02'
      //   },
      //   {
      //     id: '3',
      //     date: '2022-05-16',
      //     buildingNum: 'A',
      //     roomID: '103',
      //     seatID: '03'
      //   }]
    };
  },

  mounted() {
  },

  created () {
    var _this = this
    console.log(this.$store.state)
    this.$axios({
      method: 'get',
      url: '/bookingHistory',
      headers: {
        token: NavMenu.token
      }
    })
    .then(res=>{
      console.log(res)
      this.tableData = res.data
    })
      // .get('/bookingHistory', {

      // })
      // .then(successResponse => {
      //   console.log(successResponse)
      //   if (successResponse.data.result === 'success') {
      //     console.log(successResponse)
      //     NavMenu.token = successResponse.data.token
      //     NavMenu.username = this.loginForm.username
      //     NavMenu.password = this.loginForm.password
      //     // var data = this.loginForm
      //     _this.$store.commit('login', _this.loginForm)
      //     var path = this.$route.query.redirect
      //     this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
      //   }
      // })
      // .catch(failResponse => {
      // })
  },

  methods: {
  }
}
</script>