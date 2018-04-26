<template>
	<div class="loginBox">
		<div class="login-wrap">
            <div class="login-title">后台管理系统</div>
            <div class="login-content-box">
	            <input type="text" placeholder="请输入用户名" v-model="username">
	            <input type="password" placeholder="请输入密码" v-model="password">
	            <button @click="login()">登录</button>
              <div class="login-txt">账号密码请随意输入</div>
            </div>
        </div>
	</div>
</template>
<style scoped>
	@import '../../assets/css/login.css';
</style>
<script>
import {setCookie, getCookie,delCookie} from '../../../static/js/cookie.js'
export default{
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounthed: {

  },
  methods: {
    login () {
      // 跳转页面
      setCookie('username', this.username, 1);
      setCookie('password', this.password, 1);
      if(this.username != '' && this.password != ''){
        this.$router.push({path: '/index'})
      }else{
        alert('用户名和密码不能为空！')
      }
    }
  }
}
</script>
