<template>
	<div class="homeBox">
		<HeaderView></HeaderView>
		<el-container>
			<el-aside><AsideView></AsideView></el-aside>
			<el-main>
				<keep-alive>
		          <router-view class="router-view"></router-view>
		        </keep-alive>
		    </el-main>
		</el-container>
	</div>
</template>
<style>
	.homeBox,section{
		height: 100%;
	}
</style>
<script>
import HeaderView from '../../components/Header.vue'
import AsideView from '../../components/Aside.vue'
export default{
  components: {
    HeaderView,
    AsideView
  }
}
</script>
