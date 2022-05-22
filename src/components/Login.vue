<template>
  <div>
    <div class="bigbox">
      <div class="title">
        <div @click="tab(1)" :class="this.tabshow==1?'active':''">学生登录</div>
        <div @click="managerlogin">管理员登录</div>
      </div>
      <hr />
      <div class="containerbox">
        <div v-show="tabshow==1">
        </div>
        <!--<div v-show="tabshow==2">
        </div>-->
      </div>
    </div>
    <body id="poster">
  <el-form class="login-container" label-position="left"
           label-width="0px">
    <h3 class="login_title">系统登录</h3>
    <el-form-item>
      <el-input type="text" v-model="loginForm.username"
                auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="loginForm.password"
                auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">登录</el-button>
    </el-form-item>
  </el-form>
    </body>
  </div>
</template>

<script>
import NavMenu from './common/NavMenu.vue'
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      responseResult: [],
      tabshow: 1
    }
  },
  create () {
    console.log("aaa")
  },
  methods: {
    login () {
      var _this = this
      console.log(this.$store.state)
      this.$axios
        .post('/auth', {
          stuNum: this.loginForm.username,
          pass_hash: this.loginForm.password
        })
        .then(successResponse => {
          console.log(successResponse)
          if (successResponse.data.result === 'success') {
            console.log(successResponse)
            NavMenu.token = successResponse.data.token
            NavMenu.username = this.loginForm.username
            NavMenu.password = this.loginForm.password
            // var data = this.loginForm
            _this.$store.commit('login', _this.loginForm)
            var path = this.$route.query.redirect
            this.$router.replace({path: path === '/' || path === undefined ? '/index' : path})
          }
        })
        .catch(failResponse => {
        })
    },
    tab (val) {
      this.tabshow = val
      console.log('aaaaa')
    },
    managerlogin: function(){
      this.$router.replace('/managerlogin')
    }
  }
}
</script>
<style scoped>
#poster {
  background:url("../assets/log_background.jpg") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}
body{
  margin: 0px;
}
.bigbox .title {
  display: flex;
}
.bigbox .title div {
  padding: 10px 40px;
  border: 1px solid rgb(104, 97, 97);
  cursor: pointer;
  bottom: 0px;
}
.containerbox {
    width: 20%;
    height: 5%;
    background: rgb(121, 8, 8);
    border-radius: 3px;
    position: absolute;
    left: 20%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.active {
  background-color: #000;
  color: #ffff;
}
html,body{
  scroll-behavior:smooth;
}
.login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}
.login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
}
</style>
