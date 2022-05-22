<template>
    <div class="wrapper">
        <div id="msgbox">
            <el-dialog :visible.sync="examineBtn"
                       width="1000px">
      <el-table
        :data="seatdata"
        border
        stripe
        style="width: 100% "
        @selection-change="handleSelectionChange"
      >
        <!--<el-table-column type="selection" width="55" align="center"></el-table-column>-->
        <el-table-column prop="id" label="座位号" align="center"></el-table-column>
        <el-table-column prop="posX" label="排" align="center"></el-table-column>
        <el-table-column prop="posY" label="列" align="center"></el-table-column>
        <el-table-column prop="isAvailble" label="是否可用" align="center"></el-table-column>
        <el-table-column label="选择" align="center">
          <template slot-scope="scope" class="active">
            <el-button @click="select(scope.row)" type="primary" icon="el-icon-edit" circle></el-button>
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
            </el-dialog>
        </div>
    </div>
</template>
<script>
import NavMenu from '../common/NavMenu.vue'
export default {
    components: {},
    data() {
        return {
            form: {},
            examineBtn: false,
            roomdata: [],
            seatdata: [],
            date: ""
        };
    },
    created(){

    },
    methods: {
        init(data, date) {
            console.log("这是详情组件");
            this.examineBtn = true;
            this.date = date
            console.log(data)
            this.$axios({
                method: 'get',
                url: '/room/' + data.id,
                headers: {
                    token: NavMenu.token
                },
                params: {
                    period: 10,
                    date: date
                }
            })
            .then(res=>{
                console.log(res)
                this.seatdata = res.data
            })
        },
        select(data) {
            this.$axios({
                method: 'post',
                url: '/booking',
                headers: {
                    token: NavMenu.token
                },
                data: {
                    seatId: data.id,
                    bookingPeriod: 10,
                    bookingDate: this.date
                }
            })
            .then(res=>{
                console.log(res)
                alert(res.data.message)
            })
        }
    },
};
</script>