<template>
	<div class="HeaderBox">
		<div class="Header-title">后台管理中心</div>
		<div  class="headerBox_user">
			<el-dropdown @command="handleCommand">
			  <span class="el-dropdown-link HeaderBox-username">
			    {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
			  </span>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item command="a">退出</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
			<img class="Header-img" src="../assets/img/1.jpg">
		</div>
	</div>
</template>
<style>
	@import '../assets/css/header.css';
</style>
<script>
import {setCookie, getCookie,delCookie} from '../../static/js/cookie.js'
export default{
  data () {
    return {
    	username:''
    }
  },
  mounted (){
  	if(getCookie('username')){
  		this.username=getCookie('username');
  	}else{
        this.$router.push({path:'/login'})
    }
  },
  methods: {
    handleCommand (command) {
    	delCookie('username');
    	delCookie('password');
    	delCookie('tableLists');
      	this.$router.push({path: '/login'})
        // this.$message('click on item ' + command);
	}
  }
}
</script>
