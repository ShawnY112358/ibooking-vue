<template>
    <el-menu
      :default-active="'/index'"
      router
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
      <!--<a href="#nowhere" style="color: #222;float: right;padding: 20px;">更多功能</a>
      <i class="el-icon-menu" style="float:right;font-size: 45px;color: #222;padding-top: 8px"></i>-->
      <span style="position: absolute;padding-top: 15px;right: 5%;font-size: 25px;font-weight: bold;color: #fff">自习室座位预约</span>
    </el-menu>
</template>

<script>
  export default {
    name: 'NavMenu',
    username: '',
    password: '',
    token: '',
    id: 0,
    data () {
      return {
        navList: [
          {name: '/index', navItem: '首页'},
          {name: '/checkin', navItem: '签到'},
          {name: '/record', navItem: '历史记录'},
          {name: '/admin', navItem: '个人中心'}
        ]
      }
    }
  }
</script>

<style scoped>
  a{
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }
</style>

