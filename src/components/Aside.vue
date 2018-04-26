<template>
	<div class="AsideBox">
		<el-menu
	      default-active="1"
	      class="el-menu-vertical-demo"
	      background-color="#324157"
	      text-color="#fff"
	      active-text-color="#20a0ff">
        	<router-link tag="li" to="/index">
		      	<el-menu-item index="1">
		        	<i class="el-icon-setting"></i>
		        	<span slot="title">自述</span>
		      	</el-menu-item>
		    </router-link>
	      	<el-submenu index="2">
	        	<template slot="title">
		          	<i class="el-icon-menu"></i>
		          	<span>表格</span>
	        	</template>
	        	<router-link tag="li" to="/table">
			        <el-menu-item class="AsideActive" index="1-3">基础表格</el-menu-item>
			    </router-link>
	      	</el-submenu>
        	<router-link tag="li" to="/from">
		      	<el-menu-item index="3">
		        	<i class="el-icon-date"></i>
		        	<span slot="title">表单</span>
		      	</el-menu-item>
		    </router-link>
        	<router-link tag="li" to="/echarts">
		      	<el-menu-item index="4">
		        	<i class="el-icon-star-on"></i>
		        	<span slot="title">图表</span>
		      	</el-menu-item>
		    </router-link>
        	<router-link tag="li" to="/upload">
		      	<el-menu-item index="5">
		        	<i class="el-icon-document"></i>
		        	<span slot="title">上传</span>
		      	</el-menu-item>
		    </router-link>
        	<router-link tag="li" to="/dragdrop">
		      	<el-menu-item index="6">
		        	<i class="el-icon-upload2"></i>
		        	<span slot="title">拖拽</span>
		      	</el-menu-item>
		    </router-link>
	    </el-menu>
	</div>
</template>
<style>
	.AsideBox{
		background: #324157;
	    height: 100%;
	}
	.AsideActive{
		background: #1f2d3d !important;
	}
	.el-menu {
	    border-right: none;
	}
</style>
