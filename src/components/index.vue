<template>
	<div>
		<div class="Table-breadcrumb">
			<el-breadcrumb separator="/">
			  	<el-breadcrumb-item><i class="el-icon-menu"></i><span class="Table-tlite">自述</span></el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="describeBox">
			<div>
				<h3 class="describe_title">功能</h3>
			  	<el-checkbox-group v-model="checkList">
				    <el-checkbox label="element-ui" disabled class="describe_check"></el-checkbox>
			  	</el-checkbox-group>
			  	<el-checkbox-group v-model="checkList">
				    <el-checkbox label="登录" disabled class="describe_check"></el-checkbox>
			  	</el-checkbox-group>
			  	<el-checkbox-group v-model="checkList">
				    <el-checkbox label="表格" disabled class="describe_check"></el-checkbox>
			  	</el-checkbox-group>
			  	<el-checkbox-group v-model="checkList">
				    <el-checkbox label="表单" disabled class="describe_check"></el-checkbox>
			  	</el-checkbox-group>
			  	<el-checkbox-group v-model="checkList">
				    <el-checkbox label="图表" disabled class="describe_check"></el-checkbox>
			  	</el-checkbox-group>
			  	<el-checkbox-group v-model="checkList">
				    <el-checkbox label="上传" disabled class="describe_check"></el-checkbox>
			  	</el-checkbox-group>
			  	<el-checkbox-group v-model="checkList">
				    <el-checkbox label="列表拖拽" disabled class="describe_check"></el-checkbox>
			  	</el-checkbox-group>
			</div>

		</div>
	</div>
</template>
<script>
export default {
  data () {
    return {
      checkList: ['element-ui','登录','表格','表单','图表','上传','列表拖拽']
    }
  }
}
</script>
<style>
	.describeBox{
		padding: 20px;
		padding: 45px;
	    word-wrap: break-word;
	    background-color: #fff;
	    border: 1px solid #ddd;
        max-width: 980px;
	}
	.describe_title{
		padding-bottom: 10px;
		border-bottom: 1px solid #ddd;
	}
	.describe_check{
		margin-top: 10px;
		width: 100px;
	}
</style>
