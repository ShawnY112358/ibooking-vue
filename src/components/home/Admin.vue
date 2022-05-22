<template>
  <el-card class="box-card">
      <el-table
        :data="tableData"
        border
        stripe
        style="width: 100% "
        @selection-change="handleSelectionChange"
      >
        <el-table-column label="姓名" align="center">
            <template slot-scope="scope">
                <span>{{ scope.row.name }}</span>
            </template>
        </el-table-column>
        <el-table-column label="学号" align="center">
            <template slot-scope="scope">
                <span>{{ scope.row.num }}</span>
            </template>
        </el-table-column>
        <el-table-column prop="" label="密码" align="center">
            <template slot-scope="scope">
                <span>{{ scope.row.passwd }}</span>
            </template>
        </el-table-column>
        <el-table-column label="修改" align="center">
          <template slot-scope="scope" class="active">
            <el-button @click="editData(scope.row)" type="primary" icon="el-icon-edit" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
</template>

<script>
import NavMenu from '../common/NavMenu.vue'
  export default {
    name: 'Admin',  
    data() {
    
    return {
      tableData: [{
          name: 'xiaoming',
          num: NavMenu.username,
          passwd: NavMenu.password
        }]
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  }
}
</script>