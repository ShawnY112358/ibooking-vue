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
        <el-table-column label="签到" align="center">
          <template slot-scope="scope" class="active">
            <el-button @click="checkin(scope.row)" type="primary" icon="el-icon-check" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
</template>

<script>
import NavMenu from '../common/NavMenu.vue'
export default {
  name: 'Checkin',  
  data() {
    return {
      tableData: []
    };
  },

  mounted() {
    
  },

  created () {
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
  },

  methods: {
    checkin (data) {
      
      console.log(data.bookingDate)
      this.$axios({
        method: 'post',
        url: '/checkin',
        headers: {
          token: NavMenu.token
        },
        data: {
          id: data.id,
          seatId: data.seatId,
          bookingPeriod: data.bookingPeriod,
          bookingDate: data.bookingDate,
        }
      })
      .then(res=>{
        console.log(res)
        alert(res.data.message)
      })
    }
  }
}
</script>